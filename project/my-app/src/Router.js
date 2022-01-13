import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Header} from "./Module";
import {AboutUsPage,DashboardPage, LoginPage, ProfilePage} from './page';
const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/header" element={<Header/>}/> 
            <Route exact path="" element={<DashboardPage/>}/>
            <Route exact path="/about" element={<AboutUsPage/>}/>  
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} /> 
            
        </Routes>
        </BrowserRouter>
    )
}
export default Router;