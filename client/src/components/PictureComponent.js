import React from 'react';
import {Container, Card, Button } from 'react-bootstrap'
import "./style.css";



import { Link } from "react-router-dom";

export default function PictureComponent() {

  const fakeData = [
  {  
    id:"1",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"2",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"3",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"4",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"5",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"6",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"7",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"8",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"9",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:"10",
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },
  {  
    id:11,
    title:"Model",
    link:"https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    saved_time:"01/01/2000"
  },

  ]

  const render = ( (info) => {
    return(
      <Card style={{ width: "18rem" }} key={info.id} className="box">
      <Link to={`pictures/${info.id}`}>
        <Card.Img className="card-img-top" variant="top" src={info.link} />
      </Link>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Button className="Picture-button" variant="primary">Edit</Button>
        <Button className="Picture-button" variant="primary">Delete</Button>
        <Card.Text className="align-middle">Publication date: {info.saved_time}</Card.Text>
      </Card.Body>
    </Card>
    )
  })

  return (
    <Container className="p-3">
      <div className="grid">
      {fakeData.map(render)}
      </div>
    </Container>
  )
};