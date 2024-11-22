import { useEffect, useState } from "react";
import { AvatarUploader } from "../";
import {
	validateName,
	validateSurname,
	validateJobTitle,
	validatePhone,
	validateAddress,
	validateLinks,
} from "../../services/validation";
import styles from "./ProfileForm.module.css";

const inputFields = [
	{
		label: "Name",
		name: "name",
		type: "text",
		placeholder: "Enter your name",
		validate: validateName,
	},
	{
		label: "Surname",
		name: "surname",
		type: "text",
		placeholder: "Enter your surname",
		validate: validateSurname,
	},
	{
		label: "Job Title",
		name: "jobTitle",
		type: "text",
		placeholder: "Enter your job title",
		validate: validateJobTitle,
	},
	{
		label: "Phone",
		name: "phone",
		type: "tel",
		placeholder: "+1234567890",
		validate: validatePhone,
	},
	{
		label: "Address",
		name: "address",
		type: "text",
		placeholder: "Enter your address",
		validate: validateAddress,
	},
	{
		label: "Links",
		name: "links",
		type: "url",
		placeholder: "https://example.com",
		validate: validateLinks,
	},
];

export const ProfileForm = ({ profileData, onSave }) => {
	const [formData, setFormData] = useState(profileData);
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

			{inputFields.map(({ label, name, type, placeholder }) => (
				<div key={name} className={styles.inputGroup}>
					<label htmlFor={name} className={styles.label}>
						{label}
					</label>
					<input
						id={name}
						name={name}
						type={type}
						placeholder={placeholder}
						value={formData[name] || ""}
						onChange={handleInputChange}
						className={`${styles.input} ${errors[name] ? styles.errorInput : ""}`}
					/>
					{errors[name] && <p className={styles.errorMessage}>{errors[name]}</p>}
				</div>
			))}

			<div className={styles.controls}>
				<button type="submit" className={styles.saveButton}>
					Save
				</button>
				<button onClick={handleCancel} className={styles.cancelButton}>
					Cancel
				</button>
			</div>
		</form>
	);
}

