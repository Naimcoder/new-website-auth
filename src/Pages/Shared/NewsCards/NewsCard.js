import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaShareAlt,FaBookmark,FaEye,FaStar } from "react-icons/fa";

const NewsCard = ({news}) => {
    console.log(news)
    const {_id,title,author,total_view,details,image_url,rating}=news
    return (
        <div>
    <Card className="mb-5">
      <Card.Body>
           <Card.Header className='d-flex justify-content-between'>
            <div className='d-flex  align-items-center'>
                <Image 
                roundedCircle
                style={{height:'60px'}} 
                src={author?.img}>
                </Image>
                <div className='my-2 ms-2'>
                 <p className='m-0'>{author?.name}</p>
                 <p className='text-muted'>{author?.published_date}</p>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            <FaBookmark/>
             <FaShareAlt/>
            </div>
           </Card.Header>
        <Card.Title  className='my-4'>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length?
          <p>{details.slice(0,250)+'...'}<Link to={`/news/${_id}`}>Read More</Link></p>:<p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center'><FaStar></FaStar><span className='ms-2'>{rating.number}</span></div>
         <div><FaEye></FaEye><span className='ms-2'>{total_view}</span></div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;