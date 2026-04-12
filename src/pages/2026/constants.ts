import {
	siReact,
	siNextdotjs,
	siTypescript,
	siJavascript,
	siAngular,
	siTailwindcss,
	siSass,
	siFramer,
	siFigma,
	siFlutter,
	siDart,
	siVite,
	siStorybook,
	siZod,
	siReactquery,
	siSocketdotio,
	siNodedotjs,
	siExpress,
	siMongodb,
	siPostgresql,
	siMysql,
	siFirebase,
	siPrisma,
	siDrizzle,
	siRedux,
	siGit,
	siDocker,
	siGooglecloud,
	siVitest,
	siJest,
} from 'simple-icons'

export const biography =
	'Dynamic Frontend Developer with 8 years of experience building and maintaining customer-facing systems, primarily with React and TypeScript. Led development efforts across multiple products, improved UI workflows, and boosted system efficiency. Currently acting as a technical lead, coordinating architecture and dev efforts.'

export const experienceList = [
	{
		position: 'Software Developer',
		company: 'Melt Studio',
		companyLink: 'https://www.meltstudio.co/',
		time: '2024 – Present',
		description: [
			'Led and collaborated on 4 web/mobile projects using the Next.js ecosystem.',
			'Delivered apps with Firebase, PostgreSQL (Drizzle), and MySQL backends.',
			'Built admin/user apps (with mobile versions) in a Next.js monorepo.',
			'Integrated CloudAMQP and shared component libraries.',
			'Took technical lead on latest project, coordinating dev efforts and architecture.',
		],
		techStack: [
			'Next.js',
			'Firebase',
			'PostgreSQL',
			'DrizzleORM',
			'MySQL',
			'CloudAMQP',
			'Google Cloud',
			'AWS',
		],
	},
	{
		position: 'Software Developer & IT',
		company: 'Drogueria Uno A',
		companyLink: '',
		time: '2018 – 2024',
		description: [
			'Managed IT infrastructure, including system repairs, upgrades, and data recovery.',
			'Led the development and maintenance of internal tools and customer-facing systems.',
			'Improved system performance and data integrity through optimization and debugging.',
		],
		techStack: ['React', 'Node.js', 'TypeScript'],
	},
	{
		position: 'Fullstack Developer',
		company: 'Overnights Technologies Inc',
		companyLink: 'https://overnights.com/',
		time: '2023',
		description: [
			'Designed and implemented scalable RESTful APIs supporting cross-platform applications.',
			'Led performance profiling and system optimization, reducing latency under production workloads.',
			'Mentored junior developers and enforced best practices in code quality and Git workflows.',
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
			'Delivered hybrid mobile applications using React and Ionic across iOS and Android.',
			'Led UI/UX consistency efforts in collaboration with design and backend teams.',
			'Ensured code quality through modular component design and integration standards.',
		],
		techStack: ['React', 'Ionic', 'TypeScript', 'Redux'],
	},
	{
		position: 'Fullstack Developer',
		company: 'CheeseOkay',
		companyLink: '',
		time: '2022',
		description: [
			'Engineered modular Angular components for a real-time social platform.',
			'Developed backend services with Node.js and Sequelize.',
			'Delivered full-stack features end-to-end with unit testing and CI practices.',
		],
		techStack: ['Angular', 'Node.js', 'Sequelize', 'Express'],
	},
	{
		position: 'Fullstack Developer',
		company: 'Startup Doc.tors',
		companyLink: '',
		time: '2020',
		description:
			'Led frontend development of a Flutter mobile app in a two-person startup team.',
		techStack: ['Flutter', 'Dart'],
	},
]

export const educationList = [
	{
		degree: "Master's in Web Development",
		institution: 'UNIR',
		time: '2023 – 2025',
	},
	{
		degree: 'B.S. Systems and Computer Engineering',
		institution: 'Universidad del Norte',
		time: '2015 – 2022',
	},
]

export const certificationList = [
	{ name: 'Frontend Developer (React)', issuer: 'HackerRank', year: '2025' },
	{ name: 'JavaScript (Intermediate)', issuer: 'HackerRank', year: '2025' },
	{ name: 'JavaScript (Basic)', issuer: 'HackerRank', year: '2025' },
	{
		name: 'English Speaking Level Test',
		issuer: 'SmallTalk2Me',
		year: '2024',
	},
	{ name: 'React (Basic)', issuer: 'HackerRank', year: '2022' },
]

type Skill = { name: string; icon: string | undefined; hex: string }

export const skillsList: Skill[] = [
	{ name: 'React', icon: siReact.path, hex: siReact.hex },
	{ name: 'Next.js', icon: siNextdotjs.path, hex: siNextdotjs.hex },
	{ name: 'Angular', icon: siAngular.path, hex: siAngular.hex },
	{ name: 'Flutter', icon: siFlutter.path, hex: siFlutter.hex },
	{ name: 'Framer Motion', icon: siFramer.path, hex: siFramer.hex },
	{ name: 'Redux', icon: siRedux.path, hex: siRedux.hex },
	{ name: 'TanStack Query', icon: siReactquery.path, hex: siReactquery.hex },
	{ name: 'Zod', icon: siZod.path, hex: siZod.hex },
	{ name: 'Tailwind CSS', icon: siTailwindcss.path, hex: siTailwindcss.hex },
	{ name: 'Sass', icon: siSass.path, hex: siSass.hex },
	{ name: 'PostgreSQL', icon: siPostgresql.path, hex: siPostgresql.hex },
	{ name: 'MongoDB', icon: siMongodb.path, hex: siMongodb.hex },
	{ name: 'MySQL', icon: siMysql.path, hex: siMysql.hex },
	{ name: 'Firebase', icon: siFirebase.path, hex: siFirebase.hex },
	{ name: 'DrizzleORM', icon: siDrizzle.path, hex: siDrizzle.hex },
	{ name: 'Prisma', icon: siPrisma.path, hex: siPrisma.hex },
	{ name: 'TypeScript', icon: siTypescript.path, hex: siTypescript.hex },
	{ name: 'JavaScript', icon: siJavascript.path, hex: siJavascript.hex },
	{ name: 'Dart', icon: siDart.path, hex: siDart.hex },
	{ name: 'Vite', icon: siVite.path, hex: siVite.hex },
	{ name: 'Git', icon: siGit.path, hex: siGit.hex },
	{ name: 'Docker', icon: siDocker.path, hex: siDocker.hex },
	{ name: 'Storybook', icon: siStorybook.path, hex: siStorybook.hex },
	{ name: 'Vitest', icon: siVitest.path, hex: siVitest.hex },
	{ name: 'Jest', icon: siJest.path, hex: siJest.hex },
	{ name: 'AWS', icon: undefined, hex: 'FF9900' },
	{ name: 'Google Cloud', icon: siGooglecloud.path, hex: siGooglecloud.hex },
	{ name: 'Figma', icon: siFigma.path, hex: siFigma.hex },
	{ name: 'Node.js', icon: siNodedotjs.path, hex: siNodedotjs.hex },
	{ name: 'Express', icon: siExpress.path, hex: siExpress.hex },
	{ name: 'WebSockets', icon: siSocketdotio.path, hex: siSocketdotio.hex },
]

export type Project = {
	title: string
	type: string
	role: string
	description: string
	image: string | undefined
	deployment: string | undefined
	github: string | undefined
	technologies: string[]
}

export const projectsList: Project[] = [
	{
		title: 'Overnights',
		type: 'Freelance',
		role: 'Fullstack',
		description:
			'Travel platform for accommodation search with kosher-friendly establishment filtering. Full-stack React + Node.js app serving real users in production.',
		image: '/2025/projects/overnights.webp',
		deployment: 'https://www.overnights.com/',
		github: undefined,
		technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Vite'],
	},
	{
		title: 'Guarapo Blocks API',
		type: 'Open Source',
		role: 'Fullstack',
		description:
			'REST API and documentation system for a UI component blocks library. Full OpenAPI spec, PostgreSQL via Prisma, and a comprehensive Jest test suite.',
		image: '/2025/projects/GuarapoSSR.png',
		deployment: 'https://guarapo-ssr.vercel.app/docs',
		github: 'https://github.com/JuanDawd/guarapo-ssr/tree/main',
		technologies: [
			'Next.js',
			'TypeScript',
			'Prisma',
			'PostgreSQL',
			'Jest',
			'OpenAPI',
		],
	},
	{
		title: 'Faceself',
		type: 'Freelance',
		role: 'Mobile',
		description:
			'Cross-platform iOS and Android app for a social/wellness platform. Built with React and Ionic, featuring chart-driven analytics and Redux state management.',
		image: '/2025/projects/faceself.png',
		deployment: undefined,
		github: undefined,
		technologies: ['React', 'Ionic', 'TypeScript', 'Redux', 'Capacitor'],
	},
	{
		title: 'juandawd.dev',
		type: 'Personal',
		role: 'Frontend',
		description:
			'This portfolio — a multi-year site built with React 19, Vite 7, and Tailwind CSS v4. Bento-grid layout, D3 visualizations, Framer Motion animations, and a custom theme provider.',
		image: '/2026/portfolio.webp',
		deployment: 'https://juandawd-portfolio.vercel.app',
		github: 'https://github.com/JuanDawd/portfolio',
		technologies: [
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
			'Framer Motion',
			'D3',
		],
	},
]

export const socialLinks = {
	github: 'https://github.com/JuanDawd',
	linkedin: 'https://www.linkedin.com/in/juandawd/',
	email: 'JuanDawdB@gmail.com',
}
