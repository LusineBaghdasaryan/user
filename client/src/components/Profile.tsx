import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as actionTypes from '../redux/actionTypes';


const Profile= () => {
    const dispatch = useDispatch();

    const onExit = () => {
        localStorage.removeItem("userData");
        dispatch(({type: actionTypes.LOGOUT}));
    }
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                Welcome name surname!
                <Link to="/login" className='text-white'><Button onClick={onExit}>Exit</Button></Link>
            </div>

        </>
    );
}

export default Profile;
