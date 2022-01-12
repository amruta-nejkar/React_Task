// import Router from "./page/index";
// import { Button } from "./Component";
import { Button, Counter, SelfCounter } from "./Component";
import { Header } from "./Module";
import { LoginPage, ProfilePage } from "./page";
// import ProfilePage from "./page/profile";
import Router from "./Router";
const App=()=>{
  return(
    <>
      <Router/>
      <Counter/>
      <Button/>  
      <SelfCounter/>
    </>
  );
  
} 
export default App;
