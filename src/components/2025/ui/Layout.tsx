import type { LayoutProps } from './UI.types'

const Layout = ({ children, className = '' }: LayoutProps) => {
	return (
		<main className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
			<div
				className={`z-0 inline-block h-full w-full max-w-[1200px] bg-background py-24 sm:p-4 md:p-6 lg:p-8 xl:p-16 ${className}`}
			>
				{children}
			</div>
		</main>
	)
}

export default Layout
