import {
    SideBar, WorkoutGenerator
} from '../ui-components';
   
export default function() {
    return(
        <div>
            <div id="app-container" className="h-screen flex overflow-hidden bg-gray-100">
                <div className="flex flex-col w-64 bg-gray-300 shadow-md">
                    <SideBar />
                </div>
                <div className="flex-1 flex justify-center items-center overflow-auto">
                    <WorkoutGenerator />
                </div>
            </div>
        </div>
    )
}