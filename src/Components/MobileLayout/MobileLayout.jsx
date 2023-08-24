import React, { useState } from "react";
import "./mobileLayout.css";
import profileImage from "../../images/profileImage.jpg";
import { AiOutlineGithub } from 'react-icons/ai'
import { CiYoutube , CiLinkedin } from 'react-icons/ci'
// import profileImage from "../../images/profileImage.jpg";
import { API_URL } from '../../Constants/URL'
import axios from 'axios'
import { BsArrowRightShort } from 'react-icons/bs'
import SaveButton from "../SaveBtn/SaveButton";

const MobileLayout = () => {

	 const [firstName, setFirstName] = useState('');
	 const [lastName, setLastName] = useState('');
	 const [email, setEmail] = useState('');

	 const postData = async () => {
		await axios.post(API_URL, {
			firstName,
			lastName,
			email
		})
	 }

	return (
              <div className="container">
                <div className="mobileContainer">
                 
                <div className='mobItems'>
					<div className='custInfo'>
						<div className='imgContainer'>
							<img className='profileImg'  src={profileImage} alt="Profile" height={300} width={400} />
						</div>

						<div className='nameContainer'>
              <span className="Name">{firstName} {lastName}</span>
             
              <span className="userEmail">{email}</span>
            </div>
          <div className="linkButtons">
                    <div className="gitBtnDiv">
                    <AiOutlineGithub className="gitIcon" />
                    <button className="git">GitHub</button>
                    <BsArrowRightShort className="rightArrowGit"/>
                    </div>
                    <div className="ytBtnDiv">
                    <CiYoutube className="ytIcon" />
                    <button className="ytube">YouTube</button>
                    <BsArrowRightShort className="rightArrowYoutube"/>
                    </div>
                    <div className="linBtnDiv">
                    <CiLinkedin className="linIcon" />
                    <button className="linBtn">LinkedIn</button>
                    <BsArrowRightShort className="rightArrowlinkedIn"/>
                    </div>
                    
          </div>

					</div>


				</div>

                </div>
                <div className="customLinkContainer">

                 
                <div className='customLinkItems'>
					<div className='profileDesc'>
						<span className='personalTxt'>Profile Details</span>
						<span className='description'>
							Add your details to create a personal touch to your profile.
						</span>
					</div>

					<div className='profilePicture'>
						<span className='profilelabel'>Profile Picture</span>
						<img
							className='profileImgSelect'
							src={profileImage}
							alt='Profile'
						/>
						<span className='imgNote'>
							Image must be below 1024x1024px.Use PNG, JPG or BMP format.
						</span>
					</div>
					<div className='userDetails'>
						<div className='input1'>
							<label className='fnameLbl' htmlFor='fname'>
								First name
							</label>
							<input
								type='text'
								className='fnameInput'
								name='fname'
								id='fname'
								value={firstName}
								onChange={event => setFirstName (event.target.value)}
								placeholder='First Name'
								required
							/>
						</div>

						<div className='input2'>
							<label className='lnameLbl' htmlFor='lname'>
								Last name
							</label>
							<input
								type='text'
								className='lnameInput'
								name='lname'
								id='lname'
								value={lastName}
								placeholder='Last Name'
								required
								onChange={event => setLastName (event.target.value)}
							/>
						</div>

						<div className='input3'>
							<label className='emailLbl' htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								className='emailInput'
								name='email'
								id='email'
								value={email}
								placeholder='Email'
								required
								onChange={event => setEmail (event.target.value)}
							/>
						</div>
					</div>
					
					<div className="button" >
					 <button onClick={postData} className="saveBtn">Save</button>
                     
                     </div>
                    
				</div>

                </div>
              </div>
		
	);
};

export default MobileLayout;
