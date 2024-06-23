import { ChangeEvent, useState } from 'react';

interface Form {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}

const useForm = (userDataForSigningUp: Form) => {
	// data
	const [form, setForm] = useState(userDataForSigningUp);

	// submit
	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form);
	};

	// validate
	const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({
			...userDataForSigningUp,
			[name]: value,
		});
	};

	return { handleSubmit, handleFieldChange, form };
};

export default useForm;
