import MobileLayout from "./Components/MobileLayout/MobileLayout";
import Navbar from "./Components/Navbar/Navbar";
import React, { useEffect, useState }  from 'react'
import "./Home.css";
import profileImage from "./images/profileImage.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { CiYoutube, CiLinkedin } from "react-icons/ci";
// import profileImage from "../../images/profileImage.jpg";
import { API_URL } from "./Constants/URL";
import axios from "axios";
import { BsArrowRightShort } from "react-icons/bs";

const Home = () => {

	const [apiData, setApiData] = useState ([]);

	const callGetApi = async () => {
		   const res =   await axios.get(API_URL); 
		   setApiData(res.data)
		   console.log(res.data)
	}
 
	useEffect (() => {
		callGetApi();
	}, []);

	return (
		<div>
			<Navbar />
			{/* <MobileLayout/> */}

			{/* adding the customer container  */}

			

<div  className="container">
<div className='mobileContainer'>
	<div className='mobItems'>
		<div className='custInfo'>
			<div className='imgContainer'>
				<img
					className='profileImg'
					src={profileImage}
					alt='Profile'
					height={300}
					width={400}
				/>
			</div>
			{apiData.map(data => (
			<div key={data.id} className='nameContainer'>
				<span className='Name'>
					{data.firstName} {data.lastName}
				</span>

				<span className='userEmail'>{data.email}</span>
			</div>  ))}
			<div className='linkButtons'>
				<div className='gitBtnDiv'>
					<AiOutlineGithub className='gitIcon' />
					<button className='git'>GitHub</button>
					<BsArrowRightShort className='rightArrowGit' />
				</div>
				<div className='ytBtnDiv'>
					<CiYoutube className='ytIcon' />
					<button className='ytube'>YouTube</button>
					<BsArrowRightShort className='rightArrowYoutube' />
				</div>
				<div className='linBtnDiv'>
					<CiLinkedin className='linIcon' />
					<button className='linBtn'>LinkedIn</button>
					<BsArrowRightShort className='rightArrowlinkedIn' />
				</div>
			</div>
		</div>
	</div>
</div>

<div className='customLinkContainer'>
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
	{apiData.map(data => (
		<div  key={data.id} className='userDetails'>
			<div className='input1'>
				<label className='fnameLbl' htmlFor='fname'>
					First name
				</label>
				<input
					type='text'
					className='fnameInput'
					name='fname'
					id='fname'
					value={data.firstName}
					placeholder='First Name' readonly
					
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
					value={data.lastName}
					placeholder='Last Name' readonly
					
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
					value={data.email}
					placeholder='Email' readonly
					
				/>
			</div>
		</div>


	))}
		
	</div>
</div>

</div>

			
           
			
		</div>
	);
};

export default Home;
