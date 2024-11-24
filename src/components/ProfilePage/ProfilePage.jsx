import { useState } from "react";
import { useEffect } from "react";
import { ProjectsSection, TasksSection, ProfileForm } from "../";
import { loadProfileData, saveProfileData } from "../../services/storageService";
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
	const [profileData, setProfileData] = useState({
		name: "",
		lastname: "",
		jobTitle: "",
		phone: "",
		address: "",
		interests: [],
		links: "",
		avatar: null,
		visibility: "Private",
		projects: [
			{ id: 1, title: " Create project" },
			//{ id: 2, title: " Create project" },
		],
		tasks: [
			{ id: 1, title: "Create task" },
			//{ id: 2, title: "Create task" },
			//{ id: 3, title: "Create task" }
		]
	});

	useEffect(() => {
		const data = loadProfileData();
		if (data) setProfileData(data);
	}, []);

	const handleSave = (updatedData) => {
		//console.log(updatedData);
		setProfileData(updatedData);
		saveProfileData(updatedData);
		alert("Success!!!");
	};

	return (
		<section className={styles.page}>
			<h1 className="sr-only">Profile Page</h1>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.inner}>
						<ProjectsSection projects={profileData.projects} />
						<TasksSection tasks={profileData.tasks} />
					</div>
					<ProfileForm profileData={profileData} onSave={handleSave} />
				</div>
			</div>
		</section>
	);
};
