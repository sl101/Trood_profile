import { RiDeleteBin6Line } from "react-icons/ri";
import styles from './ProfileLink.module.css';

export const ProfileLink = ({ site_name, url, removeLink }) => {
	return (
		<li className={styles.link_item}>
			<span
				className={styles.name}>
				{site_name}
			</span>
			<a
				className={styles.link}
				href={url}
				target="_blank"
				rel="noopener noreferrer">
				{url}
			</a>
			<button
				type="button"
				className={styles.remove_button}
				onClick={removeLink}
			>
				<RiDeleteBin6Line />
			</button>
		</li>
	);
};
