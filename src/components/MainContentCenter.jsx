function MainContentCenter() {

    const mainCenterLinks = [
        {
            id: 1,
            label: "DIGITAL COMICS",
            href: "#",
            imgSrc: "/src/assets/img/buy-comics-digital-comics.png",
            imgAlt: "Comics Digital"
        },
        {
            id: 2,
            label: "DC MERCHANDISE",
            href: "#",
            imgSrc: "/src/assets/img/buy-comics-merchandise.png",
            imgAlt: "Comics Merchandise"
        },
        {
            id: 3,
            label: "SUBSCRIPTION",
            href: "#",
            imgSrc: "/src/assets/img/buy-comics-subscriptions.png",
            imgAlt: "Comics Subscriptions"
        },
        {
            id: 4,
            label: "COMIC SHOP LOCATOR",
            href: "#",
            imgSrc: "/src/assets/img/buy-comics-shop-locator.png",
            imgAlt: "Comics Shop Locator"
        },
        {
            id: 5,
            label: "DC POWER VISA",
            href: "#",
            imgSrc: "/src/assets/img/buy-dc-power-visa.svg",
            imgAlt: "Dc Power Visa"
        }
    ];

    function MainCenterLinkRender() {
        return mainCenterLinks.map((link) => (
            <li key={link.id} className="main-center-link">
                <img src={link.imgSrc} alt={link.imgAlt} />
                <a href={link.href}>{link.label}</a>
            </li>
        ))
    }

    return (
        <section className="main-center">
            <ul className="main-center-list">
                {MainCenterLinkRender(mainCenterLinks)}
            </ul>
        </section>
    )
}
export default MainContentCenter