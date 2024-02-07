import LinkButton from './LinkButton'

import { TbExternalLink, TbExternalLinkOff } from 'react-icons/tb'

type Props = {
  href?: string
}

const ExternalLinkButton = ({ href }: Props) => {
  return (
    <LinkButton href={href}>
      {href ? <TbExternalLink className='text-2xl' /> : <TbExternalLinkOff className='text-xl' />}
    </LinkButton>
  )
}

export default ExternalLinkButton
