import './header.css';
import logoImage from './../../img/icons/logo.svg';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logoImage} alt="Logo" />
						<span>Fashion</span>
					</div>
					<nav className="header__nav">
						<ul>
							<li>
								<a href="#!">CATALOGUE</a>
							</li>
							<li>
								<a href="#!">FASHION</a>
							</li>
							<li>
								<a href="#!">FAVOURITE</a>
							</li>
							<li>
								<a href="#!">LIFESTYLE</a>
							</li>
							<li>
								<a className="header__nav-btn" href="#!">SIGN UP</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header;