import React, { useEffect, useState }  from 'react'
import './preview.css'
import MobileLayout from '../MobileLayout/MobileLayout';
import profileImage from "../../images/profileImage.jpg";
import { AiOutlineGithub } from 'react-icons/ai'
import { CiYoutube , CiLinkedin } from 'react-icons/ci'
// import profileImage from "../../images/profileImage.jpg";
import { API_URL } from '../../Constants/URL'
import axios from 'axios'
import { BsArrowRightShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Preview = () => {

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
   

   const [apiData, setApiData] = useState ([]);

   const callGetApi = async () => {
          const res =   await axios.get(API_URL); 
          setApiData(res.data)
          console.log(apiData)
   }

   useEffect (() => {
       callGetApi();
   }, []);

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/profile')
    }
  return (
   
            
        <div className="previewContainer">



           <div className="previewItems">

               <div className="linkNavigate">
             
                 <button  onClick={goBack} className="backToEditor">Back to Editor</button>
                 <button className="share">Share Link</button>

               </div>
              
              
               
           </div>
                 

           <div className="mobilePrevContainer">
                 
                 <div className='mobItems'>
                     <div className='custPrevInfo'>
                         <div className='imgContainer'>
                             <img className='profileImg'  src={profileImage} alt="Profile" height={300} width={400} />
                         </div>
 {apiData.map(data => (
    <div key ={data.id} className='nameContainer'>
               <span className="Name">{data.firstName} {data.lastName}</span>
              
               <span className="userEmail">{data.email}</span>
             </div>

 ))}
                         
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
        

        </div>
                 



                

   
  )
}

export default Preview