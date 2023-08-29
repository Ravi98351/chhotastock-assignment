import React from 'react';
import './nav.css'
import NavCard from './NavCard';

const Nav = () => {
    const investmentArray = [
        {
            imaLink :"https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2023/02/Mutual-Fund-Knowledge-Base.jpg",
            heading :"Mutual Funds",
            desciption:"E2E infrastructure for mutual fund investing",
        },
        {
            imaLink :"https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2023/02/Mutual-Fund-Knowledge-Base.jpg",
            heading :"Indian Equity",
            desciption:"Ready-made stock baskets with major broker integrations",
        },
        {
            imaLink :"https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2023/02/Mutual-Fund-Knowledge-Base.jpg",
            heading :"Digital Gold",
            desciption:"Allo your user to buy & sell degigtal Gold",
        },
        {
            imaLink :"https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2023/02/Mutual-Fund-Knowledge-Base.jpg",
            heading :"Fixed Deposits",
            desciption:"Book FDs in one-click without opening a bank account",
        },
    ] ;
    const dataArray = [
        {
            imaLink :"https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2023/02/Mutual-Fund-Knowledge-Base.jpg",
            heading :"Market Research",
            desciption:"Deep-tech stock research & analysis",
        },
        {
            imaLink :"https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2023/02/Mutual-Fund-Knowledge-Base.jpg",
            heading :"Historical Performance",
            desciption:"Multi timeframe historical data for stocks mutual funds & digital gold",
        },
    ]
  return (
    <>
    <div className="navContainer">
        <div className="investContainer">
            <div className="topHeading">INVESTMENT</div>
            <div className="cards">

                {
                    investmentArray?.map(el => <NavCard imgLink={el.imaLink} heading={el.heading}  description={el.desciption}  />)
                }
            </div>
        </div>
        <div className="dataContainer">
            <div className="topHeading">DATA</div>
            <div className="cards">
                {
                    dataArray?.map(el => <NavCard imgLink={el.imaLink} heading={el.heading}  description={el.desciption}  />)
                }

            </div>

        </div>
    </div>
    
    
    </>
  )
}

export default Nav


