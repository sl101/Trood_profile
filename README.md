# Trood Profile Page

## [Open Project](https://sl101.github.io/Trood_profile)

## Project Description
Trood Profile Page is a single-page application (SPA) built with React. It provides a user profile management interface, allowing users to edit their details, manage interests, links, projects, and tasks.

## Features
- **Profile Editing**: Update user information such as name, surname, contact details, visibility settings, and avatar.
- **Avatar Upload**: Supports image upload in Base64 format, stored in **LocalStorage**.
- **Data Persistence**: User profile data, including the avatar in Base64, is saved in **LocalStorage**.
- **Validation**: Form fields are validated using a separate validation module.
- **Enhanced UI**: 
  - Additional buttons "Save" and "Cancel" were added to the design.
  - Implemented requirements for field validation.
- **LocalStorage Management**: Separate utility functions handle saving and retrieving data from LocalStorage, making it easy to replace with backend integration if needed.
- **React Context**: A custom `NotificationContext` was created for managing notifications across the app.
- **Implemented Figma Design**: The project was developed according to the provided Figma mockup.

## Technologies Used
- **React**: Library for building user interfaces.
- **React Hooks**:
  - `useState` for state management.
  - `useEffect` for handling side effects like data loading.
  - `useContext` for managing notifications via `NotificationContext`.
- **CSS Modules**: Component-level styling.
- **Vite**: Fast build tool for development and production.
- **gh-pages**: Deployment utility for GitHub Pages.
- **LocalStorage**: For persisting user data, including Base64-encoded avatars.

## Dependencies
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.3.0
- `react-uuid`: ^2.0.0

### Development Dependencies
- `@vitejs/plugin-react`: ^4.3.3
- `gh-pages`: ^6.2.0
- `vite`: ^5.4.10

## Installation and Setup

### 1. Clone the Repository

	- git clone https://github.com/sl101/Trood_profile.git
	- cd Trood_profile

### 2. Install Dependencies
Run the following command to install all required dependencies:

	- npm install

### 3. Start the Development Server
To start the project locally in development mode, use:

	- npm run dev

Open your browser and navigate to: http://localhost:5173.

### 4. Build and Deploy on GitHub Pages
To build the project for production, run:

	- npm run build
	- npm run deploy

The application will be available at:
https://sl101.github.io/Trood_profile.

## Project Structure

	- trood_accout_page/
	- ├── public/              # Static files
	- ├── src/
	- │   ├── components/      # React components
	- │   ├── context/         # Contexts (NotificationContext)
	- │   ├── services/        # Validation and LocalStorage utilities
	- │   ├── App.jsx          # Root component
	- │   ├── main.jsx         # Entry point
	- │   └── index.css        # Global styles
	- ├── dist/                # Built project
	- ├── .gitignore           # Git ignore file
	- ├── package.json         # Project settings and dependencies
	- ├── vite.config.js       # Vite configuration
	- └── README.md            # Project documentation


## Project Requirements Implementation

- **Figma Mockup:** The application is designed based on the provided Figma mockup.
- **Avatar Upload:** Avatar images are uploaded, converted to Base64, and stored in LocalStorage.
- **Additional Buttons:** "Save" and "Cancel" buttons are implemented for better user interaction.
- **Validation:** Input validation logic is placed in a separate module.
- **LocalStorage Utilities:** Functions for saving and loading profile data are isolated for easier maintenance and future backend integration.
- **Base64 Storage:** Avatar images are encoded in Base64 and stored with other profile data in LocalStorage.
- **React Hooks:** с состояниями:
   - useState for managing component states.
   - useEffect for data fetching and side effects.
   - NotificationContext for centralized notification handling using useContext.

### Additional Commands
- **Linting кода:** npm run lint
- **Preview Build:** npm run preview 

### Contact Information
If you have any questions, feel free to reach out via [GitHub](https://github.com/sl101) or Telegram: [Viacheslav Zhevaha](https://t.me/Viacheslav_Zhevaha). 



