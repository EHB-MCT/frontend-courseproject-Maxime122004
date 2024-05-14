

function Sprookje(item) {
    return (
        <>
            <a href={item.url}>
                <img src="images/portaal_pagina/sprookjes_template_image.png" />
                <img src={item.image} alt="sprookje" />
                <h2>{item.title}</h2>
                <p>Student</p>
                <p>{item.student}</p>
                <img src="images/portaal_pagina/arrow.png" alt="arrow" />
            </a>
        </>
    )
}

export default Sprookje;