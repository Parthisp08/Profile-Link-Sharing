import React from "react";
import { BsLink } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";
import "./navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  

	//navigation 

	const navHome = useNavigate();

	return (
		<div className='navbar'>
			<div className='navContainer'>
				<div  onClick={()=> navHome('/home')} className='logo'>
					<BsLink className='logoIcon' />
					<span>Parthi Dev links</span>
				</div>
				<div onClick={()=> navHome('/customeLinks')} className='link '>
					<BiLink className='linkIcon  ' />
					<button className='linksBtn  '>Links</button>
				</div>
				<div onClick={()=> navHome('/profile')} className='profile'>
					<CgProfile className='profileIcon' />
					<button className='proDetailsBtn'>Profile Details</button>
				</div>
				<div onClick={()=> navHome('/preview')} className='preview'>
					<AiOutlineEye className='previewIcon' />
					<button className='previewBtn'>Preview</button>
				</div>
			</div>

		
		</div>
	);
};

export default Navbar;
