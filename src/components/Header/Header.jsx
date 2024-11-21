import logo from "/images/logo.svg";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div className={styles.arrow}>
						<FaArrowLeft />
					</div>
					<img className={styles.logo} src={logo} alt="Logo" />
					<p className={styles.page_name}>Profile</p>
				</div>
			</div>
		</header >
	);
}

