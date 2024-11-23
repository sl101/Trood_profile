import styles from './InputField.module.css';

export const InputField = ({ name, type, placeholder, value, handleInputChange, errors }) => {
	return (
		<li >
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value || ""}
				onChange={handleInputChange}
				className={`${styles.input} ${errors[name] ? styles.error_input : ""}`}
			/>
			{errors[name] && <p className={styles.error_message}>{errors[name]}</p>}
		</li>
	);
};
