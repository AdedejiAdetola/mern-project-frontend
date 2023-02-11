
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBarComponent/NavBar';
import Home from './components/HomeComponent/Home';
import Auth from './components/AuthComponent/Auth';

const App = () => {
    
    return ( 
        <BrowserRouter>
            <Container maxWidth='lg'>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/auth' exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
        
     );
}
 
export default App;