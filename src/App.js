
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileLayout from './Components/MobileLayout/MobileLayout';
import Home from './Home';
import CustomLink from './Components/CustomLinks/CustomLink';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import Preview from './Components/Preview/Preview';

function App() {
  return (
    <div>
     
   

    <BrowserRouter>
				<Routes>
            <Route exact path = "/" element = {<Home/>} />
            <Route exact path = "/home" element = {<Home/>} />
            <Route exact path = "/customeLinks" element = {<CustomLink/>} />
            <Route exact path = "/profile" element = {<ProfileDetails/>} />
            <Route exact path = "/preview" element = {<Preview/>} />
            
        
        </Routes>
			</BrowserRouter>
 
    </div>
  );
}



export default App;
