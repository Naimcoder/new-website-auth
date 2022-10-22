import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub, FaFacebook ,FaTwitter, FaTwitch, FaWhatsapp, FaYoutube} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Slider from '../../CategorySlider/Slider';
import { AuthContext } from '../Context/UserContext';
 
const RightSide = () => {
  const {createUser}=useContext(AuthContext)
  const signInGoogle=()=>{
createUser()
.then(result=>{
  const user =result.user
  console.log(user)
})
.catch(error=>console.error(error))
  }

    return (
  <div>
    <ButtonGroup vertical>
      <Button onClick={signInGoogle} className='mb-2'variant='outline-primary'
      ><FaGoogle></FaGoogle> Login With Google</Button>
      <Button className='mb-2 ml-2px' variant='outline-dark'> <FaGithub></FaGithub> Login With Github</Button>
    </ButtonGroup>
    <div>
    <ListGroup>
        <h5 className='my-2'>Fine Us On</h5>
      <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp>  WhatsApp</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaYoutube></FaYoutube>  youtube</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch>  Twitch</ListGroup.Item>
    </ListGroup>
    </div>
    <div>
        <Slider></Slider>
    </div>
</div>
    );
};

export default RightSide;