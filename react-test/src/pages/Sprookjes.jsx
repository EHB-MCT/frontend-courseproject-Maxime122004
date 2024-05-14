import { useState, useEffect } from 'react';
import Sprookje from './Components/Sprookje';
import DATA from '../data.json';
import SearchFilter from './Components/SearchFilter';

function Sprookjes() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("alles");

    const filteredSprookjes = DATA.filter((sprookje) => {
        const matchesSearchTerm = sprookje.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "alles" || sprookje.genre.toLowerCase() === category;
        return matchesSearchTerm && matchesCategory;
    });

    useEffect(() => {
        const magieKnop = document.querySelector("#magie");
        const queestenKnop = document.querySelector("#queesten");
        const moraliteitKnop = document.querySelector("#moraliteit");
        const dierenverhalenKnop = document.querySelector("#dierenverhalen");
        const trucsKnop = document.querySelector("#trucs");
        const allesKnop = document.querySelector("#alles");

        const handleCategoryClick = (genre) => {
            setCategory(genre);
            document.querySelectorAll('nav ul li').forEach(el => el.classList.remove('active'));
            if (genre === "magie en betovering") {
                magieKnop.classList.add("active");
                queestenKnop.classList.remove("active");
                moraliteitKnop.classList.remove("active");
                dierenverhalenKnop.classList.remove("active");
                trucsKnop.classList.remove("active");
                allesKnop.classList.remove("active");
            }
            else if (genre === "queesten en reizen") {
                magieKnop.classList.remove("active");
                queestenKnop.classList.add("active");
                moraliteitKnop.classList.remove("active");
                dierenverhalenKnop.classList.remove("active");
                trucsKnop.classList.remove("active");
                allesKnop.classList.remove("active");
            }
            else if (genre === "moraliteit en lessen") {
                magieKnop.classList.remove("active");
                queestenKnop.classList.remove("active");
                moraliteitKnop.classList.add("active");
                dierenverhalenKnop.classList.remove("active");
                trucsKnop.classList.remove("active");
                allesKnop.classList.remove("active");
            }
            else if (genre === "dierenverhalen") {
                magieKnop.classList.remove("active");
                queestenKnop.classList.remove("active");
                moraliteitKnop.classList.remove("active");
                dierenverhalenKnop.classList.add("active");
                trucsKnop.classList.remove("active");
                allesKnop.classList.remove("active");
            }
            else if (genre === "trucs en slimme helden") {
                magieKnop.classList.remove("active");
                queestenKnop.classList.remove("active");
                moraliteitKnop.classList.remove("active");
                dierenverhalenKnop.classList.remove("active");
                trucsKnop.classList.add("active");
                allesKnop.classList.remove("active");
            }
            else {
                magieKnop.classList.remove("active");
                queestenKnop.classList.remove("active");
                moraliteitKnop.classList.remove("active");
                dierenverhalenKnop.classList.remove("active");
                trucsKnop.classList.remove("active");
                allesKnop.classList.add("active");
            }
        };

        magieKnop.addEventListener('click', () => handleCategoryClick("magie en betovering"));
        queestenKnop.addEventListener('click', () => handleCategoryClick("queesten en reizen"));
        moraliteitKnop.addEventListener('click', () => handleCategoryClick("moraliteit en lessen"));
        dierenverhalenKnop.addEventListener('click', () => handleCategoryClick("dierenverhalen"));
        trucsKnop.addEventListener('click', () => handleCategoryClick("trucs en slimme helden"));
        allesKnop.addEventListener('click', () => handleCategoryClick("alles"));

        return () => {
            magieKnop.removeEventListener('click', () => handleCategoryClick("magie en betovering"));
            queestenKnop.removeEventListener('click', () => handleCategoryClick("queesten en reizen"));
            moraliteitKnop.removeEventListener('click', () => handleCategoryClick("moraliteit en lessen"));
            dierenverhalenKnop.removeEventListener('click', () => handleCategoryClick("dierenverhalen"));
            trucsKnop.removeEventListener('click', () => handleCategoryClick("trucs en slimme helden"));
            allesKnop.removeEventListener('click', () => handleCategoryClick("alles"));
        };
    }, []);

    return (
        <main>
            <div>
                <SearchFilter onSearch={setSearchTerm} />
                <h1>All projects</h1>
                <section className="sprookjes">
                    {filteredSprookjes.map((item) => (
                        <Sprookje
                            key={item.id}
                            url={item.url}
                            title={item.title}
                            image={item.image}
                            student={item.student}
                            genre={item.genre}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}

export default Sprookjes;
