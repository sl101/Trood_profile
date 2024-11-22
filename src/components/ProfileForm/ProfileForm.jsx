import { useEffect, useState } from "react";
import { AvatarUploader } from "../";
import {
	validateName,
	validateLastname,
	validateJobTitle,
	validatePhone,
	validateEmail,
	validateAddress,
	validateExpirience,
	validateVisibility,
	validateInterests
} from "../../services/validation";
import styles from "./ProfileForm.module.css";

const inputFields = [
	{
		label: "Name",
		name: "name",
		type: "text",
		placeholder: "Name",
		validate: validateName,
	},
	{
		label: "Lastname",
		name: "lastname",
		type: "text",
		placeholder: "Lastname",
		validate: validateLastname,
	},
	{
		label: "Job Title",
		name: "jobTitle",
		type: "text",
		placeholder: "Job Title",
		validate: validateJobTitle,
	},
	{
		label: "Phone",
		name: "phone",
		type: "tel",
		placeholder: "Phone",
		validate: validatePhone,
	},
	{
		label: "Email",
		name: "email",
		type: "email",
		placeholder: "Email",
		validate: validateEmail,
	},
	{
		label: "Address",
		name: "address",
		type: "text",
		placeholder: "Address",
		validate: validateAddress,
	},
	{
		label: "Experience",
		name: "experience",
		type: "text",
		placeholder: "Experience",
		validate: validateExpirience,
	},
];

export const ProfileForm = ({ profileData, onSave }) => {
	const [formData, setFormData] = useState(profileData);
	const [newInterest, setNewInterest] = useState("");
	const [isAddingInterest, setIsAddingInterest] = useState(false);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		setFormData(profileData);
	}, [profileData]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		const field = inputFields.find((field) => field.name === name);
		if (field && field.validate) {
			const error = field.validate(value);
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};


	const handleAvatarChange = (avatarPath) => {
		setFormData((prev) => ({
			...prev,
			avatar: avatarPath,
		}));
	};

	const handleVisibilityChange = (e) => {
		const value = e.target.value;
		const error = validateVisibility(value);
		setErrors((prev) => ({ ...prev, visibility: error }));
		setFormData((prev) => ({ ...prev, visibility: value }));
	};

	const handleAddInterest = () => {
		const trimmedInterest = newInterest.trim();
		const error = validateInterests([...formData.interests, trimmedInterest]);

		if (error) {
			setErrors((prev) => ({ ...prev, interests: error }));
			return;
		}

		setFormData((prev) => ({
			...prev,
			interests: [...prev.interests, trimmedInterest],
		}));
		setNewInterest("");
		setErrors((prev) => ({ ...prev, interests: "" }));
		setIsAddingInterest(false);
	};

	const handleRemoveInterest = (index) => {
		setFormData((prev) => ({
			...prev,
			interests: prev.interests.filter((_, i) => i !== index),
		}));
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setFormData(profileData);
		setErrors({});
	};

	const handleSave = (e) => {
		e.preventDefault();
		const newErrors = {};

		inputFields.forEach(({ name, validate }) => {
			if (validate) {
				const error = validate(formData[name]);
				if (error) newErrors[name] = error;
			}
		});

		//newErrors.interests = validateInterests(formData.interests);
		//newErrors.visibility = validateVisibility(formData.visibility);

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		onSave(formData);
	};

	return (
		<form className={styles.form} onSubmit={handleSave} >
			<AvatarUploader
				avatarPath={formData.avatar}
				onAvatarChange={handleAvatarChange} />

			<ul className={styles.list}>
				{inputFields.map(({ name, type, placeholder }) => (
					<li key={name} className={styles.inputGroup}>
						<input
							id={name}
							name={name}
							type={type}
							placeholder={placeholder}
							value={formData[name] || ""}
							onChange={handleInputChange}
							className={`${styles.input} ${errors[name] ? styles.error_input : ""}`}
						/>
						{errors[name] && <p className={styles.error_message}>{errors[name]}</p>}
					</li>
				))}
			</ul>

			<div className={styles.radio_content}>
				<p className={styles.label}>Show your profile in Launch Pad?</p>
				<div className={styles.radio_group}>
					{["Private", "Public"].map((value) => (
						<label key={value} className={styles.radio_label}>
							<input
								type="radio"
								name="visibility"
								value={value}
								checked={formData.visibility === value}
								onChange={handleVisibilityChange}
								className={styles.radio_input}
							/>
							{value}
						</label>
					))}
				</div>
				{errors.visibility && <p className={styles.errorMessage}>{errors.visibility}</p>}
			</div>

			{/*<div className={styles.field}>
				<label htmlFor="interests">The scope of your interest:</label>
				<div className={styles.interests}>
					{formData.interests.map((interest, index) => (
						<div key={index} className={styles.interest}>
							<span>{interest}</span>
							<button
								type="button"
								onClick={() => handleRemoveInterest(index)}
								className={styles.remove}
							>
								&times;
							</button>
						</div>
					))}
				</div>

				{isAddingInterest && (
					<div className={styles.addInterest}>
						<input
							type="text"
							value={newInterest}
							onChange={(e) => setNewInterest(e.target.value)}
							placeholder="Enter a new interest"
							maxLength={30}
						/>
						<button type="button" onClick={handleAddInterest}>
							Save
						</button>
						<button
							type="button"
							onClick={() => setIsAddingInterest(false)}
							className={styles.cancel}
						>
							Cancel
						</button>
					</div>
				)}

				{!isAddingInterest && formData.interests.length < 10 && (
					<button
						type="button"
						onClick={() => setIsAddingInterest(true)}
						className={styles.addButton}
					>
						Add Interest
					</button>
				)}

				{errors.interests && <p className={styles.error}>{errors.interests}</p>}
			</div>*/}

			<div className={styles.controls}>
				<button type="submit" className={styles.btn} onClick={handleSave}>
					Save
				</button>
				<button onClick={handleCancel} className={styles.btn}>
					Cancel
				</button>
			</div >
		</form >
	);
}

