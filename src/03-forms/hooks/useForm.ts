import { useState } from 'react';

export const useForm = <T>( initialState: T ) => {

	const [formData, setFormData] = useState(initialState);

	const onInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const {name , value} = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	};

	const resetForm = () => {
		setFormData({...initialState})
	}

	const isEmailValid = ( email: string ) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	return {
		...formData,
		formData,

		isEmailValid,
		onInputChange,
		resetForm
	}
}
