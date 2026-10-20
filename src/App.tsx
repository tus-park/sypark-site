import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
      </main>
      <footer className="footer">©2025. Park Si-Yeon</footer>
    </>
  );
}
