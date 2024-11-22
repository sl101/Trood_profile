import { useState } from "react";
import { ProjectsSection, TasksSection, ProfileForm } from "../";
import styles from './ProfilePage.module.css';
import { useEffect } from "react";
import { loadProfileData, saveProfileData } from "../../services/storageService";

export const ProfilePage = () => {
	const [profileData, setProfileData] = useState({
		name: "",
		surname: "",
		jobTitle: "",
		phone: "",
		address: "",
		interests: [],
		links: "",
		avatar: null,
		visibility: "Private",
	});

	useEffect(() => {
		const data = loadProfileData();
		if (data) setProfileData(data);
	}, []);

	const handleSave = (updatedData) => {
		setProfileData(updatedData);
		saveProfileData(updatedData);
	};

	return (
		<section className={styles.page}>
			<h1 className="sr-only">Profile Page</h1>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.inner}>
						<ProjectsSection />
						<TasksSection />
					</div>
					<ProfileForm profileData={profileData} onSave={handleSave} />
				</div>
			</div>
		</section>
	);
};
