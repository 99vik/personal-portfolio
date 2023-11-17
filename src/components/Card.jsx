import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ImageSlider from './ImageSlider';

function Card({ project }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      className="flex flex-col justify-center items-center h-fit w-[400px] bg-black p-2 rounded-lg"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {/* <img src={project.image} alt="" /> */}
      <ImageSlider images={null} />
      <h2 className="text-white">{project.name}</h2>
      <p className="text-white">{project.description}</p>
    </animated.div>
  );
}

export default Card;
