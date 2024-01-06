// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import LoginPage from './user/pages/LoginPage';
import PrivateRoute from './user/utils/PrivateRoute';
import { AuthProvider } from './user/context/AuthContext';
import RegisterPage from './user/pages/RegisterPage';
import Footer from './components/Footer'

function App() {

 return (

    <Router>
        <AuthProvider>
      <Header />
      
   <Routes>  

    <Route path="/" element={
    <PrivateRoute>
      <Shop/>
    </PrivateRoute>
    
   } />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        </AuthProvider>
        <Footer/>
     </Router>
     
  );  
}

export default App;
