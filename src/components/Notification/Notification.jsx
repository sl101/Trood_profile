import { useEffect } from "react";
import styles from "./Notification.module.css";

export const Notification = ({ message, onClose }) => {

	useEffect(() => {
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		const fixed_elems = document.querySelectorAll('.fixed');
		fixed_elems.forEach(elem => elem.style.paddingRight = `${scrollbarWidth}px`);
		document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
		document.body.style.overflow = 'hidden';

		return () => {
			fixed_elems.forEach(elem => elem.style.paddingRight = '');
			document.documentElement.style.paddingRight = '';
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<div className={styles.notification}>
			<div className={styles.wrapper}>
				<p>{message}</p>
				<button
					className={styles.btn}
					onClick={onClose}>Close</button>
			</div>
		</div>
	);
};