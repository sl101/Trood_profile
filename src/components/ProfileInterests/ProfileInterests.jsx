import { useState } from "react";
import { validateInterests } from "../../services/validation";
import { CircleButton } from "../";
import styles from './ProfileInterests.module.css';

export const ProfileInterests = ({ formData, setFormData, isAddingInterest, setIsAddingInterest }) => {
	const [newInterest, setNewInterest] = useState("");

	const handleAddInterest = () => {
		const trimmedInterest = newInterest.trim();
		const error = validateInterests([...formData.interests, trimmedInterest]);

		if (error) {
			alert(error);
			return;
		}

		setFormData((prev) => ({
			...prev,
			interests: [...prev.interests, trimmedInterest],
		}));
		setNewInterest("");
		setIsAddingInterest(false);
	};

	const handleRemoveInterest = (index) => {
		setFormData((prev) => ({
			...prev,
			interests: prev.interests.filter((_, i) => i !== index),
		}));
	};

	const handleCancelInterest = (e) => {
		e.preventDefault();
		setIsAddingInterest(false);
		setNewInterest("");
	};

	return (
		<ul className={styles.content}>
			<p className={styles.interest_title}>The scope of your interest:</p>
			{formData.interests.map((interest, index) => (
				<li key={index}
					className={styles.interest}>
					<span>{interest}</span>
					<CircleButton text="+" click={() => handleRemoveInterest(index)} content="btn_remove" />
				</li>
			))}
			{!isAddingInterest &&
				formData.interests.length < 10 ?
				<CircleButton text="+" click={() => setIsAddingInterest(true)} /> :
				<div className={styles.add_interest}>
					<input
						type="text"
						value={newInterest}
						onChange={(e) => setNewInterest(e.target.value)}
						maxLength={30} />
					<CircleButton text="+" click={handleAddInterest} content="btn_add" />
					<CircleButton text="-" click={handleCancelInterest} content="btn_cancel" />
				</div>
			}
		</ul>

	);
}


