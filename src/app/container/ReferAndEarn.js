import React from "react";
import Nav from "./Nav";
import peopleIcon from "../assets/images/people-icon.png";
import percentageIcon from "../assets/images/percentage-icon.png";
import tokenIcon from "../assets/images/token-icon.png";
import walletIcon from "../assets/images/wallet-icon.png";
import rupeeIcon from "../assets/images/rupee-icon.png";

import { Link } from "react-router-dom"

const ReferAndEarn = () => {
  return (
    <div>
      {" "}
      <Nav />
      <p className="px-[35px] py-4 sm:px-[187px] text-sm  font-normal">UI/UX &gt; Refer & Earn </p>
      <div className="px-[37px] sm:px-[187px] py-10 flex flex-wrap ">
        <div className="balence sm:w-1/2 flex flex-wrap  justify-between items-center p-6 shadow-xl shadow-[rgba(0, 0, 0, 0.1)] rounded-2xl">
          <div className="refferalEaring w-1/2  sm:w-1/3">
            <p className="text-sm text-brand-purple">Referral Earning</p>
            <div className="big-font text-[32px]  font-medium">₹ 2,500</div>
          </div>
          <div className="Total-Referrals w-1/2 sm:w-1/3">
            <p className="text-sm text-brand-purple">Total Referrals</p>
            <div className="big-font text-[32px]  font-medium">7</div>
          </div>{" "}
          <div className="Wallet-Balance w-1/2 sm:w-1/3">
            <p className="text-sm text-brand-purple">Wallet Balance</p>
            <div className="big-font text-[32px]  font-medium">₹ 500</div>
          </div>
          <div className="Withdraw-Balance rounded-full p-2 bg-brand-purple text-white   m-auto">
            Withdraw Balance
          </div>
        </div>
        <div className="refferalCode flex flex-col  justify-center sm:w-1/2 sm:px-12  my-[30px] w-full">
          <p className="text-2xl py-2 font-semibold text-brand-purple">
            Your Referral Code{" "}
          </p>
          <div className="tracking-[1rem] text-center px-2 py-3 text-xl rounded-xl   text-brand-purple font-medium border-2   border-brand-purple sm:w-3/4">
            EDCH54
          </div>
        </div>
      </div>
      <h1 className=" px-[34px] sm:px-[187px] text-brand-purple font-bold text-2xl">
        How does it work ?
      </h1>






      <div className="sm:px-[187px] p-4 grid sm:grid-cols-2">


        <div className="flex  p-2">
          <div className="min-w-[65px] h-[65px] flex mr-6">
            <img
              className="rounded-full bg-brand-icon-grey w-full  p-4 py-6"
              src={peopleIcon}
            />
          </div>
          <div className="texts  ">
            <p className="font-medium">Invite your Friends</p>
            <p className="text-brand-text-grey ">
              Share the link tutedude.com with your friends
            </p>
          </div>
        </div>

        <div className="flex  p-2">
          <div className="min-w-[65px] h-[65px] flex mr-6 ">
            <img
              className="rounded-full bg-brand-icon-grey w-full p-4"
              src={tokenIcon}
              alt=""
            />
          </div>
          <div className="texts">
            <p className="font-medium">Friend purchases any course</p>
            <p className="text-brand-text-grey ">
              Using your REFERRAL CODE in the payments page
            </p>
          </div>
        </div>

        <div className="flex  p-2">
          <div className="min-w-[65px] h-[65px] flex mr-6">
            <img
              className="rounded-full bg-brand-icon-grey w-full  px-4 py-4"
              src={rupeeIcon}
              alt=""
            />
          </div>
          <div className="texts ">
            <p className="font-medium">You get ₹ 200 as referral money</p>
            <p className="text-brand-text-grey ">
              On total purchase the friend makes, into your wallet
            </p>
          </div>
        </div>

        <div className="flex p-2">
          <div className="min-w-[65px] sm:w-[65px] h-[65px]    flex mr-6 ">
            <img
              className="rounded-full bg-brand-icon-grey w-full   p-4 "
              src={walletIcon} 
              alt=""
            />
          </div>
          <div className="texts ">
            <p className="font-medium">Transfer money from wallet</p>
            <p className="text-brand-text-grey ">
              When the wallet balance reaches ₹200 or more, you can withdraw it
            </p>
          </div>
        </div>

        <div className="flex items-center    p-2 ">
          <div className="min-w-[65px] h-[65px] flex mr-6">
            <img
              className="rounded-full bg-brand-icon-grey w-full p-4"
              src={percentageIcon}
              alt=""
            />
          </div>
          <div className="texts  ">
            <p className="font-medium">Your Friend gets ₹ 200 Off </p>
            <p className="text-brand-text-grey ">
              On his overall fee on successful purchase using your referral code
            </p>
          </div>
        </div>
      </div>
      <div className="px-[37px] py-2 sm:px-[187px]">
        <Link to={"/referred-friends"}  className="text-brand-purple font-medium py-4">
          Friends Who Enrolled
        </Link>
        <p className="text-brand-purple font-medium py-4">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default ReferAndEarn;
