import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterApp from './RouterApp'
import { AuthProvider } from './AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <RouterApp />
   </AuthProvider>,
)
