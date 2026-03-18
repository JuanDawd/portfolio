import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLinkItem,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, FileDown } from 'lucide-react'

export function HeroCard() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-6 text-center">
			<Avatar className="h-28 w-28 border-2 border-primary/20">
				<AvatarImage src="/2024/profilePic.jpeg" alt="Juan Dawd" />
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
					<DropdownMenuTrigger render={<Button size="sm" />}>
						<FileDown className="mr-1 h-4 w-4" />
						Resume
						<ChevronDown className="ml-1 h-3 w-3" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLinkItem
							href="/resume/JuanDawdENG.pdf"
							download
							target="_blank"
							rel="noreferrer"
						>
							<FileDown className="h-4 w-4" />
							English
						</DropdownMenuLinkItem>
						<DropdownMenuLinkItem
							href="/resume/JuanDawdESP.pdf"
							download
							target="_blank"
							rel="noreferrer"
						>
							<FileDown className="h-4 w-4" />
							Español
						</DropdownMenuLinkItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button
					variant="outline"
					size="sm"
					render={<a href="mailto:JuanDawdB@gmail.com" />}
				>
					Contact Me
				</Button>
			</div>
		</div>
	)
}
