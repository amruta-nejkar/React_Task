import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Header} from "./Module";
import {AboutUsPage,DashboardPage} from './page';
const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="" element={<Header/>}/>   
        </Routes>
        <Routes>
            <Route exact path="" element={<DashboardPage/>}/>
        </Routes>
        <Routes>
            <Route exact path="/about" element={<AboutUsPage/>}/>   
        </Routes>


        </BrowserRouter>
    )
}
export default Router;