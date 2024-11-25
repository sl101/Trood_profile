import { useContext, useEffect, useState } from "react";
import { validateInterests } from "../../services/validation";
import { CircleButton } from "../";
import { NotificationContext } from "../../context/NotificationContext";
import styles from './ProfileInterests.module.css';

export const ProfileInterests = ({ title, list, onSave }) => {

	const [newInterest, setNewInterest] = useState("");
	const [isAddingInterest, setIsAddingInterest] = useState(false);
	const { message } = useContext(NotificationContext);

	useEffect(() => {
		if (message) {
			setIsAddingInterest(false);
			setNewInterest("");
		}
	}, [message]);

	const handleAddInterest = () => {
		const trimmedInterest = newInterest.trim();
		const error = validateInterests([...list, trimmedInterest]);

		if (error) {
			alert(error);
			return;
		}
		onSave([...list, trimmedInterest]);
		setNewInterest("");
		setIsAddingInterest(false);
	};

	const handleRemoveInterest = (index) => {
		const updatedList = list.filter((_, i) => i !== index);
		onSave(updatedList);
	};

	const handleCancelInterest = (e) => {
		e.preventDefault();
		setIsAddingInterest(false);
		setNewInterest("");
	};

	return (
		<ul className={styles.content}>
			<h4 className={styles.title}>{title}</h4>
			{list.map((interest, index) => (
				<li key={index}
					className={styles.interest}>
					<span>{interest}</span>
					<CircleButton text="+" click={() => handleRemoveInterest(index)} content="btn_remove" />
				</li>
			))}
			{!isAddingInterest &&
				list.length < 10 ?
				<CircleButton text="+" click={() => setIsAddingInterest(true)} /> :
				<div className={styles.add_interest}>
					<input
						type="text"
						value={newInterest}
						onChange={(e) => setNewInterest(e.target.value)}
						maxLength={30} />
					<CircleButton text="+" click={handleAddInterest} content="btn_add" />
					<CircleButton text="-" click={(handleCancelInterest)} content="btn_cancel" />
				</div>
			}
		</ul>

	);
}


