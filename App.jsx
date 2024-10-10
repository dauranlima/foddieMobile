import MyStack from "./src/router/routes";
import RoutesAuth from "./src/router/routesAuth.routes";


const isUserAuth = true;

export default function App() {
  
  return (
    <>
      {isUserAuth ? <RoutesAuth/> : <MyStack/>}
    </>
  );
}
