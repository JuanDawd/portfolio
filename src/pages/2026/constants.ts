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
	siClaude,
	siCursor,
} from 'simple-icons'

export const biography =
	'Full-Stack Developer with 4+ years of experience architecting and shipping production-grade web and mobile applications. Deep expertise in the React/Next.js ecosystem, with hands-on experience leading monorepo development, designing real-time data pipelines (Redis, MQTT, SSE), and owning CI/CD automation. Proven track record delivering end-to-end SaaS products independently and leading small engineering teams.'

export const experienceList = [
	{
		position: 'Full-Stack Developer',
		company: 'Melt Studio',
		companyLink: 'https://www.meltstudio.co/',
		time: 'Mar 2024 - Present',
		description: [
			'Currently leading development on Amatis - a customer-facing platform - across web and mobile targets.',
			'Architected and delivered 4 scalable web/mobile solutions within the Next.js App Router ecosystem.',
			'Built and maintained a Turborepo monorepo housing admin, user, and mobile app targets.',
			'Implemented Redis caching layers and orchestrated MQTT pipelines for real-time device-to-database data ingestion.',
			'Designed and optimized PostgreSQL and MySQL schemas and views (including AWS RDS writer/reader setups), resolving collation issues.',
			'Automated release pipelines for 2 Android and 2 iOS apps via GitLab CI/CD, cutting release time from ~8 hours to 1-2.',
			'Deployed and managed infrastructure on AWS (EC2, RDS, DynamoDB, S3 + CloudFront) over 2+ years.',
			'Led architecture design, coordinated sprint tasks, and enforced coding standards and review practices.',
			'Use Claude Code and Cursor in day-to-day development, keeping human review, tests and CI as the quality gate.',
		],
		techStack: [
			'Next.js',
			'Turborepo',
			'PostgreSQL',
			'DrizzleORM',
			'MySQL',
			'Redis',
			'MQTT',
			'GitLab CI/CD',
			'Google Cloud',
			'AWS',
			'Claude Code',
			'Cursor',
		],
	},
	{
		position: 'Full-Stack Developer',
		company: 'Overnights Technologies Inc',
		companyLink: 'https://overnights.com/',
		time: 'Jul 2023 - Dec 2023',
		description: [
			'Designed and optimized scalable RESTful APIs supporting cross-platform web and mobile clients.',
			'Profiled and tuned backend services, reducing API latency and improving horizontal scalability.',
			'Mentored junior developers on testing practices, Git workflows, and structured code review.',
		],
		techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Vite'],
	},
	{
		position: 'Frontend Developer',
		company: 'Selii',
		companyLink: '',
		time: 'Dec 2022 - Jul 2023',
		description: [
			'Built the multi-tenant e-commerce storefront with slug-based business routing: per-business catalog, promotions, featured products, category filtering, and cart.',
			'Structured the UI as an Atomic Design component library (atoms → molecules → organisms → templates), documented in Storybook.',
			'Worked in a 3-person team on a React 17 + MUI v5 app with React Hook Form and Zod.',
		],
		techStack: ['React', 'MUI', 'React Hook Form', 'Zod', 'Storybook', 'Swiper'],
	},
	{
		position: 'Full-Stack Developer',
		company: 'Lácteos Mileto SAS (CheeseOkay)',
		companyLink: '',
		time: 'Feb 2022 - Dec 2022',
		description: [
			'Worked on legacy code for a social e-commerce platform, migrating it to Angular 13.2 and adding PWA capabilities.',
			'Upgraded the codebase to Angular 14 and helped move the product to a mobile-first Ionic PWA.',
			'Implemented backend domain modules (products, cart, coupons, stores, addresses, discounts, purchases) with Express + TypeScript + Sequelize on MySQL/PostgreSQL, plus Cloudinary image uploads.',
		],
		techStack: [
			'Angular',
			'Ionic',
			'PWA',
			'Express',
			'TypeScript',
			'Sequelize',
			'MySQL',
			'PostgreSQL',
			'Cloudinary',
		],
	},
	{
		position: 'Frontend Developer',
		company: 'Faceself',
		companyLink: '',
		time: 'Feb 2022 - Dec 2022',
		description: [
			'Built a cross-platform iOS/Android wellness app (20+ screens) with React, Ionic and Capacitor: onboarding, auth, dashboard, profile and progress flows.',
			'Implemented JWT auth with Formik + Yup validation, Redux Toolkit state management, and a Chart.js analytics view for user history.',
			'Added PWA offline support with Workbox and a CI pipeline (GitHub Actions: ESLint, type-check, Jest) with pre-commit hooks.',
		],
		techStack: [
			'React',
			'Ionic',
			'Capacitor',
			'TypeScript',
			'Redux',
			'Chart.js',
			'Formik',
			'Yup',
			'Workbox',
		],
	},
	{
		position: 'Full-Stack Developer',
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

export const experienceAnchor = (company: string) =>
	`experience-${company
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')}`

export const educationList = [
	{
		degree: "Master's Degree in Software Engineering and Computer Systems",
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
	{ name: 'Learn to Code with Ruby', issuer: 'Udemy', year: '2021' },
	{ name: 'Business Process Modeling', issuer: 'Avaya', year: '2018' },
	{ name: 'React (Basic)', issuer: 'HackerRank', year: '2022' },
]

type Skill = { name: string; icon: string | undefined; hex: string }

export const skillsList: Skill[] = [
	// Grouped by area: frontend, mobile, backend/data, testing, cloud/tooling, AI
	{ name: 'React', icon: siReact.path, hex: siReact.hex },
	{ name: 'Next.js', icon: siNextdotjs.path, hex: siNextdotjs.hex },
	{ name: 'Angular', icon: siAngular.path, hex: siAngular.hex },
	{ name: 'TypeScript', icon: siTypescript.path, hex: siTypescript.hex },
	{ name: 'JavaScript', icon: siJavascript.path, hex: siJavascript.hex },
	{ name: 'Redux', icon: siRedux.path, hex: siRedux.hex },
	{ name: 'TanStack Query', icon: siReactquery.path, hex: siReactquery.hex },
	{ name: 'Zod', icon: siZod.path, hex: siZod.hex },
	{ name: 'Tailwind CSS', icon: siTailwindcss.path, hex: siTailwindcss.hex },
	{ name: 'Sass', icon: siSass.path, hex: siSass.hex },
	{ name: 'Framer Motion', icon: siFramer.path, hex: siFramer.hex },
	{ name: 'Vite', icon: siVite.path, hex: siVite.hex },
	{ name: 'Storybook', icon: siStorybook.path, hex: siStorybook.hex },
	{ name: 'Flutter', icon: siFlutter.path, hex: siFlutter.hex },
	{ name: 'Dart', icon: siDart.path, hex: siDart.hex },
	{ name: 'Node.js', icon: siNodedotjs.path, hex: siNodedotjs.hex },
	{ name: 'Express', icon: siExpress.path, hex: siExpress.hex },
	{ name: 'WebSockets', icon: siSocketdotio.path, hex: siSocketdotio.hex },
	{ name: 'PostgreSQL', icon: siPostgresql.path, hex: siPostgresql.hex },
	{ name: 'MySQL', icon: siMysql.path, hex: siMysql.hex },
	{ name: 'MongoDB', icon: siMongodb.path, hex: siMongodb.hex },
	{ name: 'Firebase', icon: siFirebase.path, hex: siFirebase.hex },
	{ name: 'DrizzleORM', icon: siDrizzle.path, hex: siDrizzle.hex },
	{ name: 'Prisma', icon: siPrisma.path, hex: siPrisma.hex },
	{ name: 'Vitest', icon: siVitest.path, hex: siVitest.hex },
	{ name: 'Jest', icon: siJest.path, hex: siJest.hex },
	{ name: 'Git', icon: siGit.path, hex: siGit.hex },
	{ name: 'Docker', icon: siDocker.path, hex: siDocker.hex },
	{ name: 'AWS', icon: undefined, hex: 'FF9900' },
	{ name: 'Google Cloud', icon: siGooglecloud.path, hex: siGooglecloud.hex },
	{ name: 'Figma', icon: siFigma.path, hex: siFigma.hex },
	{ name: 'Claude Code', icon: siClaude.path, hex: siClaude.hex },
	{ name: 'Cursor', icon: siCursor.path, hex: siCursor.hex },
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
	// Company (as named in experienceList) whose job this project belongs to
	relatedExperience?: string
}

export const projectsList: Project[] = [
	{
		title: 'Innovation Befine',
		type: 'Personal SaaS',
		role: 'Fullstack',
		description:
			'Salon-and-workshop operations platform replacing WhatsApp + Excel for LATAM SMBs. Real-time cashier dashboard via native SSE, three-model payroll engine, offline PWA with IndexedDB queue, and RBAC with four roles.',
		image: '/2026/projects/befine.png',
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
			'Claude Code',
		],
	},
	{
		title: 'Amatis',
		type: 'Client Work',
		role: 'Fullstack',
		description:
			'IoT lighting control platform for commercial buildings, built for the client Amatis through Melt Studio. Integration tokens API, Ports Tuning and firmware update flows, device management, and a web + mobile control app on a Next.js and Node.js monorepo.',
		image: '/2026/projects/amatis.png',
		deployment: 'https://app.amatiscontrols.com/sites/',
		github: undefined,
		technologies: ['Next.js', 'Node.js', 'MySQL', 'MQTT', 'AWS', 'GitLab CI/CD'],
		relatedExperience: 'Melt Studio',
	},
	{
		title: 'Droguería Uno A',
		type: 'Freelance',
		role: 'Frontend',
		description:
			'Public website for a pharmacy in Maicao, Colombia: services, schedule, promotions, testimonials, and a WhatsApp contact flow. Built with React 19, Vite, and Tailwind CSS v4 on Radix UI components, deployed on Vercel behind Cloudflare DNS.',
		image: '/2026/projects/drogueria.png',
		deployment: 'https://www.drogueria-uno-a.com',
		github: undefined,
		technologies: [
			'React',
			'Vite',
			'Tailwind CSS',
			'Radix UI',
			'Vercel',
			'Cloudflare',
			'Claude Code',
		],
	},
	{
		title: 'Self-Hosted Infrastructure (Vaultwarden)',
		type: 'Personal',
		role: 'DevOps',
		description:
			'Self-hosted, Bitwarden-compatible password manager running in Docker on a Raspberry Pi at home. Exposed only through a Cloudflare Tunnel gated by Cloudflare Access (no open ports), with SQLite daily backups, SMTP for invites, and SSH access through the same tunnel. Diagnosed and fixed an ISP-level block on outbound SMTP ports by moving to implicit TLS on 465.',
		image: '/2026/projects/vaultwarden.svg',
		deployment: undefined,
		github: undefined,
		technologies: [
			'Docker',
			'Cloudflare Tunnel',
			'Cloudflare Access',
			'Linux',
			'SQLite',
			'Self-hosting',
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
		relatedExperience: 'Overnights Technologies Inc',
	},
	{
		title: 'Selii',
		type: 'Freelance',
		role: 'Frontend',
		description:
			'Multi-tenant e-commerce storefront with slug-based business routing, product catalog, promotions, cart, and category filtering. Atomic design system (atoms → molecules → organisms) built with MUI v5 and documented in Storybook.',
		image: '/2025/projects/selii.png',
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
		relatedExperience: 'Selii',
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
		relatedExperience: 'Faceself',
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
]

export const socialLinks = {
	github: 'https://github.com/JuanDawd',
	linkedin: 'https://www.linkedin.com/in/juandawd/',
	email: 'JuanDawdB@gmail.com',
}
