function NavListSort() {
  return (
    <ul className="nav-list site-menu-list mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">
          男款
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          女款
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          最新消息
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          客製商品
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          聯絡我們
        </a>
      </li>
    </ul>
  );
}

function NavListIcon() {
  return (
    <ul className="nav-list site-action-list">
      {/* search */}
      <li className="nav-item">
        <object
          data="./assets/search.svg"
          className="nav-icon cursor-point"
          type="image/svg+xml"
        ></object>
      </li>
      {/* cart */}
      <li className="nav-item">
        <object
          data="./assets/cart.svg"
          className="nav-icon cursor-point"
          type="image/svg+xml"
        ></object>
      </li>
      <li id="theme-toggle" className="nav-item">
        {/* moon */}
        <object
          data="./assets/moon.svg"
          className="nav-icon cursor-point"
        ></object>
        {/* sun */}
        {/* <object data="./public/icons/sun.svg" className="nav-icon cursor-point">
          </object> */}
      </li>
    </ul>
  );
}

function Logo() {
    return (
      <a className="header-logo-container" href="#">
        <img src="./assets/logo.svg" className="cursor-point" />
      </a>
    );
}


export default function Header() {
  return (
    <div className="header-container">
      <nav className="navbar-menu">
        <NavListSort />
        <NavListIcon />
      </nav>
      <Logo />
    </div>
  );
}