import './Projects.css';
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectData from '../data/staticData';
import PageTitle from '../components/PageTitle';
import Icons from '../components/Icons';
import useViewport from '../hooks/useViewport';


function Projects() {
	const {width} = useViewport();
	const breakpoint = 1200;

	return width > breakpoint ? 
		<div>
			<div className="projects">
				<PageTitle text="Projects" />
			</div>
			<div className="project__items">
				<ProjectItem projects={ProjectData} />
			</div>
			< Icons />
		</div>
	 : 
		<div>
			<div className="projects">
				<PageTitle text="Projects" />
			</div>
			<div className="project__items">
				<ProjectItem projects={ProjectData} />
			</div>
		</div>
	
}

export default Projects;
