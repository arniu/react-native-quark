import React from 'react'
import { ART, StyleSheet } from 'react-native'
import qr from 'qr.js'

import render from './render'
import encode from './encode'

// From qr.js
const ECL = {
  L: 1, // 7%
  M: 0, // 15%, default
  Q: 3, // 20%
  H: 2 // 30%
}

const parseECL = ecl => {
  const key = typeof ecl === 'string' ? ecl : ''
  return ECL[key.toUpperCase()] || ECL.M
}

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
    errorCorrectLevel: parseECL(props.errorCorrectLevel)
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
  // value: 'Hello!',
  size: 128,
  errorCorrectLevel: 'M',
  backgroundColor: 'transparent',
  color: 'black',
  style: null
}

export default Quark
