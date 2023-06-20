import React from 'react'
import '../cred.css';
import { Link } from 'react-router-dom';

export default function Signup() {

	// function openPopup() {
	//     var popupContainer = document.getElementById("popup-container");
	//     popupContainer.style.display = "block";
	// }

	// function closePopup() {
	//     var popupContainer = document.getElementById("popup-container");
	//     popupContainer.style.display = "none";
	// }

	return (
		<div>
			<div className="background">
				<img id='sign_img' src='signup.jpeg'></img>
				{/* <div className="shape"></div>
                <div className="shape"></div> */}
			</div>
			<form className='form_cred form_cred_s'>
				<h3 id='signuphere'>SignUp Here</h3>

				<label className='label_cred mod_lbl' for="username">Username</label>
				<input className='input_cred mod_inp' type="text" placeholder="Email or Phone" id="username" />

				<label className='label_cred mod_lbl' for="username">Date Of Birth</label>
				<input className='input_cred mod_inp' type="text" placeholder="DD/MM/YYYY" id="username" />

				<label className='label_cred mod_lbl' for="username">Mail/Phone</label>
				<input className='input_cred mod_inp' type="text" placeholder="Email or Phone" id="username" />

				<label className='label_cred mod_lbl ' for="password">Password</label>
				<input className='input_cred mod_inp' type="password" placeholder="***" id="password" />

				<button className='button_cred'>Sign Up</button>
				<Link to='/login' >
				<button className='button_cred'>Have An Account? Log In</button>
				</Link>
				{/* <div className="social">
                    <div className="go"><i className="fab fa-google"></i> Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
                </div> */}
			</form>
		</div>
	)
}