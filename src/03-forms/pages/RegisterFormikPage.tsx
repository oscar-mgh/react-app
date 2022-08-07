import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password1: '',
				password2: '',
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
			validationSchema={Yup.object({
				name: Yup.string()
						.min(3, 'Must be at least 3 characters long')
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
				email: Yup.string()
						.email('Must be a valid mail')
						.required('Required'),
				password1: Yup.string()
						.min(6, 'Must be 6 characters long')
						.required('Required'),
				password2: Yup.string()
						.required('Required')
						.oneOf([ Yup.ref('password1') ], 'Passwords must match')
			})}>
			{(formik) => (
				<Form>
					<MyTextInput name="name" label="name" placeholder="John" />
					<MyTextInput name="email" label="email" type="email" placeholder="JohnDoe@email.com" />
					<MyTextInput name="password1" label="password" type="password" placeholder="******" />
					<MyTextInput name="password2" label="password" type="password" placeholder="******" />

					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};
