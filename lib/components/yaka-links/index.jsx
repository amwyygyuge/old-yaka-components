import React from 'react'
const style = {
  margin: "3px 0",
  display: "block"
}
const Links = props => {
  const { links = [] } = props
  return links.map(({ value, name }) => <a style={style} key={value} href={value} target="_blank">{name ? name : value}</a>)
}

export default Links