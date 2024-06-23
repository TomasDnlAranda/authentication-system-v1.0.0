import Form from '@/app/sign-up/components/form/Form';

// page information
export const metadata = {
	title: 'Sign Up',
	description: 'On this page, you could sign up for our application.',
};

const page = () => {
	return (
		<div className="page">
			<h2 className="title">Sign Up</h2>
			<Form />
		</div>
	);
};

export default page;
