function MainCenterLink(props) {

    //destrutturiamo il props
    const { id, imgSrc, imgAlt, href, label } = props.link

    return (
        <li className="main-center-link">
            <img src={imgSrc} alt={imgAlt} />
            <a href={href}>{label}</a>
        </li>
    )
}

export default MainCenterLink