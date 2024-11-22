export const validateName = (value) => {
	const regex = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,50}$/;
	if (!value) return "Name is required.";
	if (!regex.test(value)) return "Name must be 2-50 characters and contain only letters, spaces, or hyphens.";
	return null;
};

export const validateSurname = (value) => {
	const regex = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,50}$/;
	if (!value) return "Surname is required.";
	if (!regex.test(value)) return "Surname must be 2-50 characters and contain only letters, spaces, or hyphens.";
	return null;
};

export const validateJobTitle = (value) => {
	if (value.length > 100) return "Job title must be 100 characters or less.";
	return null;
};

export const validatePhone = (value) => {
	const regex = /^\+\d{10,15}$/;
	if (!value) return "Phone number is required.";
	if (!regex.test(value)) return "Phone must start with '+' and contain 10-15 digits.";
	return null;
};

export const validateAddress = (value) => {
	if (value.length > 200) return "Address must be 200 characters or less.";
	return null;
};

export const validateLinks = (value) => {
	const regex = /^(https?:\/\/)?[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+.*$/;
	if (value && !regex.test(value)) return "Links must be a valid URL.";
	if (value.length > 200) return "Links must be 200 characters or less.";
	return null;
};

export const validateInterests = (value) => {
	if (Array.isArray(value)) {
		if (value.length > 10) return "You can have up to 10 interests.";
		for (const interest of value) {
			if (interest.length > 30) return "Each interest must be 30 characters or less.";
		}
	}
	return null;
};