import MyStack from "./src/routes.js";
import RoutesAuth from "./src/tab.routes.js";

const isUserAuth = false;

export default function App() {
  
  return (
    <>
      {isUserAuth ? <RoutesAuth/> : <MyStack/>}
    </>
  );
}
