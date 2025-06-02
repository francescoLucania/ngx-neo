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
          <main>
            <div className="container">{children}</div>
          </main>
          <footer className="footer-header">
            <div className="container">footer</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
