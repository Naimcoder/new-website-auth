
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import LeftSide from '../LeftSide/LeftSide';


const Header = () => {
  const {user,logOut}=useContext(AuthContext)

  const signOut=()=>{
    logOut()
.then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand><Link to='/'> News-24</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Categorys</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            {
              user?.uid ?
              <>
               <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
               <button onClick={signOut}>LogOut</button>
              </>
              :
              <>
              <Link to='Login'>Login</Link>
              <Link to='register'>Register</Link>
              </>

            }
           
            <Nav.Link eventKey={2} href="#memes">
            {user?.photoURL?
             <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}>
             </Image>:<FaUser></FaUser>
            }
            
           
            </Nav.Link>
            <div className='d-lg-none'>
             <LeftSide></LeftSide>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;