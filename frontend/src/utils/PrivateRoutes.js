import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoutes = (props) => {
    const {userData} = useSelector(state => state.login);
    if(userData){
        return props.children
    } else {
        return <Navigate to="/" />
    }

}
 
export default PrivateRoutes;