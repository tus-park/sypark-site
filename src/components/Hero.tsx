import { ComponentType, SVGProps } from "react";
import { Icons } from "../assets/Icons";
import QRcode from '../assets/publishen.png'

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface LinkItem {
  label : string;
  href: string;
  icon?: IconType;
}
interface LinkGroup {
  title: string;
  items: LinkItem[];
}

const links : LinkGroup[] = [
  {
    title: '📡 Contact',
    items: [
      {label: 'Open Talk', icon: Icons.TalkBubble, href: 'https://open.kakao.com/me/4syeon'},
      {label: 'tlduspark89@gmail.com', icon: Icons.Email, href: 'tlduspark89@gmail.com'}
    ]
  },
  {
    title: '🔗 Link',
    items: [
      {label: 'Github', icon: Icons.Github, href: 'https://github.com/tus-park'}
    ]
  },
  {
    title: '📁 Download',
    items: [
      {label: 'Portfolio.pdf', icon: Icons.Download, href: 'https://drive.google.com/file/d/1AkludR1Ar2m7kV-FJKYSferKtUo4Pk04/view?usp=drive_link'}
    ]
  }
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
          <div className="hero__links">
            {links.map((g) => (
              <dl key={g.title}>
                <dt>{g.title} :</dt>
                {g.items.map((i) => {
                  const Icon = i.icon;
                  return (
                    <dd key={i.label}><a href={i.href} target="_blank">{ Icon && <Icon />}{i.label}</a></dd>
                  )
                })}
              </dl>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
