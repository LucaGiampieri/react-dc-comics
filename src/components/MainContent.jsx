function MainContent() {
    return (
        <main>
            <section className="main-top">
                <div className="main-top-container">
                    <a className="main-top-link" href="#">
                        {"--> Content goes here <--"}
                    </a>
                </div>
            </section>
            <section className="main-center">
                <ul className="main-center-list">
                    <li className="main-center-link">
                        <img src="/src/assets/img/buy-comics-digital-comics.png" alt="Comics Digital" />
                        <a href="#">DIGITAL COMICS</a>
                    </li>
                    <li className="main-center-link">
                        <img src="/src/assets/img/buy-comics-merchandise.png" alt="Comics Merchandise" />
                        <a href="#">DC MERCHANDISE</a>
                    </li>
                    <li className="main-center-link">
                        <img src="/src/assets/img/buy-comics-subscriptions.png" alt="Comics Subscriptions" />
                        <a href="#">SUBSCRIPTION</a>
                    </li>
                    <li className="main-center-link">
                        <img src="/src/assets/img/buy-comics-shop-locator.png" alt="Comics Shop Locator" />
                        <a href="#">COMIC SHOP LOCATOR</a>
                    </li>
                    <li className="main-center-link">
                        <img src="/src/assets/img/buy-dc-power-visa.svg" alt="Dc Power Visa" />
                        <a href="#">DC POWER VISA</a>
                    </li>
                </ul>
            </section>
            <section className="main-bottom"></section>


        </main >
    )
}
export default MainContent