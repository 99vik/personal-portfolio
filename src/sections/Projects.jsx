import { useEffect, useState } from 'react';
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
      <SectionTitle title="Projects" />
      <Carousel
        projects={projects}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={true}
      />
    </div>
  );
}

export default Projects;
