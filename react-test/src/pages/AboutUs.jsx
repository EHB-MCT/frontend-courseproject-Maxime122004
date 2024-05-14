import { Link } from "react-router-dom";
import DATA from '../data.json';
import Sprookje from "./Components/Sprookje";
import SearchFilter from './Components/SearchFilter';

function AboutUs() {

    const filteredSprookjes = [];
    // let currentNumber = 0;

    const pickRandomSprookje = () => {
        for (let i = 0; i < 3; i++) {
            let randomSprookje = Math.floor(Math.random() * DATA.length);
            if (i > 0) {
                while (filteredSprookjes.includes(DATA[randomSprookje])) {
                    randomSprookje = Math.floor(Math.random() * DATA.length);
                }
            }
            filteredSprookjes.push(DATA[randomSprookje])
        }
    }
    pickRandomSprookje();


    return (
        <main>
            <div>
                <SearchFilter />
                <h1>Populair</h1>
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
                <Link to='/Sprookjes' className="loadMore">
                    <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    Load more
                </Link>
            </div>
        </main>
    );
}

export default AboutUs;