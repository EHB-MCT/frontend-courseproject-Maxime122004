import { useState } from 'react';
import Sprookje from './Components/Sprookje';
import DATA from '../data.json';
import SearchFilter from './Components/SearchFilter';

function Sprookjes() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSprookjes = DATA.filter((sprookje) =>
        sprookje.title.toLowerCase().includes(searchTerm.toLowerCase())

    );
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