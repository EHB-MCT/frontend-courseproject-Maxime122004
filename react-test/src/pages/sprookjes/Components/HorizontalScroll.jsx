import Tekst1 from "../Animations_components/AnimateTekstLeft1";
import Tekst2 from "../Animations_components/AnimateTekstLeft1";

function HorizontalScroll() {
    return (
        <>
            <div className="scroll-container">
                <div>
                    <Tekst1 />
                    <Tekst2 />
                    <img src="images/sprookje/path_to_house.png" />
                </div>
            </div>
        </>
    )
}

export default HorizontalScroll;