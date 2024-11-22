import styles from './ProfileVisibility.module.css';

export const ProfileVisibility = ({ formData, setFormData }) => {

	const handleVisibilityChange = (e) => {
		const value = e.target.value;
		setFormData((prev) => ({ ...prev, visibility: value }));
	};

	return (
		<div className={styles.radio_content}>
			<p className={styles.label}>Show your profile in Launchpad?</p>
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
		</div>
	);
}

