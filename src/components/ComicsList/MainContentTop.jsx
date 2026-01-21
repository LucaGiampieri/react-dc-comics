import comics from "../../data/ComicsList"
import ComicCard from "./ComicsCard"

function MainContentTop() {

    function ComicCardRender() {
        return comics.map((comic) => (
            <ComicCard
                key={comic.id}
                comic={comic}
            />
        ))
    }

    return (
        <section className="main-top">
            <div className="main-top-container">
                <div className="main-top-badge">
                    CURRENT SERIES
                </div>
                {ComicCardRender()}
            </div>
            <div className="main-top-button-container">
                <a href="#" className="main-top-button">LOAD MORE</a>
            </div>

        </section >
    )
}

export default MainContentTop