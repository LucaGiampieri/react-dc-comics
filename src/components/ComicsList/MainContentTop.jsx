import comics from "./ComicsList"

function MainContentTop() {

    function ComicCardRender() {
        return comics.map((comic) => (
            <a key={comic.id} className="comic-card" href="#">
                <figure>
                    <img src={comic.thumb} alt={comic.title} />
                </figure>
                <div className="comic-card-title" >{comic.series.toLocaleUpperCase()}</div>
            </a>
        ))
    }

    return (
        <section className="main-top">
            <div className="main-top-container">
                <div className="main-top-badge">
                    CURRENT SERIES
                </div>
                {ComicCardRender(comics)}
            </div>
            <div className="main-top-button-container">
                <a href="#" className="main-top-button">LOAD MORE</a>
            </div>

        </section >
    )
}

export default MainContentTop