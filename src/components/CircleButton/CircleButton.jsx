import styles from './CircleButton.module.css';

export const CircleButton = ({ text, click, content }) => {
	return (
		<button
			type="button"
			onClick={click}
			className={`${styles.btn} ${content ? styles[content] : ''}
}`}
		>{text}</button>
	);
};;
