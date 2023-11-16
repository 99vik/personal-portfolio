import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

function Projects() {
  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: 2,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: 3,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: 4,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: 5,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col justify-start items-center relative">
      <SectionTitle title="Projects" />
      <Carousel
        cards={cards}
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
