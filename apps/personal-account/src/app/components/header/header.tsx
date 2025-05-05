import { HeaderMenu } from '../../mocks/menu/menu';
import PersonalCabinetButton from './components/personal-cabinet-button/personal-cabinet-button';

export function Header() {
  const headerMenu = HeaderMenu;

  return (
    <header className="account-header">
      <div className="container">
        <nav>
          <ul>
            {headerMenu.common.map((item, i) => (
              <li key={i}>
                <a href={'/' + item.route}>{item.name}</a>
              </li>
            ))}

            <PersonalCabinetButton />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
