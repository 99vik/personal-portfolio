import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ImageSlider from './ImageSlider';
import PropTypes from 'prop-types';

function Card({ project }) {
  const [show, setShown] = useState(false);

  const props = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.01)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      className="flex flex-col justify-start items-start w-[500px] bg-black p-2 rounded-lg"
      style={props}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="">
        <ImageSlider images={project.images} />
      </div>
      <h2 className="text-white">{project.name}</h2>
      <p className="text-white">{project.description}</p>
    </animated.div>
  );
}

Card.propTypes = {
  project: PropTypes.object,
};

export default Card;
