import { CardItem } from "../";
import styles from './TasksSection.module.css';

export const TasksSection = ({ tasks }) => {


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