import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import Sketch from "react-p5";
import styles from './P5viz.module.css';

function P5Viz({ innerHeight, innerWidth, elements, meta }) {
  let tRef = useRef(1);

  function setup(p5, canvasParentRef) {
    p5.createCanvas(innerWidth * 2, innerHeight * 2)
      .parent(canvasParentRef)
      .background(meta.bgColor);
  };

  function draw(p5) {
    const t = tRef.current;
    p5.background(meta.bgColor);
    p5.translate(innerWidth / 2, innerHeight / 2);
    p5.strokeWeight(2);
    p5.rotate(meta.rotate)
    p5.translate(meta.translateX, meta.translateY);

    Object.values(elements).forEach((element, i) => {
      if (element.type === 'line') {
        const {
          stroke, numberOfLines, amplitude,
          x1Form1, y1Form1, x2Form1, y2Form1, rotate, delay,
          translateX, translateY
        } = element;
        p5.stroke(stroke);
        for (let i = 0; i < numberOfLines; i++) {
          p5.rotate(rotate)
          p5.translate(translateX, translateY);
          p5.line(
            x1Eq(t + i - delay, x1Form1, amplitude),
            y1Eq(t + i - delay, y1Form1, amplitude),
            x2Eq(t + i - delay, x2Form1, amplitude),
            y2Eq(t + i - delay, y2Form1, amplitude),
          )
        }
      }
    })

    tRef.current++;
  };

  function x1Eq(t, form1, amplitude) {
    return Math[form1](t / 100) * amplitude;
  }

  function y1Eq(t, form1, amplitude) {
    return Math[form1](t / 15) * amplitude;
  }

  function x2Eq(t, form1, amplitude) {
    return Math[form1](t / 10) * amplitude;
  }

  function y2Eq(t, form1, amplitude) {
    return Math[form1](t / 20) * amplitude;
  }

  return (
    <Draggable>
      <div className={styles.handle}>
        <Sketch setup={setup} draw={draw} />
      </div>
    </Draggable>
  );

}

export default P5Viz;

