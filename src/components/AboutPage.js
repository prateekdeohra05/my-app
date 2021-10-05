import React from 'react'


export default function AboutPage(props) {




    return (
        <>
        <div className={`aboutPageContainer text-${props.mode==='light'?'dark':'light'}`}>
          <ul style={{listStyleType:'square', fontSize:'20px',fontFamily:'cursive'}}>
    <li> <p className="mx-2"> <span style={{fontSize:'40px'}}>Recorrectext</span> is a TextUtility which tells you about number of Words and Characters in your Text. Additionally, it also tells about approximate time to read the Text.</p></li>
    <li><p className="mx-2">Here you can also change Case of your Text like UpperCase to LowerCase and LowerCase to UpperCase.</p></li>
    <li><p className="mx-2">You can also Capitalise Words and Sentences in your Text.</p></li>
     </ul>
        
        <div className='my-5 mx-5'>
        <a  className={`text-${props.mode==='light'?'dark':'light'}`} href="https://docs.google.com/forms/d/e/1FAIpQLSfmchAlbg1s7Sofcdqn9r6J9Z8N5hLzH-XQOaCVAznYJcftng/viewform?usp=sf_link">Submit any complaint/suggestion here.</a> <span className={`text-${props.mode==='light'?'dark':'light'}`}>It will help me in improving this web application.</span>
        </div>
        </div>
        </>
    )
}
