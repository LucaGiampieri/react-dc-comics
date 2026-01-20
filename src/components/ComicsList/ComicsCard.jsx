function ComicCard(props) {

    //destrutturiamo il props
    const { id, thumb, title, series } = props

    return (
        <a key={props.id} className="comic-card" href="#">
            <figure>
                <img src={props.thumb} alt={props.title} />
            </figure>
            <div className="comic-card-title" >{props.series.toLocaleUpperCase()}</div>
        </a>
    )
}

export default ComicCard