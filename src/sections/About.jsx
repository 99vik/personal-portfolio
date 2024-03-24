import SectionTitle from '../components/SectionTitle';
import { about } from '../utils/content/about';

function About() {
  const content = about.map((sentence, index) => {
    return (
      <div key={index} className="flex">
        <span className="text-emerald-400 mr-2">&#62;</span>
        {sentence}
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-b flex font-semibold z-0 text-neutral-300 text-lg items-start justify-center from-neutral-950 to-neutral-900 sm:h-screen py-10 px-20 max-[900px]:px-10 max-[500px]:px-3">
      <div className="w-[700px] flex flex-col gap-4">
        <SectionTitle title="About" />
        {content}
        <p className="text-center text-base bg-gradient-to-r from-emerald-600 to bg-emerald-300 bg-clip-text text-transparent mt-6">
          {' '}
          Let&apos;s build the future together, one line of code at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
