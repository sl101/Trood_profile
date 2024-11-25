import { useContext, useEffect, useState } from "react";
import uuid from 'react-uuid';
import { ProfileLink, CircleButton } from "../";
import { validateProfileLink } from "../../services/validation";
import { NotificationContext } from "../../context/NotificationContext";
import styles from './ProfileLinks.module.css';

export const ProfileLinks = ({ initial_links = [], onSave }) => {

	const [links, setLinks] = useState(initial_links);
	const [newLink, setNewLink] = useState({
		id: uuid(),
		site_name: "",
		url: ""
	});
	const [isAdding, setIsAdding] = useState(false);
	const [error, setError] = useState("");

	const { message } = useContext(NotificationContext);

	useEffect(() => {
		setLinks(initial_links);
	}, [initial_links]);

	useEffect(() => {
		if (message) handleCanselLink();
	}, [message]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewLink((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddLink = () => {
		const { site_name, url } = newLink;

		if (!site_name.trim()) {
			setError("Site name is required.");
			return;
		}

		const validationError = validateProfileLink(url);
		if (validationError) {
			setError(validationError);
			return;
		}
		const updatedLinks = [...links, newLink];
		setLinks(updatedLinks);
		setNewLink({ id: uuid(), site_name: "", url: "" });
		setIsAdding(false);
		setError("");
		if (onSave) onSave(updatedLinks);
	};

	const handleRemoveLink = (id) => {
		const updatedLinks = links.filter((link) => link.id !== id);
		setLinks(updatedLinks);
		if (onSave) onSave(updatedLinks);
	};

	const handleCanselLink = () => {
		setIsAdding(false);
		setNewLink({ site_name: "", url: "" });
		setError("");
	};

	return (
		<div className={styles.links_section}>
			<h4 className={styles.title}>Your links:</h4>
			<ul className={styles.links_list}>
				{links?.map((link) => (
					<ProfileLink key={link.id} {...link} removeLink={() => handleRemoveLink(link.id)} />
				))}
			</ul>

			{isAdding ? (
				<>
					<div className={styles.new_link}>
						<input
							type="text"
							name="site_name"
							placeholder="Site name"
							value={newLink.site_name}
							onChange={handleInputChange}
						/>

						<input
							type="url"
							name="url"
							placeholder="Link"
							value={newLink.url}
							onChange={handleInputChange}
						/>

						<CircleButton
							text="+"
							click={handleAddLink} />
						<CircleButton
							text="-"
							click={handleCanselLink} />
						<p className={`${styles.error} ${error ? styles["active_arror"] : ''}`}>{error}</p>
					</div>
				</>
			) : (
				<div className={styles.wrapper_btn}>
					<CircleButton
						className={styles.add_btn}
						text="+"
						click={() => setIsAdding(true)} />
				</div>
			)}
		</div>
	);
};

