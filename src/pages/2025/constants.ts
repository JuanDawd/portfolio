const skill = (name: string) => `/2024/Skills/${name}.svg`

export const biography =
	'Frontend developer with 5+ years of experience building high-performance web applications. Passionate about clean architecture, pixel-perfect UIs, and seamless user experiences.'

export const experienceList = [
	{
		position: 'Software Developer',
		company: 'Melt Studio',
		companyLink: 'https://www.meltstudio.co/',
		time: '2024 - Present',
		description: [
			'Led and collaborated on 4 web/mobile projects using the Next.js ecosystem.',
			'Delivered apps with Firebase, PostgreSQL (Drizzle), and MySQL backends.',
			'Built admin/user apps (with mobile versions) in a Next.js monorepo.',
			'Integrated CloudAMQP and shared component libraries.',
			'Took technical lead on latest project, coordinating dev efforts and architecture.',
		],
		techStack: ['Next.js', 'Firebase', 'PostgreSQL', 'Drizzle', 'MySQL', 'CloudAMQP'],
	},
	{
		position: 'Software Developer and IT',
		company: 'Drogueria Uno A',
		companyLink: '',
		time: '2018 - 2024',
		description: [
			'Managed IT infrastructure, including system repairs, upgrades, and data recovery strategies across the organization.',
			'Led the development and maintenance of internal tools and customer-facing systems using React, Node.js, and TypeScript.',
			'Improved system performance and data integrity through routine optimization and debugging.',
		],
		techStack: ['React', 'Node.js', 'TypeScript'],
	},
	{
		position: 'Fullstack Developer',
		company: 'Overnights Technologies Inc',
		companyLink: 'https://overnights.com/',
		time: '2023',
		description: [
			'Designed and implemented scalable RESTful APIs supporting cross-platform mobile and desktop applications.',
			'Led performance profiling and system optimization initiatives, reducing latency and improving scalability under production workloads.',
			'Drove feature delivery across the full stack, coordinating with product, QA, and design teams to align with business goals.',
			'Mentored junior developers and enforced best practices in code quality, testing, and Git workflows.',
			'Participated in sprint planning, architecture discussions, and long-term roadmap execution.',
		],
		techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Vite'],
	},
	{
		position: 'Frontend Developer',
		company: 'Faceself',
		companyLink: '',
		time: '2022',
		description: [
			'Engineered modular, reusable frontend components in Angular to support scalable UI development for a real-time social platform.',
			' Developed backend services with Node.js and Sequelize, ensuring reliable API performance and data integrity.',
			' Maintained high code quality through unit testing, continuous integration, and adherence to clean architecture principles.',
			' Delivered full-stack features end-to-end, contributing to bug resolution, platform performance, and long-term maintainability.',
		],
		techStack: ['Angular', 'Node.js', 'Sequelize'],
	},
	{
		position: 'Fullstack Developer',
		company: 'CheeseOkay',
		companyLink: '',
		time: '2022',
		description: [
			'Delivered hybrid mobile applications using React and Ionic, focusing on responsive, accessible UI across platforms.',
			'Led UI/UX consistency efforts in collaboration with design and backend teams.',
			'Participated in Agile sprints, contributing to planning, story definition, and team delivery.',
			'Ensured code quality and maintainability through modular component design and integration standards.',
		],
		techStack: ['React', 'Ionic', 'TypeScript'],
	},
	{
		position: 'Fullstack Developer',
		company: 'Startup Doc.tors',
		companyLink: '',
		time: '2020',
		description:
			'Led frontend development of a Flutter mobile app in a two-person team.',
		techStack: ['Flutter', 'Dart'],
	},
]

export const educationList = [
	{
		degree: "Master's in Web Development",
		institution: 'UNIR',
		time: '2023 - 2025',
	},
	{
		degree: 'B.S. Systems and Computer Engineering',
		institution: 'Universidad del Norte',
		time: '2015 - 2022',
	},
]

export const certificationList = [
	{ name: 'React (Basic)', issuer: 'HackerRank', year: '2022' },
	{ name: 'Learn to program Ruby', issuer: 'Udemy', year: '2021' },
]

export const skillsList = [
	{ name: 'React', icon: skill('React') },
	{ name: 'Next.js', icon: skill('Nextjs') },
	{ name: 'TypeScript', icon: skill('TypeScript') },
	{ name: 'JavaScript', icon: skill('JavaScript') },
	{ name: 'Angular', icon: skill('Angular') },
	{ name: 'Tailwind CSS', icon: skill('Tailwind') },
	{ name: 'Sass', icon: skill('Sass') },
	{ name: 'Framer Motion', icon: skill('Framer') },
	{ name: 'Figma', icon: skill('figma') },
	{ name: 'Flutter', icon: skill('flutter') },
	{ name: 'Dart', icon: skill('Dart') },
	{ name: 'Vite', icon: skill('Vite') },
]

export const projectsList = [
	{
		title: 'Overnights',
		type: 'Freelance',
		role: 'Fullstack',
		image: '/2024/projects/overnights.webp',
		deployment: 'https://www.overnights.com/',
		github: undefined as string | undefined,
		technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Vite'],
	},
	{
		title: 'My Pokedex UNIR',
		type: 'College',
		role: 'Frontend',
		image: '/2024/projects/MyPokedexUnir.png',
		deployment: 'https://my-pokedex-unir.netlify.app/',
		github: 'https://github.com/JuankDawd/my-pokedex-unir',
		technologies: ['React', 'TypeScript', 'MUI', 'Redux'],
	},
	{
		title: 'Guarapo-SSR',
		type: 'Technical Review',
		role: 'Backend',
		image: '/2024/projects/GuarapoSSR.png',
		deployment: 'https://guarapo-ssr.vercel.app/blocks/',
		github: 'https://github.com/JuankDawd/guarapo-ssr/tree/main',
		technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Jest'],
	},
	{
		title: 'Modern Portfolio',
		type: 'Personal',
		role: 'Frontend',
		image: '/2024/projects/overnights.webp',
		deployment:
			'https://next-js-portfolio-with-framer-and-tailwindcss.vercel.app/',
		github:
			'https://github.com/JuankDawd/next.js-portfolio-with-framer-and-tailwindcss',
		technologies: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
	},
]

export const socialLinks = {
	github: 'https://github.com/JuankDawd',
	linkedin: 'https://www.linkedin.com/in/juandawd/',
	email: 'JuanDawdB@gmail.com',
}
