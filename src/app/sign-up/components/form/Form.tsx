'use client';
import './form.scss';
import useForm from '../../hooks/useForm';

// initial form...
const userDataForSigningUp = {
	firstname: 'Tomas',
	lastname: 'Aranda',
	email: 'tomas@test.com',
	password: '123456',
};

const FormSignUp = () => {
	// get data from my hook...
	const { handleSubmit, handleFieldChange, form } = useForm(userDataForSigningUp);
	const { firstname, lastname, email, password } = form;

	return (
		<form className="form-sign-up__form" onSubmit={handleSubmit}>
			{/* firstname */}
			<div className="form-sign-up__field">
				<input
					className="form-sign-up__input"
					value={firstname}
					onChange={handleFieldChange}
					type="text"
					name="firstname"
					placeholder="Nombre"
				/>
			</div>
			{/* lastname */}
			<div className="form-sign-up__field">
				<input
					className="form-sign-up__input"
					value={lastname}
					onChange={handleFieldChange}
					type="text"
					name="lastname"
					placeholder="Apellido"
				/>
			</div>
			{/* email */}
			<div className="form-sign-up__field">
				<input
					className="form-sign-up__input"
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={handleFieldChange}
				/>
			</div>
			{/* password */}
			<div className="form-sign-up__field">
				<input
					className="form-sign-up__input"
					type="password"
					name="password"
					placeholder="Contraseña"
					value={password}
					onChange={handleFieldChange}
				/>
			</div>
			<button className="form-sign-up__button">Sign Up</button>
		</form>
	);
};

export default FormSignUp;
