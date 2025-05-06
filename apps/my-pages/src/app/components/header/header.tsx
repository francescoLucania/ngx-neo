import { HeaderMenu } from '../../mocks/menu/menu';
import PersonalCabinetButton from './components/personal-cabinet-button/personal-cabinet-button';
import styles from './header.module.scss';
import Image from 'next/image'

export function Header() {
  const headerMenu = HeaderMenu;

  return (
    <header className={styles.header + ' ' + 'pages-header'}>
      <div className="container">
        <nav className={styles.header__navigate}>

          <a href='/' className={styles.header__navigate__logo}>
            <img src='/logo.jpg' alt="" />
          </a>

        <ul>
          {headerMenu.common.map((item, i) => (
            <li key={i}>
              <a href={'/' + item.route}>{item.name}</a>
            </li>
          ))}
          <li>
            <PersonalCabinetButton />
          </li>
        </ul>
      </nav>
    </div>
</header>
)
  ;
}

export default Header;
