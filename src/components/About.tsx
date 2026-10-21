import { ability, skills, history } from '../data';
import { Icons } from '../assets/Icons';
import Avatar from '../assets/avatar.svg';

type IconName = keyof typeof Icons;


export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        {/* profile start */}
        <div className='about__head'><h3>ABOUT 🤔</h3></div>
        <div className='about'>
          <div className='about__bio'>
            <p className="about__lead">디자인과 마크업으로 아이디어를 실현하는 <br/> <span>&lsquo;박시연&rsquo;</span>입니다.</p>
            <div className="profile">
              <div className="profile__top">
                <div className="profile__avatar" aria-hidden="true">
                  <img src={Avatar} alt="프로필 캐릭터 이미지" />
                </div>
                <div className="profile__meta">
                  <dl>
                    <dt>Birth :</dt> 
                    <dd>26/9/85</dd>
                  </dl>
                  <dl>
                    <dt>Position :</dt> 
                    <dd>UI/UX, Web Designer, Web Publisher</dd>
                  </dl>
                  <dl>
                    <dt>Experience :</dt> 
                    <dd>~ 5 year</dd>
                  </dl>
                </div>
              </div>
              <dl className="profile__intro">
                <dt>Introduce :</dt>
                <dd>Lorem ipsum dolor sit amet consectetur. Metus sodales morbi aenean ultrices vitae aliquam donec.</dd>
              </dl>
            </div>
          </div>
          {/* profile end */}
          
          {/* skill lists start */}
          <div className="about__detail">
            <dl className='about__ability'>
              <dt>Ability :</dt>
              <dd>{ability}</dd>
            </dl>

            <dl className="about__skills">
              <dt>Skills :</dt>
              {skills.map((g) => (
                  <dd key={g.category}>
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
                  </dd>
              ))}
            </dl>
            <dl className="about__history">
              <dt>History :</dt>  
              <dd>&#40;2026 - 현재&#41; STILL SPHERE &#91;Role&#93;Founder, Creator | 방송통신대학교 경영학과 편입</dd>
              <dd>&#40;2025 - 2026&#41; 방송통신대학교 컴퓨터과학과 편입/중퇴</dd>
              <dd>&#40;2022~2024&#41; 나라지식정보 &#91;Role&#93;Web Designer, Web Pubddsher</dd>
              <dd>&#40;2020~2022&#41; 미디어그룹사람과숲 &#91;Role&#93;Web Designer, Web Pubddsher</dd>
              <dd>&#40;2017~2019&#41; &#91;Freelancer&#93; Image Post-Processor</dd>
              <dd>&#40;2017&#41; 그린컴퓨터아트학원 응용SW엔지니어링</dd>
              <dd>&#40;2016~2017&#41; 리메인 &#91;Role&#93;UI/UX Designer</dd>
              <dd>&#40;2015&#41; 그린컴퓨터아트학원 웹디자인&#40;웹퍼블리셔&#41;</dd>
              <dd>&#40;2013&#41; 한림성심대학교 영상콘텐츠과 졸업</dd>      
            </dl>
          </div>
          {/* skill lists end */}
        </div>
      </div>
    </section>
  );
}
