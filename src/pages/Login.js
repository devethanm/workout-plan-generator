import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom'; // page navigation

import {
    LoginFrame 
   } from '../ui-components';

export default function() {
    const navigate = useNavigate();



    return(
        <div>
            <div className="h-screen flex justify-center overflow-hidden bg-gray-100">
                <LoginFrame
                    overrides={{
                        Button38561052: { onClick: () => navigate('/home')}
                    }}
                />
            </div>
        </div>
    )
}