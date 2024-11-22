export const loadProfileData = () => {
	const data = localStorage.getItem("formData");
	return data ? JSON.parse(data) : null;
};

export const saveProfileData = (data) => {
	localStorage.setItem("formData", JSON.stringify(data));
};