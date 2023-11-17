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
    <div className="h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col justify-start items-center relative">
      <div className="w-[700px]">
        <SectionTitle title="Projects" />
      </div>
      <Carousel projects={projects} />
    </div>
  );
}

export default Projects;
