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
    <div className="overflow-hidden border border-neutral-700 rounded-md relative">
      <div
        className={`flex transition ease-out duration-300`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => {
          return <img className="rounded-md " key={index} src={image} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-3xl">
        <button onClick={previousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-emerald-500 h-16 hover:scale-110"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-emerald-500 h-16 hover:scale-110 rotate-180"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>{' '}
        </button>
      </div>

      <div className="absolute bottom-0 py-3 flex justify-center gap-2 w-full">
        {images.map((image, index) => {
          return (
            <div
              onClick={() => {
                setCurrent(index);
              }}
              key={index}
              className={`rounded-full w-3 h-3 cursor-pointer duration-300  ${
                index == current ? 'bg-emerald-400' : 'bg-emerald-800'
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
