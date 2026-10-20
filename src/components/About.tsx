import { ability, skills, history } from '../data';
import { Icons } from '../assets/Icons';

type IconName = keyof typeof Icons;


export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <div>
          <h2>ABOUT</h2>
          <p className="about__lead">디자인과 마크업으로 아이디어를 실현하는 &lsquo;박시연&rsquo;입니다.</p>
          <div className="profile">
            <div className="profile__top">
              <div className="profile__avatar" aria-hidden="true" />
              <ul className="profile__meta">
                <li><b>Birth :</b> 26/9/85</li>
                <li><b>Position :</b> UI/UX, Web Publisher</li>
                <li><b>Experience :</b> ~ 5 year</li>
              </ul>
            </div>
            <div className="profile__intro">
              <b>Introduce :</b>
              <p>Lorem ipsum dolor sit amet consectetur. Metus sodales morbi aenean ultrices vitae aliquam donec.</p>
            </div>
          </div>
        </div>
        <div className="about__detail">
          <h3>Ability :</h3>
          <p>{ability}</p>
          <h3>Skills :</h3>
          <ul className="skills">
           {skills.map((g) => (
              <li key={g.category}>
                <span className="skills__cat">({g.category})</span>
                <div>
                {g.items.map((item) => {
                  const Icon = Icons[item as IconName];
                  if (!Icon) {
                    console.error('아이콘 없음:', item);
                    return null;
                  }
                  return(
                      <span className="skills__items">
                        <Icon aria-hidden="true"/>
                        {item}
                      </span>
                  ) 
                })}
                </div>
              </li>
           ))}
          </ul>
          <h3>History :</h3>
          <ul className="history">
            {history.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
