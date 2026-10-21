import Logo from '../assets/Logo.svg'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="주요 메뉴">
        <a href="#works">WORKS</a>
        <a href="#top" className="header__logo" aria-label="맨 위로"><img className='logo' src={ Logo } alt="Logo"></img><h1>si-yeon park site</h1></a>
        <a href="#about">ABOUT</a>
      </nav>
    </header>
  );
}
