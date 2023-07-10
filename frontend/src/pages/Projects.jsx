import React from 'react';
import './Projects.css';
import ProjectItem from '../components/Projects/ProjectItem';
import ProjectData from '../data/staticData';
import PageTitle from '../components/Utilities/PageTitle';
import Icons from '../components/Utilities/Icons';
import Spinner from '../components/Utilities/Spinner';
import useReadyState from '../hooks/useReadyState';
import useViewport from '../hooks/useViewport';
import { titleTab } from '../utilities/titleFn';

function Projects() {
	const [loading] = useReadyState();
	const { width } = useViewport();
	const breakpoint = 1200;
	titleTab('Projects');

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
