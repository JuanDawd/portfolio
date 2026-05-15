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
	'Full-Stack Developer with 8+ years of experience architecting and shipping production-grade web and mobile applications. Deep expertise in the React/Next.js ecosystem, with hands-on experience leading monorepo development, designing real-time data pipelines (Redis, MQTT, SSE), and owning CI/CD automation. Proven track record delivering end-to-end SaaS products independently and leading small engineering teams.'

export const experienceList = [
	{
		position: 'Software Developer',
		company: 'Melt Studio',
		companyLink: 'https://www.meltstudio.co/',
		time: 'Mar 2024 - Present',
		description: [
			'Currently leading development on Amatis - a customer-facing platform - across web and mobile targets.',
			'Architected and delivered 4 scalable web/mobile solutions within the Next.js App Router ecosystem.',
			'Built and maintained a Turborepo monorepo housing admin, user, and mobile app targets.',
			'Implemented Redis caching layers and orchestrated MQTT pipelines for real-time device-to-database data ingestion.',
			'Designed and optimized PostgreSQL schemas and views, resolving collation issues and boosting query efficiency.',
			'Automated Android/iOS release pipelines via GitHub Actions CI/CD, cutting release time by 30%.',
			'Led architecture design, coordinated sprint tasks, and enforced coding standards and review practices.',
		],
		techStack: [
			'Next.js',
			'Turborepo',
			'PostgreSQL',
			'DrizzleORM',
			'MySQL',
			'Redis',
			'MQTT',
			'GitHub Actions',
			'Google Cloud',
			'AWS',
		],
	},
	{
		position: 'Solo Full-Stack Developer',
		company: 'Innovation Befine',
		companyLink: '',
		time: '2025 - Present',
		description: [
			'Designed and shipped a salon-and-workshop operations platform replacing WhatsApp + Excel for LATAM SMBs.',
			'Implemented live cashier dashboard using native SSE (Server-Sent Events) - zero third-party cost.',
			"Built a three-model payroll engine (commission, piece-rate, daily-rate) with banker's rounding and full audit trail.",
			'Engineered offline PWA support via IndexedDB queue with idempotency guarantees for financial mutations.',
			'Integrated RBAC with four roles using Better Auth, scoping all routes and server actions by permission.',
		],
		techStack: [
			'Next.js',
			'Turborepo',
			'Neon Postgres',
			'DrizzleORM',
			'TanStack Query',
			'Zustand',
			'Better Auth',
			'Vitest',
			'Playwright',
			'Vercel',
		],
	},
	{
		position: 'Software Developer & IT',
		company: 'Drogueria Uno A',
		companyLink: '',
		time: 'Jan 2018 - Mar 2024',
		description: [
			'Engineered and maintained internal tooling using React, Node.js, and TypeScript.',
			'Resolved database collation and index issues, improving query reliability across multi-tenant systems.',
			'Managed IT infrastructure for a ~30-person company alongside development work.',
		],
		techStack: ['React', 'Node.js', 'TypeScript'],
	},
	{
		position: 'Fullstack Developer',
		company: 'Overnights Technologies Inc',
		companyLink: 'https://overnights.com/',
		time: 'Jul 2023 - Oct 2023',
		description: [
			'Designed and optimized scalable RESTful APIs supporting cross-platform web and mobile clients.',
			'Profiled and tuned backend services, reducing API latency and improving horizontal scalability.',
			'Mentored junior developers on testing practices, Git workflows, and structured code review.',
		],
		techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Vite'],
	},
	{
		position: 'Frontend Developer',
		company: 'Faceself',
		companyLink: '',
		time: 'Feb 2022 - Dec 2022',
		description: [
			'Engineered a reusable Angular component library, significantly reducing code duplication across the platform.',
			'Built and maintained backend services with Node.js + Sequelize, ensuring stable API contracts.',
			'Implemented unit testing and CI/CD pipelines, improving release reliability and rollback speed.',
		],
		techStack: ['Angular', 'Node.js', 'TypeScript', 'Sequelize'],
	},
	{
		position: 'Fullstack Developer',
		company: 'CheeseOkay',
		companyLink: '',
		time: 'Feb 2022 - Dec 2022',
		description: [
			'Led migration from a legacy Angular 12 web app to a mobile-first Angular + Ionic + Capacitor rebuild after evaluating the original architecture.',
			'Designed and implemented 20+ backend domain modules (products, stores, cart, orders, memberships, coupons, wholesale pricing) with Express + Sequelize + MySQL/PostgreSQL.',
			'Integrated third-party services: ePayco (payments), Siigo (invoicing/accounting), Cloudinary (image hosting), Firebase Admin, and SendGrid.',
			'Built the Ionic app with separate backoffice and customer-facing sections, targeting Android via Capacitor.',
		],
		techStack: [
			'Angular',
			'Ionic',
			'Capacitor',
			'Express',
			'TypeScript',
			'Sequelize',
			'MySQL',
			'PostgreSQL',
		],
	},
	{
		position: 'Fullstack Developer',
		company: 'Startup Doc.tors',
		companyLink: '',
		time: 'Jun 2020 - Nov 2020',
		description: [
			'Implemented REST APIs and business logic with Express.js + TypeScript, streamlining MVP backend processes.',
			'Prototyped cross-platform mobile app in Flutter, enabling early-stage investor demos.',
			'Collaborated on MVP scoping, aligning technical feasibility with business objectives.',
		],
		techStack: ['Flutter', 'Dart', 'Express', 'TypeScript'],
	},
]

export const educationList = [
	{
		degree: "Master's Degree in Software Engineering",
		institution: 'UNIR - Universidad Internacional de La Rioja',
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
	{ name: 'English Speaking Level Test', issuer: 'SmallTalk2Me', year: '2024' },
	{ name: 'Learn to Code with Ruby', issuer: 'Udemy', year: '2023' },
	{ name: 'Business Process Modeling', issuer: 'Avaya', year: '2023' },
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
		title: 'Innovation Befine',
		type: 'Personal SaaS',
		role: 'Fullstack',
		description:
			'Salon-and-workshop operations platform replacing WhatsApp + Excel for LATAM SMBs. Real-time cashier dashboard via native SSE, three-model payroll engine, offline PWA with IndexedDB queue, and RBAC with four roles.',
		image: undefined,
		deployment: undefined,
		github: undefined,
		technologies: [
			'Next.js',
			'Turborepo',
			'Neon Postgres',
			'DrizzleORM',
			'Better Auth',
			'TanStack Query',
			'Zustand',
			'Vitest',
			'Playwright',
			'Vercel',
		],
	},
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
		title: 'Selii',
		type: 'Freelance',
		role: 'Frontend',
		description:
			'Multi-tenant e-commerce storefront with slug-based business routing, product catalog, promotions, cart, and category filtering. Atomic design system (atoms → molecules → organisms) built with MUI v5 and documented in Storybook.',
		image: undefined,
		deployment: undefined,
		github: undefined,
		technologies: [
			'React',
			'MUI',
			'React Hook Form',
			'Zod',
			'Storybook',
			'Swiper',
		],
	},
	{
		title: 'Faceself',
		type: 'Freelance',
		role: 'Mobile',
		description:
			'Cross-platform iOS/Android wellness app with 20+ screens: onboarding, JWT auth, dashboard with chart analytics, profile management, and a PWA offline layer. Built with React + Ionic + Capacitor.',
		image: '/2025/projects/faceself.png',
		deployment: undefined,
		github: undefined,
		technologies: [
			'React',
			'Ionic',
			'TypeScript',
			'Redux',
			'Capacitor',
			'Chart.js',
			'Formik',
		],
	},
	{
		title: 'juandawd.dev',
		type: 'Personal',
		role: 'Frontend',
		description:
			'This portfolio - a multi-year site built with React 19, Vite 7, and Tailwind CSS v4. Bento-grid layout, D3 visualizations, Framer Motion animations, and a custom theme provider.',
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
