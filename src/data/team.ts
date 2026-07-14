export interface TeamMember {
  slug: string;
  imageSrc: string;
  body: string;
  specs: Array<{ label: string; value: string }>;
}

export const team: TeamMember[] = [
  {"slug":"item-wqrjw","imageSrc":"http://img.b2bpic.net/free-photo/professional-young-woman-holding-mobile-phone_23-2148452658.jpg","body":"Sarah brings over fifteen years of executive leadership experience in the digital SaaS space, having previously scaled three startups from early-stage funding to successful acquisitions. Her strategic vision focuses on sustainable growth and building inclusive, high-performing cultures that empower individuals to do their best work.\n\nWhen she is not guiding our company's long-term roadmap or meeting with key stakeholders, Sarah is an active mentor in the local tech community. She regularly speaks at industry conferences about the future of cloud computing and the importance of ethical AI development.","specs":[{"label":"Role","value":"Chief Executive Officer"},{"label":"Experience","value":"15+ Years"},{"label":"Education","value":"MBA, Stanford University"},{"label":"Location","value":"San Francisco, CA"},{"label":"Joined","value":"March 2018"}]},
  {"slug":"item-turgx","imageSrc":"http://img.b2bpic.net/free-photo/beautiful-landscape-from-magazine-coming-life_23-2151158560.jpg","body":"Marcus leads our creative department with a keen eye for user-centric design and a passion for accessible digital experiences. Before joining the team, he spent a decade at top-tier design agencies, crafting award-winning brand identities and interactive platforms for global lifestyle brands.\n\nHe believes that great design is invisible and works closely with our engineering team to ensure every product we ship is both beautiful and highly functional. Outside the office, Marcus is an avid film photographer and can often be found exploring coastal trails with his vintage camera.","specs":[{"label":"Role","value":"Creative Director"},{"label":"Experience","value":"10+ Years"},{"label":"Specialty","value":"UX/UI & Brand Identity"},{"label":"Location","value":"Portland, OR"},{"label":"Joined","value":"August 2020"}]},
];

export function findTeamMember(slug: string): TeamMember | undefined {
  return team.find((x) => x.slug === slug);
}
