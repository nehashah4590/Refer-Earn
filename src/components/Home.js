import React from 'react'
import "./Home.css";
import contacts from "./images/contacts.png";
import discount from "./images/discount.png";
import wallet from "./images/wallet.png";
import money from "./images/money.png";
import offers from "./images/offers.png";


function Home() {
  return(
    <div className='main'>
        <div className='box'>
          <div className='box1'>
            <table>
              <tr >
              <td className='fontsize'>Referral Earning</td>
              <td className='fontsize'>Total Referrals</td>
              <td className='fontsize'>Wallet Balance</td>
              </tr>
              <tr>
              <td  className="num">&#8377;2,500</td>
              <td  className="num">7 </td>
              <td  className="num"> &#8377;500</td>
              </tr>
            </table>
            <button className='withdrawbtn'>Withdraw Balance</button>
          </div>
          <div className='box2'>
            <p>Your Referral Code</p>
            <div className='code'>EDCH54</div>
          </div>
        </div>  
  
        <div className='grid-container'>
          <div className="grid0">
          <h2 >How does it works?</h2>
          </div>
            <div className="element grid1">
              <img src={contacts} alt="contacts"></img>
            <h4>Invite your Friends</h4>
            <p>Share the link tutedude.com with your friends</p>
            </div>
            <div className="element grid2">
              <img src={money} alt="rupeeicon"></img>
            <h4>You get &#8377;200 as referral money</h4>
            <p>On total purchase the friend makes, into your wallet</p>
            </div>
            <div className="element grid3">
              <img src={wallet} alt="walleticon"></img>
            <h4>Transfer money from wallet</h4>
            <p>When the wallet balance reaches $200 or more, you can withdraw it</p>
            </div>
            <div className="element grid4">
              <img src={offers} alt="offers"></img>
            <h4> Friends purchases any course</h4>
            <p>Using your REFERAL CODE in the payments page</p>
            </div>
            <div className="element grid5">
              <img src={discount} alt="discount"></img>
            <h4> your Friend gets $200 Off</h4>
            <p>On his overall fee on successful purchase using your referral code</p>
            </div>
  
          </div>        
      </div>     
  )
  }


export default Home
