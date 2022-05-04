import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../../images/logo/Laptop Stock logo.png';
import { BiShow, BiHide } from "react-icons/bi";
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
	const navigate = useNavigate();
	const [passShow, setPassShow] = useState(false);
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		emailLoginError,
	  ] = useSignInWithEmailAndPassword(auth);
	let elementErrors;


	if(emailLoginError){
		elementErrors = <p className='m-0 text-danger text-center error-message pt-2'>{emailLoginError?.message}</p>;
	}

	if(loading){
		return <h2>Loading...</h2>
	}

	if(user){
		navigate('/');
	}

	const handleSubmit = event =>{
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		signInWithEmailAndPassword(email, password);
	}
	return (
		<div className='signup container d-flex justify-content-center align-items-center'>
			<div className='signup-form mx-auto'>
				<img onClick={() => {
					navigate('/')
				}} style={{cursor:'pointer'}} height={60} src={logo} alt="" />
				<h4 className='mb-3'>Log in</h4>
				<form onSubmit={handleSubmit}>
					<input type="email" name='email' placeholder='Email' required/>
					<div className='passhow-container'>
						<input type={passShow?'text':'password'} name='password' placeholder='Password' required></input>
						<span onClick={() =>{
							setPassShow(!passShow);
						}} className='password-show'>{passShow?<BiShow></BiShow>:<BiHide></BiHide>}</span>
					</div>
					{
						elementErrors
					}
					<button className='btn btn-primary w-100 mt-3'>Log in</button>
					<p className='text-center mt-2 mb-4 text-decoration-none'>Don't have an account? <Link to='/signup' className='text-decoration-none'>Sign up</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Login;