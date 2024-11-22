export const loadProfileData = () => {
	const data = localStorage.getItem("profileData");
	return data ? JSON.parse(data) : null;
};

export const saveProfileData = (data) => {
	localStorage.setItem("profileData", JSON.stringify(data));
};