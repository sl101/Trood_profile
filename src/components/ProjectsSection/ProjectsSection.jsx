import { CardItem } from "../";
import styles from './ProjectsSection.module.css';

const projects = [
	{ id: 1, title: " Create project" },
	//{ id: 2, title: " Create project" },
];

export const ProjectsSection = () => {
	const handleCreateProject = (id) => {
		console.log(id);
	};
	return (
		<div>
			<h2 className={styles.title}>Projects:</h2>
			<ul className={styles.list}>
				{projects.map(project =>
					<CardItem
						key={project.id}
						{...project}
						onActionClick={handleCreateProject} />
				)}
			</ul>
		</div>
	);
};

