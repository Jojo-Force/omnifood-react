
const Header = () => {
    return (
        <header className="header">
            <a href="#">
                <img className="logo" alt="Omnifood logo" src="/img/omnifood-logo.png"/>
            </a>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a href="#how" className="main-nav-link">How it works</a>
                    </li>
                    <li>
                        <a href="#meals" className="main-nav-link">Meals</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="main-nav-link">Testimonials</a>
                    </li>
                    <li>
                        <a href="#pricing" className="main-nav-link">Pricing</a>
                    </li>
                    <li>
                        <a href="#cta" className="main-nav-link nav-cta">Try for free</a>
                    </li>
                </ul>
            </nav>
            <button className="btn-mobile-nav">
                <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
                <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
            </button>
        </header>
    )
}

export default Header;