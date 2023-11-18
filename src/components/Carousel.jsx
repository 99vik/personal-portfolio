import PropTypes from 'prop-types';
import Carousel from 'react-spring-3d-carousel';
import { useState } from 'react';
import { config } from 'react-spring';

export default function Carroussel(props) {
  const table = props.projects.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [goToSlide, setGoToSlide] = useState(null);
  const [projects] = useState(table);

  return (
    <div className="flex-1 w-full flex -mt-28 justify-between">
      <div className="flex items-center justify-center w-[5%]">
        <button
          onClick={() => {
            setGoToSlide(goToSlide - 1);
          }}
          className="hover:scale-110 transition rotate-180"
        >
          <svg
            className="fill-emerald-400 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12M4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12M10,17L15,12L10,7V17Z" />
          </svg>
        </button>
      </div>
      <div className="w-[35%]">
        <Carousel
          slides={projects}
          goToSlide={goToSlide}
          offsetRadius={2}
          animationConfig={config.gentle}
        />
      </div>
      <div className="flex items-center justify-center w-[5%]">
        <button
          onClick={() => {
            setGoToSlide(goToSlide + 1);
          }}
          className="hover:scale-110 z-50"
        >
          <svg
            className="fill-emerald-400 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12M4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12M10,17L15,12L10,7V17Z" />
          </svg>
        </button>
      </div>
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
