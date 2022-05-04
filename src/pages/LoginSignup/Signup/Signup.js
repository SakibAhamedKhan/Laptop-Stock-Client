import React, { useState } from 'react';
import './Signup.css';
import logo from '../../../images/logo/Laptop Stock logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

// BiShow
// BiHide

const Signup = () => {
	const navigate = useNavigate();
	const [passShow, setPassShow] = useState(false);
	const [passConfShow, setPassConfShow] = useState(false);
	const [confirmPassError, setConfirmPassError] = useState('');
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		emailError,
	  ] = useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

	let elementErrors;
	if(emailError || updatingError){
		elementErrors = <p className='m-0 text-danger text-center error-message pt-2'>{emailError?.message}{updatingError?.message}</p>;
	}
	
	if(loading || updating){
		return <h2>Loading...</h2>
	}
	
	if(user){
		navigate('/');
	}
	const handleSubmit =async event => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const confirmPassword = event.target.confirmPassword.value;
		elementErrors ='';
		if(password !== confirmPassword){
			setConfirmPassError("Your two password wasn't matched");
		} else{
			setConfirmPassError('');
			await createUserWithEmailAndPassword(email, password);
			await updateProfile({displayName:name});
		}

	}
	return (
		<div className='signup container d-flex justify-content-center align-items-center'>
			<div className='signup-form mx-auto'>
				<img onClick={() => {
					navigate('/')
				}} style={{cursor:'pointer'}} height={60} src={logo} alt="" />
				<h4 className='mb-3'>Sign up</h4>
				<form onSubmit={handleSubmit}>
					<input type="text" name='name' placeholder='Full Name'required/>
					<input type="email" name='email' placeholder='Email' required/>
					<div className='passhow-container'>
						<input type={passShow?'text':'password'} name='password' placeholder='Password' required></input>
						<span onClick={() =>{
							setPassShow(!passShow);
						}} className='password-show'>{passShow?<BiShow></BiShow>:<BiHide></BiHide>}</span>
					</div>
					<div className='passhow-container'>
						<input type={passConfShow?'text':'password'} name='confirmPassword' placeholder='confirm Password' required/>
						<span onClick={() => {
							setPassConfShow(!passConfShow);
						}} className='password-show'>{passConfShow?<BiShow></BiShow>:<BiHide></BiHide>}</span>
					</div>
					<p className='m-0 text-center text-danger'>{confirmPassError}</p>
					{
						elementErrors
					}
					<button className='btn btn-primary w-100 mt-3'>Sign up</button>
					<p className='text-center mt-2 mb-4 text-decoration-none'>Already have an account? <Link to='/login' className='text-decoration-none'>Log in</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Signup;