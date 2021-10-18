export var makeBdRect = (x, y, cls) => {
  return `
    <rect class="${cls}" x="${ x * 100}" y="${ y * 100}" width="100" height="100"  />
  `
}

export var makeDarkPiece = ( d ) => {
  return `
    <circle id='${d.id}' class='darkpiece' cx='${d.x}' cy='${d.y}' r='40' />
  `
}