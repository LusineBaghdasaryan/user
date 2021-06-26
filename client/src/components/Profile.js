import React, {useEffect} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from '../redux/actionTypes';
import {getUser} from '../redux/actions'


function Profile() {
    const dispatch = useDispatch();
    
    
    // const {userId,name,surname} = useSelector(state => state);
    
    // useEffect(()=>{
    //     dispatch(getUser(userId))
    // },[userId])
    //
    
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
