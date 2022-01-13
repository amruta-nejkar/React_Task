import {Counter,SelfCounter} from "../Component/index";
import { Header } from "../Module/index";

const DashboardPage=()=>{
    return(
        <div>
             <Header/>
             <Counter/> 
             <SelfCounter/>
           <h1>WelCome To Dashboard</h1></div>           
    );
}
export default DashboardPage;