import { useState } from 'react';
import BackToTop from './BackToTop';
import PolyrhythmGenerator from './PolyrhythmGenerator';
import TrackChat from './TrackChat';

export default function Projects() {
  const [projectDisplayed, setProjectDisplayed] = useState(null)
  const projects = [
    {
      name: 'Track Chat',
      component: <TrackChat />,
    },
    {
      name: 'Polyrhythm Generator',
      component: <PolyrhythmGenerator />,
    }
  ]

  const makeCamelCase = word => {
    let camelCase = word.split(' ');
      camelCase[0] = camelCase[0]
        .split('')[0]
        .toLowerCase() + camelCase[0]
          .slice(1, camelCase[0].length);
      camelCase = camelCase.join('');
      return camelCase;
  }

  const sortProjects = () => {
    return projects.map(project => {
      let camelCase = makeCamelCase(project.name);
      return (
        <div key={camelCase}>
          <div
            id={camelCase}
            className="projectLink"
            onClick={() =>
              setProjectDisplayed(p => p === camelCase ? null : camelCase)
            }
          >
            <h4>{project.name}</h4>
          </div>
          {projectDisplayed === camelCase && project.component}
        </div>
      )
    });
  }

  return (
    <div id="projects" className="bodySection">
      <h3>Projects</h3>
      {sortProjects()}
      <BackToTop />
    </div>
  )
}