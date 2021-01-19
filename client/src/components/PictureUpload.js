import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'

import './style.css'

export default class PictureUpload extends Component {
  
  state = {
    uploading: false,
    images: []
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }
  
  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`/pictures/aws`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
  }
  

  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange}/>
      }
    }

    return (
      <div>
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}