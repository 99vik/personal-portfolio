import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ImageSlider from './ImageSlider';
import PropTypes from 'prop-types';

function Card({ project }) {
  const [show, setShown] = useState(false);

  const props = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.15)' : 'scale(1)',
    boxShadow: show
      ? '0px 0px 8px rgb(16 185 129 / 75%)'
      : '0 0px 0px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      className="flex flex-col justify-start items-start w-[730px] bg-black p-2 pb-4 rounded-lg"
      style={props}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="">
        <ImageSlider images={project.images} />
      </div>
      <div className="w-full">
        <h2 className="text-white font-semibold text-lg text-center mt-2 mb-1">
          {project.name}
        </h2>
        <p className="text-neutral-300 text-sm px-2 text-center">
          {project.description}
        </p>
        <div className="flex justify-center items-center gap-6 mt-4">
          {project.live && (
            <a
              className="bg-emerald-600 flex items-center gap-1 hover:bg-emerald-700 transition px-2 py-1 text-white font-semibold rounded-lg"
              rel="noreferrer"
              target="_blank"
              href={project.live}
            >
              View Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-white h-5"
              >
                <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
              </svg>
            </a>
          )}
          <a
            className="bg-emerald-600 hover:bg-emerald-700 transition px-2 py-1 text-white font-semibold rounded-lg"
            rel="noreferrer"
            target="_blank"
            href={project.code}
          >
            View Code &lt;/&gt;
          </a>
        </div>
      </div>
    </animated.div>
  );
}

Card.propTypes = {
  project: PropTypes.object,
};

export default Card;
