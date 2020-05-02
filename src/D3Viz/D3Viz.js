import useInterval from '@use-it/interval';
import { select } from 'd3';
import { PropTypes } from 'prop-types';
import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

function D3Viz({
  data = {}, className = ''
}) {
  // CSS3 doesn't support ID selectors that start with a digit
  const ref = useRef();

  const setup = () => {
    select('#d3Viz')
      .attr('width', window.innerWidth * 2)
      .attr('height', window.innerHeight * 2)
  }

  const draw = ({ _selector, elements, window, meta: { transitionTime } }) => {
    const vizSelection = select('#d3Viz')

    Object.values(elements).forEach(element => {
      if (element.type === 'circle') {
        const possibleDrawnElement = select(`#${element.id}`)
        const isFirstDraw = possibleDrawnElement.empty()

        const drawnElement = isFirstDraw
          ? vizSelection.append('circle').attr('id', element.id)
          : possibleDrawnElement

        drawnElement
          // .transition()
          // .duration(transitionTime)
          .attr('fill', element.fill)
          .attr('cx', element.x)
          .attr('cy', element.y)
          .attr('r', element.r)
      }

      else if (element.type === 'line') {
        const possibleDrawnElement = select(`#${element.id}`)
        const isFirstDraw = possibleDrawnElement.empty()

        const drawnElement = isFirstDraw
          ? vizSelection.append('line').attr('id', element.id)
          : possibleDrawnElement

        drawnElement
          // .transition()
          // .duration(transitionTime)
          .attr('x1', element.x1)
          .attr('x2', element.x2)
          .attr('y1', element.y1)
          .attr('y2', element.y2)
          .attr('stroke', element.stroke)
      }
    })

  }

  const cleanup = () => {
    const { current: node } = ref;
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  useEffect(setup, []);

  // useEffect(() => {
  //   // cleanup()
  //   draw(data)
  // }, [data]);

  // let frames = 0;
  useInterval(() => {
    // console.log(`fps: ${data.meta.fps}, frames ${frames}`)
    // frames++
    // cleanup()
    draw(data)
  }, data.meta.fps > 0 ? 1000 / data.meta.fps : 0);

  return (
    <Draggable>
      <svg
        className={`d3-visualization ${className}`}
        id='d3Viz'
        ref={ref}
      />
    </Draggable>
  );

}

D3Viz.propTypes = {
  data: PropTypes.object,
};

export default D3Viz;

