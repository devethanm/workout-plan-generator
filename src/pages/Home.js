import { Auth } from 'aws-amplify';
import Amplify, { API } from 'aws-amplify';

import { useState, useEffect } from 'react';

import {
    SideBar, WorkoutGenerator, ProductCard
} from '../ui-components';

const apiName = "api8edc1cd0";
const apiPath = "/workout";
   
export default function() {
    // Create a state to store the user's workout choice
    const [userChoice, updateUserChoice] = useState('Arms'); // update the state to default choice 
    // Create a state to store the custom generated workout
    const [workout, updateWorkout] = useState('');
    // Create a state to store the user's username
    const [username, setUsername] = useState('');

    // Create a state to track whether the generated workout section is visible or not
    const [isVisible, setVisibility] = useState(false);
    const toggleVisibility = () => setVisibility(true);

    // useEffect to call updateWorkout when a user generates a workout
    async function getWorkout() {
        try {
            const generatedWorkout = await API.get(apiName, apiPath + "/" + userChoice);
            updateWorkout(generatedWorkout);
            toggleVisibility()
        }
        catch (error) {
            console.log(error);
        }
    }

    // useEffect to call getUserData when the component mounts
    useEffect(() => {
        async function getUserData() {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setUsername(user.username);
            }
            catch (error) {
                console.log(error);
            }
        }
        getUserData();
    }, []); // The empty array as the second argument ensures this effect only runs once

    return(
        <div>
            <div id="app-container" className="h-screen flex overflow-hidden bg-gray-100">
                <div className="hidden flex-col w-64 bg-gray-300 shadow-md xl:flex ">
                    <SideBar 
                        overrides={{
                            "icon38673800": {
                                class: "ring-2 shadow-lg animate-pulse"
                            },
                        }}
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center overflow-auto space-y-10">
                    <div className="absolute top-0 ">
                        <h1 className="">Signed in as user: {username}</h1>
                        <button className='bg-blue-300' 
                            onClick={() => Auth.signOut()}
                        >Sign Out</button>
                    </div>
                    <div className="shadow-md">
                        <WorkoutGenerator
                            overrides={{ // overrides object used to modify the object's sub components
                                SelectField: {
                                    options: ["Arms", "Legs", "Back"],
                                    onChange: (e) => updateUserChoice(e.target.value),
                                }, // override default 
                                // on click generates a workout for the user based on their user information
                                Button: {onClick: () => getWorkout(),},
                            }} 
                        />
                    </div>
                    <div className={`shadow-md max-w-screen ${isVisible ? '' : 'hidden'}`} id="generated">
                        <h1 className="text-4xl mb-2"> Here is your generated workout:</h1>
                        <ProductCard 
                            overrides={{
                                image: {
                                    src: workout.image, 
                                    class: "animate-[spin_5s_ease-in-out_infinite] mx-20",
                                    width: 300,
                                    height: 300,
                                },
                                "Classic Long Sleeve T-Shirt": {
                                    children: workout.type + " Workout"
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}