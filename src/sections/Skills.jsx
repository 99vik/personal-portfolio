import SectionTitle from '../components/SectionTitle.jsx';
import { skills } from '../utils/content/skills.js';

function Skills() {
  return (
    <div className="bg-neutral-900 min-h-screen z-50 relative flex flex-col justify-start items-center max-[900px]:pb-14 ">
      <div className="h-[500px] w-[300px] animate-bgLight bg-emerald-500 rounded-full z-50 blur-3xl absolute -top-[45%] right-0"></div>
      <div className="flex w-[850px] max-[800px]:w-screen max-[800px]:px-10 max-[500px]:px-2 flex-col items-center max-[900px]:items-center gap-8">
        <SectionTitle title="Skills, tools & technologies" />
        <div className="bg-neutral-950 card flex max-[900px]:flex-col w-[850px] max-[900px]:w-[360px] gap-10 text-neutral-400 text-sm font-semibold px-4 pt-10 pb-12 rounded-xl">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="flex-1">
                <h1 className="text-center text-emerald-400 font-semibold text-lg mb-8 whitespace-nowrap">
                  {skill.title}
                </h1>
                <div className="grid grid-cols-2 justify-items-center gap-y-8">
                  {skill.data.map((entity, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center gap-1"
                      >
                        <img
                          src={entity.icon}
                          alt="js logo"
                          className="h-[35px]"
                        />
                        <p>{entity.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
