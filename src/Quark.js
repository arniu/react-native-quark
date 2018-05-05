import React from 'react'
import { ART, StyleSheet } from 'react-native'
import qr from 'qr.js'

import render from './render'
import encode from './encode'

const Quark = ({ value, ...props }) => {
  const style = StyleSheet.flatten([
    {
      width: props.size,
      height: props.size,
      backgroundColor: props.backgroundColor,
      color: props.color
    },
    props.style
  ])

  const cells = qr(encode(value), {
    errorCorrectLevel: props.errorCorrectLevel || 0
  }).modules

  return (
    // prettier-ignore
    <ART.Surface
      width={style.width}
      height={style.height}
      style={style}
    >
      <ART.Shape
        strokeWidth={0}
        fill={style.color}
        d={render(cells, style)}
      />
    </ART.Surface>
  )
}

Quark.defaultProps = {
  size: 128,
  value: 'Hello Quark!',
  backgroundColor: 'white',
  color: 'black'
}

export default Quark
