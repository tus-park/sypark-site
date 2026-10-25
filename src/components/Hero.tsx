import { Icons } from "../assets/Icons";
import QRcode from '../assets/publishen.png'

const links = [
  { label: '📡 Contact', items: ['Open Talk', 'email@address.com'] },
  { label: '🔗 Link', items: ['Github', 'Codepen'] },
  { label: '📁 Download', items: ['Portfolio.pdf'] },
];

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="wrap hero__inner">
        <h2 className="hero__title">WHERE DESIGN MEETS MARKUP.</h2>
        <div className="hero__info">
          <p className="hero__role">WEB DESIGN &amp; PUBLISHER <br/>| UI/UX <br/>| MARKUP</p>
          <div className="hero__hello">
            <div className="qrcode__box">
              <p><Icons.TalkBubble />Talk QR</p>
              <div className="qrcode__img">
                <img className='qrcode' src={QRcode} alt="Open talk QR code"/>
              </div>
            </div>
            <p>
              HELLO, I&apos;M SI-YEON PARK
              <br />
              GET IN TOUCH <span>↓</span>
            </p>
          </div>
          <dl className="hero__links">
            {links.map((g) => (
              <div key={g.label}>
                <dt>{g.label} :</dt>
                {g.items.map((i) => (
                  <dd key={i}><a href="https://drive.google.com/file/d/1AkludR1Ar2m7kV-FJKYSferKtUo4Pk04/view?usp=drive_link" target="_blank"><Icons.Download />{i}</a></dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
