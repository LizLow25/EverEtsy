import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const validateEmail = (email) => {
		const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		return res.test(String(email).toLowerCase());
	  }

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(!validateEmail(email)) {
			setErrors(["Invalid email format"])
			return
		}
		if(username[0] == ' ') setErrors(["Please enter non-whitespace characters for username"])
		if(firstname[0] == ' ') setErrors(["Please enter non-whitespace characters for first name"])
		if(lastname[0] == ' ') setErrors(["Please enter non-whitespace characters for last name"])
		if(password[0] == ' ') setErrors(["Please enter non-whitespace characters for password"])

		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, firstname, lastname, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		< div className="sign-up-modal">
			<h2>Create your account</h2>
			<h3>Registration is easy.</h3>
			<form className='signupform' onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx} className="signuperror">{error}</li>
					))}
				</ul>
				<label>
					Email address
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
					First name
					<input
						type="text"
						value={firstname}
						onChange={(e) => setFirstname(e.target.value)}
						required
					/>
				</label>
				<label>
					Last name
					<input
						type="text"
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit" className="registerButton">Register</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
