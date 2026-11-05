import { Label } from '../ui/label'

import DetailsWrapper from './DetailsWrapper'

import type { ExperienceDetailsProps } from './Details.type'

const ExperienceDetails = ({ position, company, companyLink, time, address, work }: ExperienceDetailsProps) => {
	return (
		<DetailsWrapper>
			<h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
				{position}&nbsp;
				{companyLink !== '' ? (
					<a target="_blank" rel="noreferrer" href={companyLink} className="text-primary-foreground/50 capitalize">
						@{company}
					</a>
				) : (
					<Label className="text-2xl font-bold text-primary-foreground/50 capitalize sm:text-xl xs:text-lg">
						@{company}
					</Label>
				)}
			</h3>
			<span className="font-medium text-secondary-foreground/75 capitalize xs:text-sm">
				{time} | {address}
			</span>
			<p className="w-full font-medium md:text-sm">{work}</p>
		</DetailsWrapper>
	)
}

export default ExperienceDetails
