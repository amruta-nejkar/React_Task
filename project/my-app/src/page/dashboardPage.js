import {Counter,SelfCounter} from "../Component/index";
import { Header} from "../Module/index";
import { FormDialog } from "../page/index";
const DashboardPage=()=>{
    return(
        <div>
             <Header/>
             <Counter/> 
             <SelfCounter/>
             <h1>WelCome To Dashboard</h1>
             <FormDialog/>   
           </div>    
              
    );
}
export default DashboardPage;