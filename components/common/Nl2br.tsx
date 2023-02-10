import React from "react"

type Props = {
  text: string
}


/**
 * If the given text has new line characters, replace them with <br />.
 *
 * "abc\ndef\ngh" -> <>abc<br />def<br />gh</>
 *
 * @param {Props} { text }
 * @return {*} JSX.Element
 */
const Nl2br = ({ text }: Props) => {
  const textElements = text.split("\n").map((v, idx) => {
    return (
      <React.Fragment key={idx}>{v}<br /></React.Fragment>
    )
  })

  return <>{textElements}</>
}

export default Nl2br
