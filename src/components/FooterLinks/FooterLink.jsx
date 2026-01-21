function FooterLink(props) {

    //destrutturiamo il props
    const { id, href, label } = props.link

    return (
        <li><a href={href}>{label}</a></li>
    )
}

export default FooterLink