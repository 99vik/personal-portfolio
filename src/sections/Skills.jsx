import '../scripts/ImagesExports.js';
import {
  CSSIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavaScriptIcon,
  PostgreSQLIcon,
  PythonIcon,
  RailsIcon,
  ReactIcon,
  RubyIcon,
  SQLIcon,
  TailwindIcon,
  VSCodeIcon,
  ViteIcon,
  WebpackIcon,
} from '../scripts/ImagesExports.js';

function Skills() {
  return (
    <div className="bg-neutral-900 h-screen z-50 relative flex flex-col justify-start items-center">
      <div className="h-[500px] w-[300px] animate-bgLight bg-emerald-500 rounded-full z-50 blur-3xl absolute -top-[45%] right-0"></div>
      <div className="flex w-[850px] flex-col gap-8">
        <div className="flex items-center">
          <div className="h-[1px] mt-3 mr-5 flex-1 bg-gradient-to-r from-emerald-900 to bg-emerald-400"></div>
          <h1 className="text-emerald-400 text-3xl font-semibold">
            Skills, tools & technologies
          </h1>
          <div className="h-[1px] mt-3 ml-5 flex-1 bg-gradient-to-r from-emerald-400 to bg-emerald-300"></div>
        </div>
        <div className="bg-neutral-950 card flex gap-10 text-neutral-400 text-sm font-semibold px-4 pt-10 pb-12 rounded-xl">
          <div className="flex-1">
            <h1 className="text-center text-emerald-400 font-semibold text-lg mb-8">
              Languages
            </h1>
            <div className="grid grid-cols-2 justify-items-center gap-y-8">
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={JavaScriptIcon} alt="js logo" className="h-[35px]" />
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={RubyIcon} alt="ruby logo" className="h-[35px]" />
                <p>Ruby</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={PythonIcon} alt="python logo" className="h-[35px]" />
                <p>Python</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={HTMLIcon} alt="html logo" className="h-[35px]" />
                <p>HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={SQLIcon} alt="sql logo" className="h-[35px]" />
                <p>SQL</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={CSSIcon} alt="css logo" className="h-[35px]" />
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-center text-emerald-400 font-semibold text-lg mb-8 whitespace-nowrap">
              Frameworks, libraries, databases
            </h1>
            <div className="grid grid-cols-2 justify-items-center gap-y-8">
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={RailsIcon} alt="rails logo" className="h-[35px]" />
                <p>Rails</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={ReactIcon} alt="react logo" className="h-[35px]" />
                <p>React</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={TailwindIcon}
                  alt="tailwind logo"
                  className="h-[35px]"
                />
                <p>Tailwind</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={PostgreSQLIcon}
                  alt="postgresql logo"
                  className="h-[35px]"
                />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-center text-emerald-400 font-semibold text-lg mb-8">
              Miscellaneous
            </h1>
            <div className="grid grid-cols-2 justify-items-center gap-y-8">
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={GitIcon} alt="git logo" className="h-[35px]" />
                <p>Git</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={GithubIcon} alt="github logo" className="h-[35px]" />
                <p>Github</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={ViteIcon} alt="vite logo" className="h-[35px]" />
                <p>Vite</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  src={WebpackIcon}
                  alt="webpack logo"
                  className="h-[35px]"
                />
                <p>Webpack</p>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center mt-8">
              <div className="flex flex-col justify-center items-center gap-1">
                <img src={VSCodeIcon} alt="vscode logo" className="h-[35px]" />
                <p>VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
