import { Auth } from 'aws-amplify';

import { useState, useEffect } from 'react';

import {
    SideBar, WorkoutGenerator
} from '../ui-components';
   
export default function() {
    // Create a state to store the user's username
    const [username, setUsername] = useState('');

    // useEffect to call getUserData when the component mounts
    useEffect(() => {
        async function getUserData() {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setUsername(user.username);
            }
            catch (error) {
                console.log('An error has occurred when getting user data')
            }
        }
        getUserData();
    }, []); // The empty array as the second argument ensures this effect only runs once

    return(
        <div>
            <div id="app-container" className="h-screen flex overflow-hidden bg-gray-100">
                <div className="hidden flex-col w-64 bg-gray-300 shadow-md xl:flex ">
                    <SideBar />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center overflow-auto">
                    <h1 className="absolute top-0">Signed in as user: {username}</h1>
                    <WorkoutGenerator
                        overrides={{ // overrides object used to modify the object's sub components
                            SelectField: {options: ["Arms", "Legs", "Back"]} // override default 
                        }} 
                    />
                </div>
            </div>
        </div>
    )
}