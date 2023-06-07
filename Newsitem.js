import React, { Component } from 'react'

export class Newsitem extends Component {
 
  render() {
    let {title,description,imageUrl,newsurl} = this.props
    return (
      <>
      <div className="card" style={{width: "22rem",backgroundColor: "#CBF4FE"}}>
  <img src={imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="__blank" className="btn btn-success btn-sm">Read More...</a>
  </div>
</div>
</>
    )
  }
}

export default Newsitem
