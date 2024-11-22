import { useEffect, useState } from "react";
import styles from './AvatarUploader.module.css';
import { MdOutlineAddAPhoto } from "react-icons/md";

export const AvatarUploader = ({ avatarPath, onAvatarChange }) => {

	const [preview, setPreview] = useState(avatarPath || "");

	useEffect(() => {
		//if (avatarPath) {
		setPreview(avatarPath || "");
		//}
	}, [avatarPath]);

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
				onAvatarChange(base64Image);
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

				{/*<img src={avatar || <MdOutlineAddAPhoto />} alt="Avatar" />*/}

				<input className={styles.input} type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
			</label>
		</div>
	);
};

