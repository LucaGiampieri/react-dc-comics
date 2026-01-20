function ComicCard(props) {

    //destrutturiamo il props
    const { id, thumb, title, series } = props.comic

    return (
        <a key={id} className="comic-card" href="#">
            <figure>
                <img src={thumb} alt={title} />
            </figure>
            <div className="comic-card-title" >{series.toLocaleUpperCase()}</div>
        </a>
    )
}

export default ComicCard