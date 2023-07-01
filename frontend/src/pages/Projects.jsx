import React from 'react';
import './Projects.css';
import ProjectItem from '../components/ProjectItem';
import ProjectData from '../data/staticData';
import PageTitle from '../components/PageTitle';
import Icons from '../components/Icons';
import Spinner from '../components/Spinner';
import useReadyState from '../hooks/useReadyState';
import useViewport from '../hooks/useViewport';

function Projects() {
	const [loading] = useReadyState();
	const { width } = useViewport();
	const breakpoint = 1200;


	return loading ? (
			<Spinner height="100px" width="100px" lg={true} />
	) : width > breakpoint ? (
		<div>
			<div className="projects">
				<PageTitle text="Projects" />
			</div>
			<div className="project__items">
				<ProjectItem projects={ProjectData} />
			</div>
			<Icons />
		</div>
	) : (
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
