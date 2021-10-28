import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);


    // console.log(errors.age)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} /> {/* register an input */}
            <input {...register('lastName', { required: true, minLength: 4 })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input {...register('age', { pattern: /\d+/ })} className={errors.age ? 'is-valid' : 'is-invalid'} />{/* empty string means dont show validation feedback */}

            <div className="valid-feedback">
                Looks good!
            </div>
            {/* <div className="invalid-feedback">
                Please choose a real age.
            </div> */}
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
    );
}