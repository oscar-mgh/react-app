import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const { name, email, password1, password2, onInputChange, resetForm, isEmailValid } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={handleSubmit}>
				<input
					onChange={onInputChange}
					name="name"
					value={name}
					type="text"
					placeholder="name"
					className={`${name.trim().length <= 0 ? 'has-error' : ''}`}
				/>
				{name.trim().length <= 0 && <span>This field must not be empty</span>}
				<input
					onChange={onInputChange}
					name="email"
					value={email}
					type="email"
					placeholder="Email"
					className={`${!isEmailValid( email ) ? 'has-error' : ''}`}
				/>
				{!isEmailValid( email ) && <span>Email is not valid</span>}
				<input
					onChange={onInputChange}
					value={password1}
					type="password"
					placeholder="Password"
					name="password1"
				/>
				{password1.trim().length <= 0 && <span>This field must not be empty</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && <span>Password must be at least 6 characters long</span>}
				<input
					onChange={onInputChange}
					value={password2}
					type="password"
					placeholder="Repeat Password"
					name="password2"
				/>
				{password2.trim().length > 0 && password2 !== password1 && <span>All passwords must be the same</span>}
				<button type="submit">Create</button>
				<button onClick={resetForm} type="button">
					Reset Form
				</button>
			</form>
		</div>
	);
};
