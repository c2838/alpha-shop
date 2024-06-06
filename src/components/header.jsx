import logoImg from '../assets/logo.svg'
import searchImg from '../assets/search.svg'
import cartImg from '../assets/cart.svg';
import moonImg from '../assets/moon.svg';
import headerStyle from '../style/header.module.css'

function NavListSort() {
  return (
    <ul className={headerStyle.navbarList}>
      <li className={headerStyle.navItem}>
        <a className={headerStyle.navItemHerf} href="#">
          男款
        </a>
      </li>
      <li className={headerStyle.navItem}>
        <a className={headerStyle.navItemHerf} href="#">
          女款
        </a>
      </li>
      <li className={headerStyle.navItem}>
        <a className={headerStyle.navItemHerf} href="#">
          最新消息
        </a>
      </li>
      <li className={headerStyle.navItem}>
        <a className={headerStyle.navItemHerf} href="#">
          客製商品
        </a>
      </li>
      <li className={headerStyle.navItem}>
        <a className={headerStyle.navItemHerf} href="#">
          聯絡我們
        </a>
      </li>
    </ul>
  );
}

function NavListIcon() {
  return (
    <ul className={headerStyle.navbarListIcon}>
      {/* search */}
      <li className={headerStyle.navIconItem}>
        <object
          data={searchImg}
          className={headerStyle.navIconImg}
          type="image/svg+xml"
        ></object>
      </li>
      {/* cart */}
      <li className={headerStyle.navIconItem}>
        <object
          data={cartImg}
          className={headerStyle.navIconImg}
          type="image/svg+xml"
        ></object>
      </li>
      <li id="theme-toggle" className={headerStyle.navIconItem}>
        {/* moon */}
        <object data={moonImg} className={headerStyle.navIconImg}></object>
        {/* sun */}
        {/* <object data="./public/icons/sun.svg" className="nav-icon cursor-point">
          </object> */}
      </li>
    </ul>
  );
}

function Logo() {
    return (
      <a className={headerStyle.logo} href="#">
        <img src={logoImg} className={headerStyle.logoImg} />
      </a>
    );
}


export default function Header() {
  return (
    <div className={headerStyle.headerContainer}>
      <nav className={headerStyle.navbar}>
        <NavListSort />
        <Logo />
        <NavListIcon />
      </nav>
    </div>
  );
}