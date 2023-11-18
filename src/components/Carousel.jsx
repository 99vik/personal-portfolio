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
    <div className="flex-1 w-full flex -mt-28 max-[1050px]:-mt-44 max-[700px]:-mt-52 max-[400px]:-mt-72 justify-between max-[820px]:justify-center max-[820px]:items-center">
      <div className="flex items-center justify-center max-[820px]:absolute max-[820px]:bottom-[110px] max-[820px]:left-[40%] w-[5%]">
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
      <div className="max-[1050px]:w-[30%] w-[35%]">
        <Carousel
          slides={projects}
          goToSlide={goToSlide}
          offsetRadius={2}
          animationConfig={config.gentle}
        />
      </div>
      <div className="flex items-center justify-center max-[820px]:absolute max-[820px]:bottom-[110px] max-[820px]:right-[40%] w-[5%]">
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
