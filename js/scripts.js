import { makeBdRect ,makeDarkPiece } from './svgcomponents.js';

var bd = document.getElementById('bd')
var lite = document.getElementById('lite')
var dark = document.getElementById('dark')

//  Make the checker board
var bdspaces = [];
for (var r = 0; r < 8; r++) {
  for ( var c = 0; c < 8; c++) {
    //  provide corrent class for space color
    var clsstr = 'darkspace';
    if (((r % 2 === 0) && (c % 2 === 0)) || ((r % 2 === 1) && (c % 2 === 1))) {
      clsstr = 'litespace';
    }
    var newspace = makeBdRect( c, r, clsstr );
    bdspaces.push(newspace);
  }
}
bd.insertAdjacentHTML("beforeend", bdspaces)

// make the lite pieces
var _moveit = (e) => {
  console.log()
  gsap.to('#a9', {cy: 450, cx: 250, duration: 2})
}
for (var r = 0; r < 3; r++) {
  for ( var c = 0; c < 8; c++) {
    const cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    cir.setAttribute('cx', c * 100 + 50);
    cir.setAttribute('cy', r * 100 + 50);
    cir.setAttribute('r', 40);
    cir.setAttribute('class', "litepiece");
    cir.setAttribute('id', "a9")
    // cir.setAttribute('onclick','_moveit("#a9")');  doesn't work
    cir.onclick = () => {_moveit('#a9');};
    if (!((((r % 2 === 0) && (c % 2 === 0)) || ((r % 2 === 1) && (c % 2 === 1))))) {
      lite.appendChild(cir)
    }
  }
}

// make the dark pieces
var darkData = [
  { id: "b0", x: 50, y: 750 },
  { id: "b1", x: 250, y: 750 },
  { id: "b2", x: 450, y: 750 },
  { id: "b3", x: 650, y: 750 },
  { id: "b4", x: 150, y: 650 },
  { id: "b5", x: 350, y: 650 },
  { id: "b6", x: 550, y: 650 },
  { id: "b7", x: 750, y: 650 },
  { id: "b8", x: 50, y: 550 },
  { id: "b9", x: 250, y: 550 },
  { id: "b10", x: 450, y: 550 },
  { id: "b11", x: 650, y: 550 },
]
var darkpieces = darkData.map( d => makeDarkPiece(d) )
dark.insertAdjacentHTML("beforeend", darkpieces)





