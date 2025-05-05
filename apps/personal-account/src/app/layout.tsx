import './global.scss';
import Header from './components/header/header';

export const metadata = {
  title: 'Welcome to Personal Account',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <footer className="footer-header">
            <div className="container">footer</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
