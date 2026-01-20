function FooterLink(props) {

    //destrutturiamo il props
    const { id, href, label } = props.link

    return (
        <li key={id}><a href={href}>{label}</a></li>
    )
}

export default FooterLink