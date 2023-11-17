import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ImageSlider({ images }) {
  let [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  }

  function nextSlide() {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-300`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => {
          return <img key={index} src={image} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>previous</button>
        <button onClick={nextSlide}>next </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {images.map((image, index) => {
          return (
            <div
              onClick={() => {
                setCurrent(index);
              }}
              key={index}
              className={`rounded-full w-5 h-5 cursor-pointer duration-300  ${
                index == current ? 'bg-white' : 'bg-gray-500'
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};
