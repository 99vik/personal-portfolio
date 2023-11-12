import { init } from 'ityped';
import { useEffect } from 'react';
import { useRef } from 'react';

function Hero() {
  const typingRef = useRef(0);

  useEffect(() => {
    init(typingRef.current, {
      showCursor: false,
      strings: ['Engineer', 'Developer'],
      typeSpeed: 250,
      backSpeed: 100,
      backDelay: 2000,
      startDelay: 1000,
    });
  }, []);

  return (
    <div className="h-screen bg-neutral-800 flex items-center justify-center">
      <div>
        <p>Hello, I&apos;m Viktor</p>
        <div className="bg-black text-white flex p-2">
          <p>irb(main) : 001&#62;</p>
          <div ref={typingRef}></div>
          <div className="w-2 animate-blinking bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
