import FooterLink from "./FooterLink";

function MainFooterTop() {

    const footerLinksComics = [
        { id: 1, label: "Characters", href: "#" },
        { id: 2, label: "Comics", href: "#" },
        { id: 3, label: "Movies", href: "#" },
        { id: 4, label: "TV", href: "#" },
        { id: 5, label: "Games", href: "#" },
        { id: 6, label: "Videos", href: "#" },
        { id: 7, label: "News", href: "#" }
    ];

    const footerLinksShop = [
        { id: 1, label: "Shop DC", href: "#" },
        { id: 2, label: "Shop DC Collectibles", href: "#" }
    ];

    const footerLinksDC = [
        { id: 1, label: "Terms Of Use", href: "#" },
        { id: 2, label: "Privacy policy (New)", href: "#" },
        { id: 3, label: "Ad Choices", href: "#" },
        { id: 4, label: "Advertising", href: "#" },
        { id: 5, label: "Jobs", href: "#" },
        { id: 6, label: "Subscriptions", href: "#" },
        { id: 7, label: "Talent Workshops", href: "#" },
        { id: 8, label: "CPSC Certificates", href: "#" },
        { id: 9, label: "Rating", href: "#" },
        { id: 10, label: "Shop Help", href: "#" },
        { id: 11, label: "Contact Us", href: "#" }
    ];

    const footerLinksSities = [
        { id: 1, label: "DC", href: "#" },
        { id: 2, label: "MAD Magazine", href: "#" },
        { id: 3, label: "DC Kids", href: "#" },
        { id: 4, label: "DC Universe", href: "#" },
        { id: 5, label: "DC Power Visa", href: "#" }
    ];

    function NavbarLinkRender(links) {
        return links.map((link) => (
            <FooterLink
                key={link.id}
                link={link}
            />
        ))
    }

    return (
        <section className="footer-top">
            <div className="footer-top-container">
                <div className="footer-top-left">
                    <div className="footer-top-left-column">
                        <h2>DC COMICS</h2>
                        <ul>
                            {NavbarLinkRender(footerLinksComics)}
                        </ul>
                        <h2>SHOP</h2>
                        <ul>
                            {NavbarLinkRender(footerLinksShop)}
                        </ul>
                    </div>
                    <div className="footer-top-left-column">
                        <h2>DC</h2>
                        <ul>
                            {NavbarLinkRender(footerLinksDC)}
                        </ul>
                    </div>
                    <div className="footer-top-left-column">
                        <h2>SITIES</h2>
                        <ul>
                            {NavbarLinkRender(footerLinksSities)}
                        </ul>
                    </div>
                </div>
                <div className="footer-top-right">
                    <img src="/src/assets/img/dc-logo-bg.png" alt="DC Logo" />
                </div>
            </div>
        </section>
    )
}
export default MainFooterTop