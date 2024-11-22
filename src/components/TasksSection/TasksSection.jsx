import { CardItem } from "../";
import styles from './TasksSection.module.css';

const tasks = [
	{ id: 1, title: "Create task" },
	{ id: 2, title: "Create task" },
	//{ id: 3, title: "Create task" }
];

export const TasksSection = () => {


	const handleCreateTask = (id) => {
		console.log(id);
	};

	return (
		<div>
			<h2 className={styles.title}>Tasks:</h2>
			<ul className={styles.list}>
				{tasks.map(task =>
					<CardItem
						key={task.id}
						{...task}
						onActionClick={handleCreateTask} />)
				}
			</ul>
		</div>);
};