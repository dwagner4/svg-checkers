var bd = document.getElementById('bd')
var lite = document.getElementById('lite')
var dark = document.getElementById('dark')

for (var r = 0; r < 8; r++) {
  for ( var c = 0; c < 8; c++) {
    const r2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r2.setAttribute('x', c * 100);
    r2.setAttribute('y', r * 100);
    r2.setAttribute('width', 100);
    r2.setAttribute('height', 100);
    if (((r % 2 === 0) && (c % 2 === 0)) || ((r % 2 === 1) && (c % 2 === 1))) {
      r2.setAttribute('class', 'litespace');
    } else {
      r2.setAttribute('class', 'darkspace');
    }
    bd.appendChild(r2)
  }
}

for (var r = 0; r < 3; r++) {
  for ( var c = 0; c < 8; c++) {
    const cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    cir.setAttribute('cx', c * 100 + 50);
    cir.setAttribute('cy', r * 100 + 50);
    cir.setAttribute('r', 40);
    cir.setAttribute('class', "litepiece");
    if (!((((r % 2 === 0) && (c % 2 === 0)) || ((r % 2 === 1) && (c % 2 === 1))))) {
      lite.appendChild(cir)
    }
  }
}

for (var r = 5; r < 8; r++) {
  for ( var c = 0; c < 8; c++) {
    const cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    cir.setAttribute('cx', c * 100 + 50);
    cir.setAttribute('cy', r * 100 + 50);
    cir.setAttribute('r', 40);
    cir.setAttribute('class', "darkpiece");
    if (!((((r % 2 === 0) && (c % 2 === 0)) || ((r % 2 === 1) && (c % 2 === 1))))) {
      lite.appendChild(cir)
    }
  }
}

