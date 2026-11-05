import { Label } from '../ui/label'

import DetailsWrapper from './DetailsWrapper'

import type { ExperienceDetailsProps } from './Details.type'

const ExperienceDetails = ({ position, company, companyLink, time, address, work }: ExperienceDetailsProps) => {
	return (
		<DetailsWrapper>
			<h3 className="xs:text-lg text-2xl font-bold capitalize sm:text-xl">
				{position}&nbsp;
				{companyLink !== '' ? (
					<a target="_blank" rel="noreferrer" href={companyLink} className="text-primary-foreground/50 capitalize">
						@{company}
					</a>
				) : (
					<Label className="xs:text-lg text-2xl font-bold text-primary-foreground/50 capitalize sm:text-xl">
						@{company}
					</Label>
				)}
			</h3>
			<span className="xs:text-sm font-medium text-secondary-foreground/75 capitalize">
				{time} | {address}
			</span>
			<p className="w-full font-medium md:text-sm">{work}</p>
		</DetailsWrapper>
	)
}

export default ExperienceDetails
