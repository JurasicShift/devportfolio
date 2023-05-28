import './Projects.css';
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectData from '../data/staticData';
import PageTitle from '../components/PageTitle';

function Projects() {
	return (
		<div>
			<div className="projects">
				<PageTitle text="Projects" />
			</div>
			<div className="project__items">
				<ProjectItem projects={ProjectData} />
			</div>
		</div>
	);
}

export default Projects;
