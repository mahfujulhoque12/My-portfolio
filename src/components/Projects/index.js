import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider ,CenterButton} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [showMore, setShowMore] = useState(false);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((project, index) => (showMore ? true : index < 3))
            .filter((project) => toggle === 'all' || project.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
              <CenterButton>
          {projects.length > 3 && (
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'See Less' : 'See More'}
            </button>
          )}
        </CenterButton>
    
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;