import React, { useState } from 'react'


const App = () => {

let [show,setShow]=useState(false)
// const showing=()=>{
//   setShow(true)
// }

  return (
    <>
    <nav className='main_logo'>
    {/* logo deseing */}
     <div className='logo'> 
       <h2><span>UI DESING STIKY NAVBAAR</span> </h2>
     </div> 
    {/* second menu part */}
     <div className='menu-link'>
       <ul>
         <a href="#"> <li>home</li></a>
         <a href="#"> <li>about</li></a>
         <a href="#"> <li>service</li></a>
          <a href="#"> <li>contact</li></a>
       </ul>
     </div>
     {/* Social Media Links */}
     <div className='social-media'>
      <ul>
        <li><a href="#" class="fa fa-facebook"></a></li>
        <li><a href="#" class="fa fa-twitter"></a></li>
        <li><a href="#" class="fa fa-instagram"></a></li>
      </ul>
</div>
<div className='hamburger-menu' onClick={()=>setShow(!show) } ><i class="fa fa-bars" style={{fontSize:"36px"}}></i></div>
</nav>
{/* React field */}
{
  show?
<section className='hide-section'>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</section> :null
}



    {/* middle contant */}
    <section className='hero-section'>
    <h1>it's Totally Responsive Website</h1>
      <img src="https://4.imimg.com/data4/JY/TO/MY-24706966/20140217-laptop-internet-websites-500x500.jpg" alt="ulternati_image" />
    </section>
    </>
  )
}

export default App
