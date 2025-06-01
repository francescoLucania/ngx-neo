import { HeaderMenu } from '../../mocks/menu/menu';
import styles from './header.module.scss';
import Link from 'next/link';
import UserMenu from './components/user-menu/user-menu';

export function Header() {
  const headerMenu = HeaderMenu;

  return (
    <header className={styles.header + ' ' + 'pages-header'}>
      <div className="container">
        <nav className={styles.header__navigate}>
          <Link href="/" className={styles.header__navigate__logo}>
            <img src="/logo.jpg" alt="" />
          </Link>

          <ul>
            {headerMenu.common.map((item, i) => (
              <li key={i}>
                <a href={'/' + item.route}>{item.name}</a>
              </li>
            ))}
            <li>
              <UserMenu/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
