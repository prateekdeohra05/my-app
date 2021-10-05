import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg my-0 ">
  <div className="container-fluid">
     <h3 className={`appName text-${props.mode==='light'?'dark':'light'}`}><span><img className="faviconInTitle" src="apple-touch-icon.png" alt="" /></span>{props.title}</h3>
    <button className="navbar-toggler navbar-light bg-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className={`homePageBtn nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" onClick={props.homePage}>Home</button>
        </li>
        <li className="nav-item">
          <button className={` aboutPageBtn nav-link active text-${props.mode==='light'?'dark':'light'} `} onClick={props.aboutPage}>About</button>
        </li>
      </ul>

<div className='colorContainer'>
<div className="colorBox black" onClick={props.back_black}></div>
<div className="colorBox blue" onClick={props.back_blue} ></div>
<div className="colorBox red" onClick={props.back_red}></div>
<div className="colorBox green" onClick={props.back_green}></div>
<div className="colorBox yellow" onClick={props.back_yellow}></div>
<div className="colorBox white" onClick={props.back_white}></div>
</div>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired};
Navbar.defaultProps = {
    title : 'Set Titile Here'
}
