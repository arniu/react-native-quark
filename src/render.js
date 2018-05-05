function makeRect (x, y, width, height) {
  return `M${x} ${y} h${width} v${height} h${-width} Z`
}

export default function render (cells, style) {
  const cellWidth = style.width / cells.length
  const cellHeight = style.height / cells.length

  let path = ''
  cells.forEach(function (row, rowIndex) {
    row.forEach(function (col, colIndex) {
      if (col) {
        path += makeRect(
          colIndex * cellWidth,
          rowIndex * cellHeight,
          cellWidth,
          cellHeight
        )
      }
    })
  })

  return path
}
