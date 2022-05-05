import React from 'react';
import './SocialLog.css'
import {FcGoogle} from 'react-icons/fc';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SocialLog = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	if(error){
		toast.warn(`${error.message}`, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
	}


	return (
		<div className='social'>
			<div className='social-google' onClick={() => {
				signInWithGoogle();
			}}>
				<FcGoogle></FcGoogle>
				<p className='m-0 fw-bold'>Log in with Google</p>
			</div>
		</div>
	);
};

export default SocialLog;