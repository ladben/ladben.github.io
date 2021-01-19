'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

class Triangle {
  side: number;
  height: number;
  vertexA: number[];
  vertexB: number[];
  vertexC: number[];

  constructor(sideLength: number, topLeftVertex: number[]) {
    this.side = sideLength;
    this.height = sideLength * Math.cos(Math.PI / 6);
    this.vertexA = topLeftVertex;
    this.vertexB = [topLeftVertex[0] + sideLength, topLeftVertex[1]];
    this.vertexC = [
      topLeftVertex[0] + sideLength / 2,
      topLeftVertex[1] + this.height,
    ];
  }

  draw(): void {
    ctx.beginPath();
    ctx.strokeStyle = getNewColor();
    ctx.moveTo(this.vertexA[0], this.vertexA[1]);
    ctx.lineTo(this.vertexB[0], this.vertexB[1]);
    ctx.lineTo(this.vertexC[0], this.vertexC[1]);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawTriangleFractal(side: number, topLeft: number[]): void {
  let myTriangle = new Triangle(side, topLeft);

  myTriangle.draw();

  if (side >= 10) {
    let newSide: number = side / 2;
    let newPointA: number[] = topLeft;
    let newPointB: number[] = [topLeft[0] + myTriangle.side / 2, topLeft[1]];
    let newPointC: number[] = [
      topLeft[0] + myTriangle.side / 4,
      topLeft[1] + myTriangle.height / 2,
    ];

    setTimeout(function () {
      drawTriangleFractal(newSide, newPointA);
    }, Math.random() * 1000);

    setTimeout(function () {
      drawTriangleFractal(newSide, newPointB);
    }, Math.random() * 1000);

    setTimeout(function () {
      drawTriangleFractal(newSide, newPointC);
    }, Math.random() * 1000);
  }
}

function getNewColor(): string {
  let randomHue: number = Math.round(Math.random() * 360);
  let randomSaturation: number = Math.round(Math.random() * 30) + 70;
  let randomLight: number = Math.round(Math.random() * 20) + 20;
  let randomAlpha: number = Math.random();
  //return 'hsla(' + randomHue + ', 100%, 50%, 1.0)';
  return `hsla(${randomHue}, ${randomSaturation}%, ${randomLight}%, ${randomAlpha})`;
}

let randomSideLength: number = Math.random() * 400;
let randomStartingX: number = Math.random() * (405 - randomSideLength);
let randomStartingY: number =
  Math.random() * (350 - randomSideLength * Math.cos(Math.PI / 6));

drawTriangleFractal(randomSideLength, [randomStartingX, randomStartingY]);
