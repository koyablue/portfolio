import LinkButton from './LinkButton'

import { TbExternalLink, TbExternalLinkOff } from 'react-icons/tb'

type Props = {
  href?: string
}

const ExternalLinkButton = ({ href }: Props) => {
  return (
    <LinkButton label='Visit' href={href}>
      {href ? <TbExternalLink className='text-lg' /> : <TbExternalLinkOff className='text-lg' />}
    </LinkButton>
  )
}

export default ExternalLinkButton
