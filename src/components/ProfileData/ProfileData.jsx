import { InputField } from "../";
import styles from './ProfileData.module.css';

export const ProfileData = ({ inputFields, formData, setFormData, errors, setErrors }) => {

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

	return (
		<ul className={styles.list}>
			{inputFields.map((field) => (
				<InputField
					key={field.name}
					value={formData[field.name]}
					handleInputChange={handleInputChange}
					errors={errors}
					{...field} />
			))}
		</ul>
	);
}

