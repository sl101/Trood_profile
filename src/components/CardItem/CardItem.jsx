import styles from "./CardItem.module.css";

export const CardItem = ({ id, title, onActionClick }) => {
	return (
		<li className={styles.card_item}>
			<h3 className={styles.title}>{title}</h3>
			<button className={styles.card_action} onClick={() => onActionClick(id)}>
				+
			</button>
		</li>
	);
};