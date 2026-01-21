function NavbarLink(props) {

    //destrutturiamo il props
    const { id, href, label } = props.link

    return (
        <li><a className="nav-link" href={href}>{label}</a></li>
    )
}

export default NavbarLink