
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

import NavBar from './components/NavBarComponent/NavBar';
import Home from './components/HomeComponent/Home';
import Auth from './components/AuthComponent/Auth';

const App = () => {
    return ( 
        <BrowserRouter>
            <GoogleOAuthProvider clientId='40664766087-60f9eep4nvma5daqgfhmsnerpgikr00o.apps.googleusercontent.com'>
                <Container maxWidth='lg'>
                    <NavBar />
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/auth' exact element={<Auth />} />
                    </Routes>
                </Container>
            </GoogleOAuthProvider>
            
        </BrowserRouter>
        
     );
}
 
export default App;