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

export type Experience = {
	position: string
	company: string
	companyLink: string
	time: string
	description: string[]
	techStack: string[]
	// Client projects within this job, each linking to its public case study
	clients?: { name: string; url: string }[]
}

export const experienceList: Experience[] = [
	{
		position: 'Full-Stack Developer',
		company: 'Melt Studio',
		companyLink: 'https://www.meltstudio.co/',
		time: 'Mar 2024 - Present',
		clients: [
			{
				name: 'Amatis',
				url: 'https://www.meltstudio.co/case-studies/amatis',
			},
			{
				name: 'Raíz',
				url: 'https://www.meltstudio.co/case-studies/raiz',
			},
			{
				name: 'Suscripciones',
				url: 'https://www.meltstudio.co/case-studies/suscripciones',
			},
		],
		description: [
			'Delivered 4 web and mobile client projects, including Amatis (IoT lighting control) and Raíz for Caramelo Escaso (cultural-maturity assessment), on Next.js and React.',
			"Designed and deployed Raíz's questionnaire module (Next.js 15, tRPC, Drizzle/PostgreSQL): sends assessments to each company's respondents and ingests every answer through webhooks, in production for about 2 years.",
			'Automated release pipelines for 2 Android and 2 iOS apps with GitLab CI/CD, cutting release time from about 8 hours to 1-2.',
			'Own features end to end on Amatis, a long-lived IoT lighting platform (Express/MySQL API, Next.js web app, Capacitor mobile app): scoped integration tokens and a refresh-token auth flow.',
			"Built Raíz's results comparison view: a pyramid-shaped radar chart comparing a company's first, later and baseline questionnaires.",
			'Act as de-facto tech lead on client work: coordinate sprint tasks, enforce coding standards and run code reviews.',
			'Maintained and extended a Turborepo monorepo with admin, user and mobile app targets.',
			'Worked on Redis caching and MQTT device calls for real-time device-to-database data ingestion.',
			'Designed and optimized MySQL schemas and views, including an AWS RDS writer/reader setup, and resolved collation issues.',
			'Worked with AWS infrastructure (EC2, RDS, DynamoDB, S3, CloudFront) for 2+ years.',
			'Use Claude Code and Cursor daily, keeping human review, tests and CI as the quality gate.',
		],
		techStack: [
			'Next.js',
			'React',
			'tRPC',
			'DrizzleORM',
			'PostgreSQL',
			'MySQL',
			'Redis',
			'MQTT',
			'Turborepo',
			'GitLab CI/CD',
			'AWS',
			'Claude Code',
		],
	},
	{
		position: 'Full-Stack Developer',
		company: 'Overnights Technologies Inc',
		companyLink: 'https://overnights.com/',
		time: 'Jul 2023 - Dec 2023',
		description: [
			'Travel platform for accommodation search with kosher-friendly filtering, serving real users in production.',
			"Designed and optimized RESTful APIs for the platform's web and mobile clients with Express, TypeScript and MongoDB.",
			'Built booking and host flows on the Vite, React and MUI frontend, with unit and integration tests, in a 15+ developer team using Jira and CI/CD.',
		],
		techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Vite', 'MUI', 'Jest'],
	},
	{
		position: 'Frontend Developer (Contract)',
		company: 'Selii',
		companyLink: '',
		time: 'Dec 2022 - Jul 2023',
		description: [
			'Built the multi-tenant e-commerce storefront with slug-based business routing: per-business catalog, promotions, featured products, category filtering, and cart.',
			'Structured the UI as an Atomic Design component library (atoms → molecules → organisms → templates), documented in Storybook.',
			'Worked in a 3-person team on a React 17 and MUI v5 app with React Hook Form and Zod.',
		],
		techStack: ['React', 'MUI', 'React Hook Form', 'Zod', 'Storybook', 'Swiper'],
	},
	{
		position: 'Full-Stack Developer (Contract)',
		company: 'Lácteos Mileto SAS (CheeseOkay)',
		companyLink: '',
		time: 'Feb 2022 - Dec 2022',
		description: [
			'Migrated a legacy codebase to Angular 13.2, then 14, and helped move the product to a mobile-first Ionic PWA targeting Android with Capacitor.',
			'Implemented 20+ backend domain modules (products, stores, cart, orders, memberships, coupons, wholesale pricing) with Express, TypeScript and Sequelize on MySQL/PostgreSQL.',
			'Integrated third-party services: ePayco (payments), Siigo (invoicing), Cloudinary (images), Firebase Admin and SendGrid.',
		],
		techStack: ['Angular', 'Ionic', 'Capacitor', 'PWA', 'Express', 'TypeScript', 'Sequelize', 'MySQL', 'PostgreSQL'],
	},
	{
		position: 'Frontend Developer (Contract)',
		company: 'Faceself',
		companyLink: '',
		time: 'Feb 2022 - Dec 2022',
		description: [
			'Built a cross-platform iOS/Android wellness app (20+ screens) with React, Ionic and Capacitor: onboarding, auth, dashboard, profile and progress flows.',
			'Implemented JWT auth with Formik and Yup validation, Redux Toolkit state management, and a Chart.js analytics view for user history.',
			'Added PWA offline support with Workbox and a CI pipeline (GitHub Actions: ESLint, type-check, Jest) with pre-commit hooks.',
		],
		techStack: ['React', 'Ionic', 'Capacitor', 'TypeScript', 'Redux', 'Chart.js', 'Formik', 'Yup', 'Workbox'],
	},
	{
		position: 'Full-Stack Developer (Contract)',
		company: 'Startup Doc.tors',
		companyLink: '',
		time: 'Jun 2020 - Nov 2020',
		description: [
			'Implemented REST APIs and business logic with Express.js and TypeScript, streamlining MVP backend processes.',
			'Prototyped cross-platform mobile app in Flutter, enabling early-stage investor demos.',
			'Collaborated on MVP scoping, aligning technical feasibility with business objectives.',
		],
		techStack: ['Flutter', 'Dart', 'Express', 'TypeScript'],
	},
]

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
	{
		name: 'Frontend Developer (React)',
		issuer: 'HackerRank',
		year: '2025',
		url: 'https://www.hackerrank.com/certificates/9fc4057ac68d',
	},
	{
		name: 'JavaScript (Intermediate)',
		issuer: 'HackerRank',
		year: '2025',
		url: 'https://www.hackerrank.com/certificates/54fec5464786',
	},
	{
		name: 'JavaScript (Basic)',
		issuer: 'HackerRank',
		year: '2025',
		url: 'https://www.hackerrank.com/certificates/3b5755476aba',
		hidden: true, // superseded by JavaScript (Intermediate)
	},
	{
		name: 'English Speaking Level Test',
		issuer: 'SmallTalk2Me',
		year: '2024',
		url: 'https://app.smalltalk2.me/cert/2a03cb19',
	},
	{
		name: 'Learn to Code with Ruby',
		issuer: 'Udemy',
		year: '2021',
		url: 'https://www.udemy.com/certificate/UC-19154019-547e-4a7e-bf2c-7cde9a5e3ee4/',
		hidden: true,
	},
	{
		name: 'Business Process Modeling',
		issuer: 'Avaya',
		year: '2018',
		hidden: true, // kept on record, not shown on the site
	},
	{
		name: 'React (Basic)',
		issuer: 'HackerRank',
		year: '2022',
		url: 'https://www.hackerrank.com/certificates/917d335a6e8d',
		hidden: true,
	},
]

export const skillAreas = ['frontend & mobile', 'backend & data', 'testing, cloud & tools'] as const

type Skill = { name: string; icon: string | undefined; hex: string; area: (typeof skillAreas)[number] }

export const skillsList: Skill[] = [
	{ name: 'React', icon: siReact.path, hex: siReact.hex, area: 'frontend & mobile' },
	{ name: 'Next.js', icon: siNextdotjs.path, hex: siNextdotjs.hex, area: 'frontend & mobile' },
	{ name: 'Angular', icon: siAngular.path, hex: siAngular.hex, area: 'frontend & mobile' },
	{ name: 'TypeScript', icon: siTypescript.path, hex: siTypescript.hex, area: 'frontend & mobile' },
	{ name: 'JavaScript', icon: siJavascript.path, hex: siJavascript.hex, area: 'frontend & mobile' },
	{ name: 'Redux', icon: siRedux.path, hex: siRedux.hex, area: 'frontend & mobile' },
	{ name: 'TanStack Query', icon: siReactquery.path, hex: siReactquery.hex, area: 'frontend & mobile' },
	{ name: 'Zod', icon: siZod.path, hex: siZod.hex, area: 'frontend & mobile' },
	{ name: 'Tailwind CSS', icon: siTailwindcss.path, hex: siTailwindcss.hex, area: 'frontend & mobile' },
	{ name: 'Sass', icon: siSass.path, hex: siSass.hex, area: 'frontend & mobile' },
	{ name: 'Framer Motion', icon: siFramer.path, hex: siFramer.hex, area: 'frontend & mobile' },
	{ name: 'Vite', icon: siVite.path, hex: siVite.hex, area: 'frontend & mobile' },
	{ name: 'Storybook', icon: siStorybook.path, hex: siStorybook.hex, area: 'frontend & mobile' },
	{ name: 'Flutter', icon: siFlutter.path, hex: siFlutter.hex, area: 'frontend & mobile' },
	{ name: 'Dart', icon: siDart.path, hex: siDart.hex, area: 'frontend & mobile' },
	{ name: 'Node.js', icon: siNodedotjs.path, hex: siNodedotjs.hex, area: 'backend & data' },
	{ name: 'Express', icon: siExpress.path, hex: siExpress.hex, area: 'backend & data' },
	{ name: 'WebSockets', icon: siSocketdotio.path, hex: siSocketdotio.hex, area: 'backend & data' },
	{ name: 'PostgreSQL', icon: siPostgresql.path, hex: siPostgresql.hex, area: 'backend & data' },
	{ name: 'MySQL', icon: siMysql.path, hex: siMysql.hex, area: 'backend & data' },
	{ name: 'MongoDB', icon: siMongodb.path, hex: siMongodb.hex, area: 'backend & data' },
	{ name: 'Firebase', icon: siFirebase.path, hex: siFirebase.hex, area: 'backend & data' },
	{ name: 'DrizzleORM', icon: siDrizzle.path, hex: siDrizzle.hex, area: 'backend & data' },
	{ name: 'Prisma', icon: siPrisma.path, hex: siPrisma.hex, area: 'backend & data' },
	{ name: 'Vitest', icon: siVitest.path, hex: siVitest.hex, area: 'testing, cloud & tools' },
	{ name: 'Jest', icon: siJest.path, hex: siJest.hex, area: 'testing, cloud & tools' },
	{ name: 'Git', icon: siGit.path, hex: siGit.hex, area: 'testing, cloud & tools' },
	{ name: 'Docker', icon: siDocker.path, hex: siDocker.hex, area: 'testing, cloud & tools' },
	{ name: 'AWS', icon: undefined, hex: 'FF9900', area: 'testing, cloud & tools' },
	{ name: 'Google Cloud', icon: siGooglecloud.path, hex: siGooglecloud.hex, area: 'testing, cloud & tools' },
	{ name: 'Figma', icon: siFigma.path, hex: siFigma.hex, area: 'testing, cloud & tools' },
	{ name: 'Claude Code', icon: siClaude.path, hex: siClaude.hex, area: 'testing, cloud & tools' },
	{ name: 'Cursor', icon: siCursor.path, hex: siCursor.hex, area: 'testing, cloud & tools' },
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
		title: 'Atelier',
		type: 'White-label SaaS',
		role: 'Fullstack',
		description:
			'White-label operations platform for LATAM salons and workshops, replacing WhatsApp and Excel. Shipped to each client and hosted where it suits them; Innovations Befine, the first client, runs it on a server on its own premises. Real-time cashier dashboard via native SSE, three-model payroll engine, offline PWA with IndexedDB queue, and RBAC with four roles.',
		image: '/2027/projects/atelier.webp',
		deployment: 'https://atelier.juandawd.dev/',
		github: undefined,
		technologies: [
			'Next.js',
			'Turborepo',
			'PostgreSQL',
			'DrizzleORM',
			'Better Auth',
			'TanStack Query',
			'Zustand',
			'Vitest',
			'Playwright',
			'Claude Code',
		],
	},
	{
		title: 'Droguería Uno A',
		type: 'Freelance',
		role: 'Frontend',
		description:
			'Public website for a pharmacy in Maicao, Colombia: services, schedule, promotions, testimonials, and a WhatsApp contact flow. Built with React 19, Vite, and Tailwind CSS v4 on Radix UI components, deployed on Vercel behind Cloudflare DNS.',
		image: '/2027/projects/drogueria.webp',
		deployment: 'https://www.drogueria-uno-a.com',
		github: undefined,
		technologies: ['React', 'Vite', 'Tailwind CSS', 'Radix UI', 'Vercel', 'Cloudflare', 'Claude Code'],
	},
	{
		title: 'Self-hosted homelab',
		type: 'Personal',
		role: 'DevOps',
		description:
			'Proxmox server with LXC containers and Docker running Vaultwarden, Paperless-ngx, Nextcloud and other services, exposed only through a Cloudflare Tunnel behind Cloudflare Access, with no open ports. Nightly snapshot backups, Pi-hole DNS, and firewall rules that keep home-network devices from bypassing the access layer.',
		image: '/2027/projects/vaultwarden.svg',
		deployment: undefined,
		github: undefined,
		technologies: ['Proxmox', 'LXC', 'Docker', 'Caddy', 'Cloudflare Tunnel', 'Cloudflare Access', 'Pi-hole'],
	},
	{
		title: 'Guarapo Blocks API',
		type: 'Open Source',
		role: 'Fullstack',
		description:
			'REST API and documentation system for a UI component blocks library. Full OpenAPI spec, PostgreSQL via Prisma, and a comprehensive Jest test suite.',
		image: '/2027/projects/GuarapoSSR.webp',
		deployment: 'https://guarapo-ssr.vercel.app/docs',
		github: 'https://github.com/JuanDawd/guarapo-ssr/tree/main',
		technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Jest', 'OpenAPI'],
	},
]

export const socialLinks = {
	github: 'https://github.com/JuanDawd',
	linkedin: 'https://www.linkedin.com/in/juandawd/',
	email: 'JuanDawdB@gmail.com',
}
