function About() {
  return (
    <div className="bg-gradient-to-b flex font-semibold z-0 text-neutral-300 text-lg items-start justify-center from-neutral-950 to-neutral-900 h-screen py-10 px-20">
      <div className="w-[700px] flex flex-col gap-3">
        <div className="flex items-center">
          <div className="h-[1px] mt-3 mr-5 flex-1 bg-gradient-to-r from-emerald-900 to bg-emerald-400"></div>
          <h1 className="text-emerald-400 text-3xl font-semibold">About</h1>
          <div className="h-[1px] mt-3 ml-5 flex-1 bg-gradient-to-r from-emerald-400 to bg-emerald-300"></div>
        </div>
        <div className="flex">
          <span className="text-emerald-400 mr-2">&#62;</span>
          Hello! I&apos;m Viktor, a mechanical engineering graduate currently in
          the final stretch of my master&apos;s degree.
        </div>
        <div className="flex">
          <span className="text-emerald-400 mr-2">&#62;</span>
          In addition to my studies, I&apos;ve delved into the world of
          full-stack web development since June 2022 and have been in love with
          it ever since.
        </div>
        <div className="flex">
          <span className="text-emerald-400 mr-2">&#62;</span>
          Outside the realm of academia and coding, you&apos;ll find me
          exploring the latest in technology, constantly seeking new knowledge.
        </div>
        <div className="flex">
          <span className="text-emerald-400 mr-2">&#62;</span>I am deeply
          committed to lifelong learning, consistently fueled by an insatiable
          eagerness to acquire new skills and knowledge about the world around
          me.
        </div>
        <p className="text-center text-base bg-gradient-to-r from-emerald-600 to bg-emerald-300 bg-clip-text text-transparent mt-6">
          {' '}
          Let&apos;s build the future together, one line of code at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
