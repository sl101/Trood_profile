import { useState, useEffect, useContext } from "react";
import { ProjectsSection, TasksSection, ProfileForm, Notification } from "../";
import { loadProfileData, saveProfileData } from "../../services/storageService";
import { NotificationContext } from "../../context/NotificationContext";
import styles from './ProfilePage.module.css';

const defaultProfileData = {
	name: "",
	lastname: "",
	jobTitle: "",
	phone: "",
	address: "",
	interests: [],
	potential_interests: [],
	links: [],
	avatar: null,
	visibility: "Private",
	projects: [{ id: 1, title: "Create project" }],
	tasks: [{ id: 1, title: "Create task" }],
};

export const ProfilePage = () => {
	const [profileData, setProfileData] = useState(defaultProfileData);
	const { message, setMessage } = useContext(NotificationContext);


	useEffect(() => {
		const data = loadProfileData();
		if (data) setProfileData(data);
	}, []);

	const handleSave = (updatedData) => {
		setProfileData(updatedData);
		saveProfileData(updatedData);
		setMessage("Profile saved successfully!");
	};

	return (
		<section className={styles.page}>
			{message && (
				<Notification
					message={message}
					onClose={() => setMessage("")}
				/>
			)}
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
