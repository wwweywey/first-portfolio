import "../styles/header.scss";
const Header = () => {
  return (
    <header id="header">
      <nav className="nav-bar">
        <a href="#">
          <img
            className="page-logo"
            src="Assets/ico/Logo-1.svg"
            alt="page-logo"
          />
        </a>
        <ul>
          <li>
            <a className="navlink" href="#intro-page">
              ABOUT
            </a>
          </li>
          <li>
            <a className="navlink" href="#skill-page">
              SOLUTION
            </a>
          </li>
          <li>
            <a className="navlink" href="#blog-page">
              BLOG
            </a>
          </li>
          <li>
            <a className="navlink" href="#project-page">
              PROJECT
            </a>
          </li>
          <li>
            <a className="navlink" href="#contact-page">
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
