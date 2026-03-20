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
	'Dynamic Frontend Developer with 8 years of experience in creating and enhancing customer-facing systems using React and TypeScript. Led the development and maintenance efforts, streamlining user interface workflows and boosting system efficiency, resulting in enhanced user experiences across platforms. Seeking opportunities to leverage skills in React and TypeScript to drive innovation and user-centric designs in a forward-thinking team.'

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
		techStack: [
			'Next.js',
			'Firebase',
			'PostgreSQL',
			'DrizzleORM',
			'MySQL',
			'CloudAMQP',
			'Typeform',
			'Google',
			'AWS',
			'Agentic Development',
		],
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
			'Delivered hybrid mobile applications using React and Ionic, focusing on responsive, accessible UI across platforms.',
			'Led UI/UX consistency efforts in collaboration with design and backend teams.',
			'Participated in Agile sprints, contributing to planning, story definition, and team delivery.',
			'Ensured code quality and maintainability through modular component design and integration standards.',
		],
		techStack: ['React', 'Ionic', 'TypeScript'],
	},
	{
		position: 'Fullstack Developer',
		company: 'CheeseOkay',
		companyLink: '',
		time: '2022',
		description: [
			'Engineered modular, reusable frontend components in Angular to support scalable UI development for a real-time social platform.',
			'Developed backend services with Node.js and Sequelize, ensuring reliable API performance and data integrity.',
			'Maintained high code quality through unit testing, continuous integration, and adherence to clean architecture principles.',
			'Delivered full-stack features end-to-end, contributing to bug resolution, platform performance, and long-term maintainability.',
		],
		techStack: ['Angular', 'Node.js', 'Sequelize', 'Express'],
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
	{ name: 'Frontend Developer (React)', issuer: 'HackerRank', year: '2025' },
	{ name: 'JavaScript (Intermediate)', issuer: 'HackerRank', year: '2025' },
	{ name: 'JavaScript (Basic)', issuer: 'HackerRank', year: '2025' },
	{
		name: 'SmallTalk English Speaking Level Test',
		issuer: 'SmallTalk2Me',
		year: '2024',
	},
	{ name: 'React (Basic)', issuer: 'HackerRank', year: '2022' },
	{ name: 'Learn to Code with Ruby', issuer: 'Udemy', year: '2021' },
	{ name: 'Modelado de proceso de Negocios', issuer: 'Avaya', year: '2018' },
]

type Skill = { name: string; icon: string | undefined; hex: string }

export const skillsList: Skill[] = [
	{ name: 'React', icon: siReact.path, hex: siReact.hex },
	{ name: 'Next.js', icon: siNextdotjs.path, hex: siNextdotjs.hex },
	{ name: 'Angular', icon: siAngular.path, hex: siAngular.hex },
	{ name: 'Flutter', icon: siFlutter.path, hex: siFlutter.hex },
	{ name: 'Framer Motion', icon: siFramer.path, hex: siFramer.hex },
	{ name: 'Redux', icon: siRedux.path, hex: siRedux.hex },
	{
		name: 'TanStack Query',
		icon: siReactquery.path,
		hex: siReactquery.hex,
	},
	{ name: 'Zod', icon: siZod.path, hex: siZod.hex },
	{
		name: 'Tailwind CSS',
		icon: siTailwindcss.path,
		hex: siTailwindcss.hex,
	},
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
	{
		name: 'Google Cloud',
		icon: siGooglecloud.path,
		hex: siGooglecloud.hex,
	},
	{ name: 'Figma', icon: siFigma.path, hex: siFigma.hex },
	{ name: 'Node.js', icon: siNodedotjs.path, hex: siNodedotjs.hex },
	{ name: 'Express', icon: siExpress.path, hex: siExpress.hex },
	{ name: 'WebSockets', icon: siSocketdotio.path, hex: siSocketdotio.hex },
]

export const projectsList = [
	{
		title: 'Overnights',
		type: 'Freelance',
		role: 'Fullstack',
		image: '/2025/projects/overnights.webp',
		deployment: 'https://www.overnights.com/',
		github: undefined as string | undefined,
		technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Vite'],
	},
	{
		title: 'My Pokedex UNIR',
		type: 'College',
		role: 'Frontend',
		image: '/2025/projects/MyPokedexUnir.png',
		deployment: 'https://my-pokedex-unir.netlify.app/',
		github: 'https://github.com/JuanDawd/my-pokedex-unir',
		technologies: ['React', 'TypeScript', 'MUI', 'Redux'],
	},
	{
		title: 'Guarapo-SSR',
		type: 'Technical Review',
		role: 'Backend',
		image: '/2025/projects/GuarapoSSR.png',
		deployment: 'https://guarapo-ssr.vercel.app/blocks/',
		github: 'https://github.com/JuanDawd/guarapo-ssr/tree/main',
		technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Jest'],
	},
	{
		title: 'Modern Portfolio',
		type: 'Personal',
		role: 'Frontend',
		image: '/2025/projects/overnights.webp',
		deployment:
			'https://next-js-portfolio-with-framer-and-tailwindcss.vercel.app/',
		github:
			'https://github.com/JuanDawd/next.js-portfolio-with-framer-and-tailwindcss',
		technologies: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
	},
]

export const socialLinks = {
	github: 'https://github.com/JuanDawd',
	linkedin: 'https://www.linkedin.com/in/juandawd/',
	email: 'JuanDawdB@gmail.com',
}
