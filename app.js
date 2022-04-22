'use strict';

const SQRT3 = Math.sqrt(3);
const HEXAGON_WIDTH = 100;
const HEXAGON_HEIGHT = HEXAGON_WIDTH / (SQRT3 / 2);

const targetDiv = document.querySelector('#target-div');
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

// 初期化：svg 要素を生成・追加
const svgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
targetDiv.appendChild(svgElement);

// 入力値: 六角形の座標
const addHexagon = (inputX, inputY) => {

  const hexagonVertexAX = inputX + (HEXAGON_WIDTH / 2);
  const hexagonVertexAY = inputY;
  const hexagonVertexBX = inputX + HEXAGON_WIDTH;
  const hexagonVertexBY = inputY + (HEXAGON_WIDTH / 2) / SQRT3;
  const hexagonVertexCX = inputX + HEXAGON_WIDTH;
  const hexagonVertexCY = inputY + ((HEXAGON_WIDTH / 2) * 3) / SQRT3;
  const hexagonVertexDX = hexagonVertexAX;
  const hexagonVertexDY = inputY + ((HEXAGON_WIDTH / 2)* 4) / SQRT3;
  const hexagonVertexEX = inputX;
  const hexagonVertexEY = hexagonVertexCY;
  const hexagonVertexFX = inputX;
  const hexagonVertexFY = hexagonVertexBY;

  const path = `
    M${hexagonVertexAX}, ${hexagonVertexAY},
    L${hexagonVertexBX}, ${hexagonVertexBY},
    L${hexagonVertexCX}, ${hexagonVertexCY},
    L${hexagonVertexDX}, ${hexagonVertexDY},
    L${hexagonVertexEX}, ${hexagonVertexEY},
    L${hexagonVertexFX}, ${hexagonVertexFY}Z`;

  // path 要素を生成, svg 要素に追加, div 要素に追加
  const pathElement = document.createElementNS(SVG_NAMESPACE, 'path');
  pathElement.setAttribute('stroke', 'white');
  pathElement.setAttribute('stroke-width', '3px');
  pathElement.setAttribute('d', path);
  svgElement.appendChild(pathElement);
  targetDiv.appendChild(svgElement);
}

for (let i = 0; i <= window.innerWidth; i += 100){
  addHexagon(i - 50, -(HEXAGON_HEIGHT * 3 / 4))
  addHexagon(i, 0);
  addHexagon(i - 50, HEXAGON_HEIGHT * 3 / 4);
  addHexagon(i, (HEXAGON_HEIGHT * 3 / 4) * 2);
  addHexagon(i - 50, (HEXAGON_HEIGHT * 3 / 4) * 3);
  addHexagon(i, (HEXAGON_HEIGHT * 3 / 4) * 4);
  addHexagon(i - 50, (HEXAGON_HEIGHT * 3 / 4) * 5);
  addHexagon(i, (HEXAGON_HEIGHT * 3 / 4) * 6);
  addHexagon(i - 50, (HEXAGON_HEIGHT * 3 / 4) * 7);
  addHexagon(i, (HEXAGON_HEIGHT * 3 / 4) * 8);
  addHexagon(i - 50, (HEXAGON_HEIGHT * 3 / 4) * 9);
  addHexagon(i, (HEXAGON_HEIGHT * 3 / 4) * 10);
  addHexagon(i - 50, (HEXAGON_HEIGHT * 3 / 4) * 11);
};

const hexagonList = document.querySelectorAll('path');
for (let i = 0, j = hexagonList.length; i < j; i++){
  hexagonList[i].dataset.filled = false;

  hexagonList[i].addEventListener('mouseover', function () {
    if (hexagonList[i].dataset.filled === 'true') {
      hexagonList[i].setAttribute('fill', 'black');
      hexagonList[i].dataset.filled = false;
    } else {
      hexagonList[i].setAttribute('fill', 'white');
      hexagonList[i].dataset.filled = true;
    }

  }, false);
}
