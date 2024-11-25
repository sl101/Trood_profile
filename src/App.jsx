import { useState } from "react";
import { Header, ProfilePage } from "./components";
import { NotificationContext } from "./context/NotificationContext";

function App() {
	const [message, setMessage] = useState("");


	return (
		<NotificationContext.Provider
			value={{
				message,
				setMessage,
			}}>
			<Header />
			<ProfilePage />
		</NotificationContext.Provider>
	);
}

export default App;
