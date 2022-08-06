import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					lastName: Yup.string()
						.max(11, 'Must be 11 characters or less')
						.required('Required'),
					email: Yup.string().email('Must be a valid mail').required('Required'),
					terms: Yup.boolean().oneOf([true], 'Accept terms and conditions'),
					jobType: Yup.string()
						.required('Required')
						.notOneOf(['it-trainee'], 'This option is not alowed'),
				})}>
				{(formik) => (
					<Form>
						<MyTextInput label="First Name" name="firstName" placeholder="John" />
						<MyTextInput label="Last Name" name="lastName" placeholder="Doe" />
						<MyTextInput
							label="Email Address"
							name="email"
							type="email"
							placeholder="JohnDoe@mail.com"
						/>

						<MySelect name="jobType" as="select" label="jobType">
							<option value="">Choose One</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Jr.</option>
							<option value="it-trainee">IT trainee.</option>
						</MySelect>

						<MyCheckBox label="Terms and conditions" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
