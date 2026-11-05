import DetailsWrapper from './DetailsWrapper'

import type { KnowledgeDetailsProps } from './Details.type'

const KnowledgeDetails = ({ type, place, time }: KnowledgeDetailsProps) => {
	return (
		<DetailsWrapper>
			<h3 className="xs:text-lg text-2xl font-bold capitalize sm:text-xl">{type}&nbsp;</h3>
			<span className="xs:text-sm font-medium text-secondary-foreground/75 capitalize">
				{time} | {place}
			</span>
		</DetailsWrapper>
	)
}

export default KnowledgeDetails
