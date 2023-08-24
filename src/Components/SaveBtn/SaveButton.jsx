import React, { useState }  from 'react'
import { API_URL } from '../../Constants/URL'
import axios from 'axios'


const SaveButton = () => {


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
    <div className="button">
					 <button onClick={postData} className="saveBtn">Save</button>
                     
                     </div>
  )
}

export default SaveButton