import React from 'react'
import "../css/Page2.css"
import P1comp2 from '../Componens/P1component/P1box2'
import P2box1 from '../Componens/P2components/P2box1'
import Footer from '../Componens/P1component/Footer'
import Nav from '../Componens/navbar/Nav'
export default function Page2() {
  return (
    <div>
     <div className='nav'>
      <div className='navbox1'>
        <h1>InvestPe</h1>
        <button className='navbutton'>Gateway</button>
      </div>
      <div className='navbox1'>
        <div className='navProducts'>
        <h1 className='page2nav' >Product</h1>
        <div className='productNavShow' >
          <Nav/>
        </div>

        </div>
        <h1  >AboutUs</h1>
        
      </div>
      </div>   

      <div className='boxx1'>
        <div className='boxx11'>
          <h1>INVESTMENT STACK</h1>
          <h2>for India</h2>
          <p>Elevate Your Investment Strategy with our <span className='span'>Comprehensiv API's</span> </p>
        </div>
        <div className='boxx12'>
          <p>Launch Financial Services in a matter of Days. Take your pick from our flexible API's SDK's, or ready-to-use screens.</p>
          <br/>
          <button>Contact Us</button>
        </div>
       
        </div>  






        <div className='boxx2'>
      <div className='boxx22'>
        <h3 className='bo22h1'>FEATURES</h3>
        <h1 className='bo22h2'>Launch the most Engaging<br/>Invest-Tech Solution</h1>
        <p className='bo22h3'>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexiblity on your side. </p>
         <br/>
         <button className='button2'>Get Started</button>     
      </div>
      <div className='boxx22'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Nc-vu6jbV61iXQxOZidsDyqcu6l16AXNgA&usqp=CAU"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPrx_FQv4Z-4NDZCZv3zWl12jQ5wHz_Y5dg&usqp=CAU"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Nc-vu6jbV61iXQxOZidsDyqcu6l16AXNgA&usqp=CAU"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Nc-vu6jbV61iXQxOZidsDyqcu6l16AXNgA&usqp=CAU"/>
        
      
      </div>
</div>


<div className='boxx3'>
  <h1>Connect your platform finance now<br/> with InvestPe Gateway</h1>
  <p>We help broker, wealth managers, fund managers & other <br/> bussiness / startup server their customers better with our suite of modern digital investment stack</p>
  
  <button>Try Investpe Now</button>
</div>

<div className='boxx4'>
  <p>SOLUTION</p>
  <h1>Stay ahead with our Wealth-tech as a service</h1>
</div>
<hr/>
<P1comp2/>

<hr/>
<br/>
<br/>
<br/>

<div className='contact'>
  <h1>How would you like to work with us</h1>
  <p>Tell us more about yourself , and we'ii reach out to you as soon as possible.</p>
<div className='form'>
  <div className='fom'>

    <p>work email</p>
    <input className='inputbox'></input>

    <p>Company Name</p>
    <input className='inputbox'></input>
   
    <p>Mobile Number</p>
    
    <input className='inputbox'></input>
    <br/>
  </div>
  <div>
    <h1>Which Product You are intrested in ?</h1>
    <div className='intrest'>
      <P2box1 h2="Mutual Funds" p="E2E infrastructure for mutual fund investing"/>
      <P2box1 h2="Indian Equity" p="Stock getway & stock baskets"/>
      <P2box1 h2="Digital Gold" p="Buy & Sell digital gold hassle free"/>
      <P2box1 h2="Fixed Deposits" p="Book FDs in 1click w/o opening a bank ac"/>
    </div>
  </div>
</div>
<button className='submit'>SUBMIT</button>
</div>
 

<Footer/>






    </div>
  )
}


