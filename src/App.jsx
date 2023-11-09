import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignUpComponent/SignUpComponent';
import UserDataComponent from './components/UserDataComponent/UserDataComponent';


const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                    <div className='container'> 
                        <Link className='navbar-brand' to={'/login'}>
                            Saveetha | MERN
                        </Link>
                        <div className='collapse navbar-collapse' id='navbarTogglerDemo2'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/login'}>Login</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/signup'}>Sign Up</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>

                    <div className='auth-wrapper'>
                        <div className='auth-inner'>
                            <Routes>
                                <Route exact path='/' element={<LoginComponent/>}/>
                                <Route path='/login' element={<LoginComponent/>}/>
                                <Route path='/signup' element={<SignupComponent/>}/>
                                <Route path='/userdata' element={<UserDataComponent/>}/>
                            </Routes>
                        </div>
                    </div>
                
            </div>
        </Router>
    );
}

export default App;