function About() {
  return (
    <div className="bg-gradient-to-b flex  text-neutral-300 text-xl items-start justify-start from-neutral-950 to-neutral-900 py-10">
      <div className="w-[45%] mx-10 flex flex-col gap-3">
        <div className="flex items-center">
          <h1 className="text-emerald-400 text-3xl font-semibold">About</h1>
          <div className="h-[1px] mt-3 mx-5 flex-1 bg-emerald-400"></div>
        </div>
        <p>
          <span className="text-emerald-400 mr-2">&#62;</span>
          Hello! I&apos;m Viktor, a mechanical engineering graduate currently in
          the final stretch of my master&apos;s degree.
        </p>
        <p>
          <span className="text-emerald-400 mr-2">&#62;</span>
          In addition to my studies, I&apos;ve delved into the world of
          full-stack web development since June 2022 and have been in love with
          it ever since.
        </p>
      </div>
    </div>
  );
}

export default About;
