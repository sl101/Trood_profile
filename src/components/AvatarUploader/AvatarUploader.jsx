import { useEffect, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import styles from './AvatarUploader.module.css';

export const AvatarUploader = ({ avatarPath, setFormData }) => {

	const [preview, setPreview] = useState(avatarPath || "");

	useEffect(() => {
		setPreview(avatarPath || "");
	}, [avatarPath]);


	const handleAvatarChange = (avatarPath) => {
		setFormData((prev) => ({
			...prev,
			avatar: avatarPath,
		}));
	};


	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			if (file.size > 5 * 1024 * 1024) {
				alert("The file size must not exceed 5 MB");
				return;
			}

			if (!["image/png", "image/jpeg"].includes(file.type)) {
				alert("Accepted formats: .jpg, .jpeg, .png");
				return;
			}

			const reader = new FileReader();

			reader.onloadend = () => {
				const base64Image = reader.result;
				setPreview(base64Image);
				handleAvatarChange(base64Image);
			};

			reader.readAsDataURL(file);
		};
	};

	return (
		<div className={styles.avatar}>
			<label className={styles.upload}>
				<div className={styles.preview}>
					{preview ? (
						<img src={preview} alt="Avatar" className={styles.image} />
					) : (
						<div className={styles.placeholder}>
							<MdOutlineAddAPhoto />
						</div>
					)}
				</div>

				<input className={styles.input} type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
			</label>
		</div>
	);
};

