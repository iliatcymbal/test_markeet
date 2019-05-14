import './main.scss';

export const Main = ({ children }) => (
  <main className="main">
    <section className="main-box">
      {children}
    </section>
  </main>
);
