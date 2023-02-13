//import NotFound from "../components/Includes/NotFound";

//Components
import SignIn from '../components/pages/SignIn'
import SignUp from '../components/pages/SignIn/signup';
//import SignIn from '../components/signup'


const routes = [
    {
        path: "/",
        component: SignIn,
        protectedRoute: false,
    },
    {
        path: "/signup",
        component: SignUp,
        protectedRoute: false,
    },
    
     
]


export default routes;