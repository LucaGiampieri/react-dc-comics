import NavbarLink from "./NavbarLink";

function HeaderNavbar() {

    const navLinks = [
        { id: 1, label: "CHARACTERS", href: "#" },
        { id: 2, label: "COMICS", href: "#" },
        { id: 3, label: "MOVIES", href: "#" },
        { id: 4, label: "TV", href: "#" },
        { id: 5, label: "GAMES", href: "#" },
        { id: 6, label: "COLLECTIBLES", href: "#" },
        { id: 7, label: "VIDEOS", href: "#" },
        { id: 8, label: "FANS", href: "#" },
        { id: 9, label: "NEWS", href: "#" },
        { id: 10, label: "SHOP", href: "#" }
    ];

    function NavbarLinkRender() {
        return navLinks.map((link) => (
            <NavbarLink
                key={link.id}
                link={link}
            />
        ))
    }

    return (
        <nav className="nav-header">
            <figure className="nav-logo">
                <img src="/dc-logo.png" alt="Logo" />
            </figure>
            <ul className="nav-list">
                {NavbarLinkRender()}
            </ul>
        </nav>
    )
}
export default HeaderNavbar