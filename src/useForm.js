import { useState } from 'react';

export const useForm = (initialValues) =>{
    const [ values, setValues ] = useState(initialValues);
	const [ password, setPassword ] = useState(initialValues);
    return[
        values,
        e =>{
            setValues({
                ...values,
                [e.target.name]:e.target.value
            });
        }
    ];
};