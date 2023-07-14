import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = props =>{ 
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/booking` 
        navigate(path); 
    }
    return(
        <>  

            <div className='main-div'>
                <h1>You aren't just welcome here, you belong here</h1>
            </div>
            
        </>
    )
}
export default Home