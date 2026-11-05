import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ChevronDown, FileDown } from 'lucide-react'

export function HeroCard() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-6 text-center">
			{/* Plain <img> (not Radix Avatar) so the photo is in the prerendered HTML */}
			<img
				src="/2026/profile.webp"
				alt="Juan Dawd"
				width={112}
				height={112}
				fetchPriority="high"
				className="h-28 w-28 rounded-full border-2 border-primary/20 object-cover"
			/>

			<div className="space-y-2">
				<h1 className="text-4xl font-bold tracking-tight sm:text-3xl">Juan Dawd</h1>
				<m.p
					className="text-lg text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					Full-Stack Developer
				</m.p>
			</div>

			<div className="flex gap-3">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="sm">
							<FileDown className="mr-1 h-4 w-4" />
							Resume
							<ChevronDown className="ml-1 h-3 w-3" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem asChild>
							<a href="/resume/JuanDawd_ATS_Eng_CV.pdf" download target="_blank" rel="noreferrer">
								<FileDown className="h-4 w-4" />
								English
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<a href="/resume/JuanDawd_ATS_Esp_CV.pdf" download target="_blank" rel="noreferrer">
								<FileDown className="h-4 w-4" />
								Español
							</a>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button variant="outline" size="sm" asChild>
					<a href="mailto:JuanDawdB@gmail.com">Contact Me</a>
				</Button>
			</div>
		</div>
	)
}
