import PropTypes from 'prop-types';
import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect } from 'react';
import { config } from 'react-spring';

export default function Carroussel(props) {
  const table = props.projects.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [projects] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div style={{ width: props.width, height: props.height }}>
      <Carousel
        slides={projects}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}

Carroussel.propTypes = {
  projects: PropTypes.array,
  offset: PropTypes.number,
  showArrows: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};
