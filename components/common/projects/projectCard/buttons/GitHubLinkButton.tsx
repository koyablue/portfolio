import LinkButton from './LinkButton'

import { SiGithub } from 'react-icons/si'

type Props = {
  href?: string
}

const GitHubLinkButton = ({ href }: Props) => {
  return (

    <LinkButton label='GitHub' href={href}>
      <SiGithub className='text-lg' />
    </LinkButton>
  )
}

export default GitHubLinkButton
