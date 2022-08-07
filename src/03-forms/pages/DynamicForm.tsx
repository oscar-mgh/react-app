import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components';
import * as Yup from 'yup';
// console.log(formJson);

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};
for (let input of formJson) {
	initialValues[ input.name ] = input.value
	if (!input.validations) continue;
	let schema = Yup.string();
	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required('This field is required')
		}
		if (rule.type === 'minLength') {
			schema = schema.min((rule as any).value || 2 , `Must be at least ${(rule as any).value || 2} characters long`)
		}
		if (rule.type === 'email') {
			schema = schema.email('Must be a valid mail')
		}
		// Other rules
	}
	requiredFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={ initialValues }
				validationSchema={ validationSchema }
				onSubmit={(values) => {
					console.log(values);
				}}>
				{(formik) => (
					<Form noValidate>
						{formJson.map(({ type, name, label, placeholder, options }) => {
							if (type === 'input' || type === 'password' || type === 'email' ) {
								return (
									<MyTextInput
										key={name}
										type={type as any}
										name={name}
										label={label}
										placeholder={placeholder}
									/>
								)
							} else if ( type === 'select' ) {
								return (
									<MySelect 
										key={name}
										name={name}
										label={label}
									>
										<option value="">Select an option</option>
										{
											options?.map( ({ id, label }) => (
												<option key={ id } value={ id } >{ label }</option>
											))
										}
									</MySelect>
								)
							}
							throw new Error(`Type: ${ type }, not supported`)
						})}

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
