import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Hero() {
  const typingRef = useRef(0);

  useEffect(() => {
    init(typingRef.current, {
      showCursor: false,
      strings: ['Full-stack Developer', 'Mechanical Engineer'],
      typeSpeed: 130,
      backSpeed: 50,
      backDelay: 2200,
      startDelay: 1400,
    });
  }, []);

  return (
    <div className="h-screen bg-neutral-950 py-10 px-1 max-[500px]:py-5">
      <div>
        <div className="font-mono flex flex-col gap-2 max-[500px]:text-lg max-[500px]:p-0 max-[900px]:text-xl text-3xl text-white p-2">
          <p>
            <span className="text-green-600">viktor@user</span>:
            <span className="text-amber-400">~</span>$ irb{' '}
          </p>
          <p>
            irb(main):001&#62; <span>Hi!</span>
          </p>
          <p>
            irb(main):002&#62; <span> I&apos;m Viktor</span>
          </p>
          <div className="flex">
            <p className="mr-5 max-[900px]:mr-3">irb(main):003&#62;</p>
            <div ref={typingRef}></div>
            <div className="w-2 animate-blinking bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
