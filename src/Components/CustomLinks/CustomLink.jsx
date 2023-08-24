// import React from "react";
import React, { useState } from "react";
import "./customLink.css";
import profileImage from "../../images/profileImage.jpg";
import Navbar from "../Navbar/Navbar";
// import profileImage from "../../images/profileImage.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { CiYoutube, CiLinkedin } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { LiaGripLinesSolid } from "react-icons/lia"




const CustomLink = () => {

	const options = [
		{label:'Git', value:'git'},
		{label:'YouTube', value:'youtube'},
		{label:'LinkedIn', value:'linkedin'},
	]
	const [selectedOption, setSelectedOption] = useState("");
	
	const handleTypeSelect = e => {
		setSelectedOption(e.target.value);
		console.log("handleTypeSelect", e)
	  };
const [count, setCount] = useState(0);

const addClick = () => {
	setCount(prev => prev + 1)

}
	  const [serviceList, setServiceList] = useState([
		{linkSelection: ""},]);

	const handleServiceAdd = () =>{
		setServiceList([...serviceList, {linkSelection: ""}])
	};

	const handleServiceRemove = (index) =>{
                const list = [...serviceList] 
				list.splice(index, 1)
				setServiceList(list)
				 
	}

	
	const sample =event => {
		handleServiceAdd();
		addClick();
	}

	return (
		<div className='CustomLink'>
			<Navbar />
			<div className='container'>
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

							<div className='nameContainer'>
								<span className='Name'>John Connor</span>

								<span className='userEmail'>test@gmail.com</span>
							</div>
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
				<div className='linkContainer'>
					<div className="linkItems">
					<div className='linkDesc'>
						<span className='linkTxt'>Customize your links</span>
						<span className='linkDescription'>
							Add/edit/remove links below and then share all your profiles with
							the world!
						</span>
					</div>

					{serviceList.length < 3 && <div className='addLink'>
						<button  onClick = {sample} className='addButton'>+ Add new link</button>
					</div>}
                  
					

{serviceList.map((singleService, index) => (

	<div key = {index} className="linkSelection">
                          
						  <div className="link1">
						  <span className="link1Span">
							<LiaGripLinesSolid className='linkIcon' /> Link # {index +1}
							</span>
{serviceList.length > 1 && <button onClick={handleServiceRemove} className="remove">Remove</button>}
							
							{/* <div className="linkButtonDesc">
							
							</div> */}
							
                      <div className="linkFields">
                       
					   <label htmlFor="" className="platform">Platform</label>
					   
					   <select className="selOptions" value={selectedOption} onChange={handleTypeSelect}>
						<option>GIT</option>
						<option>YouTube</option>
						<option>LinkedIn</option>
					   </select>

							  <label htmlFor="" className="lnkLabel">Link</label>
					   
					   <input className = "linkField" type="text" />
					  </div>

                               
						  </div>

					

				   </div>
))}

<div className="buttonLink">
					 <button className="saveLinkBtn">Save</button>
                     
                     </div>

					</div>
					
					

				</div>
			</div>
		</div>
	);
};

export default CustomLink;
