import { FileDown } from 'lucide-react'

import Layout from '@/components/2024/UI/Layout'
import { DropdownMenuItem } from '@/components/2024/UI/dropdown-menu'
import { DropdownContext } from '@/components/2024/DropdownContext'

import { Education } from '@/components/2024/Education'
import { Experience } from '@/components/2024/Experience'
import { Certifications } from '@/components/2024/Certifications'

import { Biography } from './Constants'
import { AnimatedText } from '@/components/2024/AnimatedText'
import { Button } from '@/components/2024/UI/button'
import { Skills } from '@/components/2024/Skills'

export default function Home() {
	return (
		<Layout className="pt-16">
			<AnimatedText
				text="Passion Fuels Purpose!"
				className="mb-16 lg:text-7xl! sm:mb-8 sm:text-6xl! xs:text-4xl!"
			/>
			<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
				<div className="col-span-4 flex flex-col items-center justify-center md:order-2  md:col-span-8">
					<h2 className="mb-4 text-2xl font-bold uppercase text-secondary-foreground/75">
						Biography
					</h2>

					<p className="text-lg font-medium">{Biography[0]}</p>
					<div className="flex w-full flex-row items-center justify-around pt-24">
						<DropdownContext
							triggerButtonTittle={'Resume'}
							triggerButtonIcon={<FileDown size={20} />}
						>
							<DropdownMenuItem>
								<a
									href="/resume/JuanDawdENG.pdf"
									download
									target="_blank"
									rel="noreferrer"
								>
									English
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a
									href="/resume/JuanDawdESP.pdf"
									download
									target="_blank"
									rel="noreferrer"
								>
									Spanish
								</a>
							</DropdownMenuItem>
						</DropdownContext>
						<Button variant="outline" asChild>
							<a
								href="mailto:JuanDawdB@gmail.com"
								target="_blank"
								rel="noreferrer"
								className="ml-4 text-lg font-medium capitalize md:text-base "
							>
								Contact Me
							</a>
						</Button>
					</div>
				</div>

				<div className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-primary-foreground bg-background p-4 md:order-1 md:col-span-8">
					<div className="absolute left-3 top-3 -z-10 h-full w-[100%] rounded-[1.75rem] bg-primary/10" />
					<img
						src="/2024/profilePic.jpeg"
						alt="JuanDawd"
						className="h-auto w-full rounded-2xl"
					/>
				</div>
			</div>

			<Skills />

			<Experience />
			<Education />
			<Certifications />
		</Layout>
	)
}
