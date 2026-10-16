import { Hero } from '@/components/2027/Hero'
import { Projects } from '@/components/2027/Projects'
import { Experience } from '@/components/2027/Experience'
import { Stack } from '@/components/2027/Stack'
import { Background } from '@/components/2027/Background'
import { Contact } from '@/components/2027/Contact'

export default function HomePage2027() {
	return (
		<main className="mx-auto grid max-w-5xl gap-10 px-3 pt-6 pb-16 sm:gap-14 sm:px-6 sm:pt-10">
			<Hero />
			<Projects />
			<Experience />
			<Stack />
			<Background />
			<Contact />
		</main>
	)
}
