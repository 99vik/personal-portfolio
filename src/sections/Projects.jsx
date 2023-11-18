import SectionTitle from '../components/SectionTitle';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import ProjectsContent from '../utils/content/projects';

function Projects() {
  const projects = ProjectsContent.map((project, index) => {
    return {
      key: index,
      content: <Card project={project} />,
    };
  });

  return (
    <div className="h-screen max-[450px]:h-[500px] bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col justify-start items-center relative px-10">
      <div className="h-[250px] w-[100px] max-[800px]:hidden animate-bgLight2 bg-emerald-500 rounded-full z-50 blur-3xl absolute -top-[10%] left-0"></div>

      <SectionTitle title="Projects" />
      <Carousel projects={projects} />
    </div>
  );
}

export default Projects;
