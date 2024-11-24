import { useEffect, useState } from "react";
import { AvatarUploader, ProfileData, ProfileInterests, ProfileVisibility } from "../";
import {
	validateName,
	validateLastname,
	validateJobTitle,
	validatePhone,
	validateEmail,
	validateAddress,
	validateExpirience,
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
	const [errors, setErrors] = useState({});
	const [isAddingInterest, setIsAddingInterest] = useState(false);

	useEffect(() => {
		setFormData(profileData);
	}, [profileData]);



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
		//console.log(Object.keys(newErrors).length);

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		if (isAddingInterest) {
			return;
		}

		onSave(formData);
	};

	return (
		<form className={styles.form} onSubmit={handleSave} >
			<AvatarUploader
				avatarPath={formData.avatar}
				setFormData={setFormData} />
			{/*onAvatarChange={handleAvatarChange} />*/}

			<ProfileData
				inputFields={inputFields}
				formData={formData}
				setFormData={setFormData}
				errors={errors}
				setErrors={setErrors} />

			<ProfileVisibility
				formData={formData}
				setFormData={setFormData} />

			<ProfileInterests
				formData={formData}
				setFormData={setFormData}
				isAddingInterest={isAddingInterest}
				setIsAddingInterest={setIsAddingInterest} />

			<div className={styles.controls}>
				<button type="submit" className={styles.btn} onClick={handleSave}>
					Save
				</button>
				<button type="button" onClick={handleCancel} className={styles.btn}>
					Cancel
				</button>
			</div >
		</form >
	);
}

