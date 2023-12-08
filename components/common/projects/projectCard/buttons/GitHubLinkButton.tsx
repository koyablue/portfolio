import LinkButton from './LinkButton'

import { SiGithub } from 'react-icons/si'

type Props = {
  href?: string
}

const GitHubLinkButton = ({ href }: Props) => {
  return (

    <LinkButton href={href}>
      <SiGithub className='text-xl' />
    </LinkButton>
  )
}

export default GitHubLinkButton
