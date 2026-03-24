import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, FileDown } from 'lucide-react'

export function HeroCard() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-6 text-center">
			<Avatar className="h-28 w-28 border-2 border-primary/20">
				<AvatarImage src="/2025/profilePic.webp" alt="Juan Dawd" />
				<AvatarFallback className="text-2xl">JD</AvatarFallback>
			</Avatar>

			<div className="space-y-2">
				<motion.h1
					className="text-4xl font-bold tracking-tight sm:text-3xl"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Juan Dawd
				</motion.h1>
				<motion.p
					className="text-lg text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					Frontend Developer
				</motion.p>
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
							<a
								href="/resume/JuanDawdENG.pdf"
								download
								target="_blank"
								rel="noreferrer"
							>
								<FileDown className="h-4 w-4" />
								English
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<a
								href="/resume/JuanDawdESP.pdf"
								download
								target="_blank"
								rel="noreferrer"
							>
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
