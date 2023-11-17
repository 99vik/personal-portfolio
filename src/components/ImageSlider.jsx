import { useState } from 'react';

export default function ImageSlider({ images }) {
  let [current, setCurrent] = useState(0);

  const _images = [
    'https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png',
    'https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png',
    'https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png',
  ];

  function previousSlide() {
    if (current === 0) setCurrent(_images.length - 1);
    else setCurrent(current - 1);
  }

  function nextSlide() {
    if (current === _images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {_images.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>previous</button>
        <button onClick={nextSlide}>next </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {_images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={'circle' + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? 'bg-white' : 'bg-gray-500'
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
