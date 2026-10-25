import type { SkillGroup } from '../types/skils';

export const ability = 'Markup(웹 표준/웹 접근성), Responsive Web, Adaptive Web, Interactive animation';

export const skills: SkillGroup[] = [
  { category: 'Publishing', items: ['HTML5', 'CSS', 'Javascript', 'jQuery', 'SCSS', 'Postcss', 'Tailwind', 'Bootstrap'] },
  { category: 'Design', items: ['Figma', 'Photoshop', 'Illustrator', 'AfterEffect', 'XD'] },
  { category: 'Workspace', items: ['Notion', 'Trello'] },
  { category: 'Version', items: ['Github', 'Gitlab'] },
];

export const history: string[] = Array.from(
  { length: 4 },
  () => '(2022-2023) Sanford Inc [Role] Lead Solutions Assistant'
);
