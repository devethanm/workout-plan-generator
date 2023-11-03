import {
    SideBar, WorkoutGenerator
} from '../ui-components';
   
export default function() {
    return(
        <div>
            <div id="app-container" className="h-screen flex overflow-hidden bg-gray-100">
                <div className="hidden flex-col w-64 bg-gray-300 shadow-md xl:flex ">
                    <SideBar />
                </div>
                <div className="flex-1 flex justify-center items-center overflow-auto">
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