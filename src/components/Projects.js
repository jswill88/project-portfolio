import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PolyrhythmGenerator from './PolyrhythmGenerator';
import TrackChat from './TrackChat';
import BrainBugs from './BrainBugs';
import Interval from './Interval';
import ScubaTv from './ScubaTv';

export default function Projects({ theme }) {
  const [projectDisplayed, setProjectDisplayed] = useState(null)
  const projects = [
    {
      name: 'Track Chat',
      component: <TrackChat projectDisplayed={projectDisplayed} theme={theme} />,
    },
    {
      name: 'Polyrhythm Generator',
      component: <PolyrhythmGenerator />,
    },
    {
      name: 'Brain Bugs',
      component: <BrainBugs />,
    }, 
    {
      name: 'Interval',
      component: <Interval />,
    },
    {
      name: 'Scuba TV',
      component: <ScubaTv />,
    },
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
        <HashLink smooth to={`/#${camelCase}`}>
          <div
            className="projectLink"
            onClick={() =>
              setProjectDisplayed(p => p === camelCase ? null : camelCase)
            }>
            <h4 id={camelCase}>{project.name}</h4>
            {projectDisplayed === camelCase ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large" />}
          </div>
        </HashLink>
          {projectDisplayed === camelCase && project.component}
        </div>
      )
    });
  }

  return (
    <div id="projects" className="bodySection">
      <h3>Projects</h3>
      {sortProjects()}
    </div>
  )
}