function MainHeader() {
    return (
        <header>
            <nav className="nav-header">
                <figure className="nav-logo">
                    <img src="/dc-logo.png" alt="Logo" />
                </figure>
                <ul className="nav-list">
                    <li><a className="nav-link" href="#">CHARACTERS</a></li>
                    <li><a className="nav-link" href="#">COMICS</a></li>
                    <li><a className="nav-link" href="#">MOVIES</a></li>
                    <li><a className="nav-link" href="#">TV</a></li>
                    <li><a className="nav-link" href="#">GAMES</a></li>
                    <li><a className="nav-link" href="#">COLLECTIBLES</a></li>
                    <li><a className="nav-link" href="#">VIDEOS</a></li>
                    <li><a className="nav-link" href="#">FANS</a></li>
                    <li><a className="nav-link" href="#">NEWS</a></li>
                    <li><a className="nav-link" href="#">SHOP</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader