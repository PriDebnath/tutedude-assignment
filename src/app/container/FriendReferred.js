import React from "react";
import Nav from "./Nav";
import arrowLeft from "../assets/images/Arrow 17.png"
import { useNavigate } from "react-router-dom";
const FriendReferred = () => {
  const navigate = useNavigate()
  const navigateToReferAndEarn = ()=>{
    navigate("/")
  }
  return (
    <div>
      <Nav />
      <p className="px-[35px] py-2 sm:px-[187px] text-sm  font-normal cursor-pointer" onClick={navigateToReferAndEarn}>
        UI/UX &gt; Refer & Earn UI/UX &gt; Friends Referred{" "}
      </p>
      <div className="flex px-[35px]  sm:px-[187px] items-center py-4 cursor-pointer" onClick={navigateToReferAndEarn}>
  <img src={arrowLeft} alt="" className="block pr-2 "/>    <p className="font-medium text-brand-purple">
       go back</p>
      </div>
   


      <div className="flex items-center  justify-between px-[35px] py-2 pb-16 sm:px-[187px] ">
        <div className="refferalCode flex flex-col  justify-center w-1/2   ">
          <p className=" py-2 font-semibold text-brand-purple">
            Your Referral Code{" "}
          </p>
          <div className="tracking-[0.75rem] text-center p-2 rounded-xl   text-brand-purple font-medium border-2   border-brand-purple sm:w-2/5">
            EDCH54
          </div>
        </div>
      
        <div className="balance shadow-xl shadow-[rgba(0, 0, 0, 0.1)]  flex flex-col justify-center rounded-2xl px-6 py-4">
          <p className="text-brand-purple text-sm">Wallet Balance</p>
          <p className="font-medium p-0">₹ 500</p>
        </div>
      </div>


      <h1 className="text-2xl font-semibold px-[35px] py-1 sm:px-[187px] text-brand-purple">Friends who Enrolled(3)</h1>








      <div className="card-con flex flex-wrap px-[35px] py-1 sm:pl-[187px] justify-center sm:justify-start text-white ">



        <div className="card w-[358px] bg-gradient-to-r from-brand-orange to-brand-purple rounded-2xl p-4 m-2">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold">Dhiroj saxsena</h3>
            <p className="text-sm">14 sep, 2022</p>
          </div>
          <h4 className="text-sm font-medium">Courses enrolled ( 6 )</h4>
          <div className="flex flex-wrap p-3 text-sm">
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            UI/UX
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            Photoshop
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            Illustrator
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">Python</p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            MERN
            </p>

            <p className="p-2 m-2 rounded-full border-2 border-brand-icon-grey text-white">Java</p>
            <p className="p-2 m-2 rounded-full border-2 border-brand-icon-grey text-white">C++</p>
          </div>

          <div className="flex  items-center">
            <h3 className="">Reffered Amount</h3>
            <p className="text-xl px-2 font-semibold">$ 157</p>
          </div>
        </div>


        <div className="card w-[358px] bg-gradient-to-r from-brand-orange to-brand-purple rounded-2xl p-4 m-2">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold">Subhash Mishra</h3>
            <p className="text-sm">15 sep, 2022</p>
          </div>
          <h4 className="text-sm font-medium">Courses enrolled ( 6 )</h4>
          <div className="flex flex-wrap p-3 text-sm">
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            UI/UX
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            Photoshop
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            Illustrator
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">Python</p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            MERN
            </p>

            <p className="p-2 m-2 rounded-full border-2 border-brand-icon-grey text-white">Java</p>
            <p className="p-2 m-2 rounded-full border-2 border-brand-icon-grey text-white">C++</p>
          </div>

          <div className="flex  items-center">
            <h3 className="">Reffered Amount</h3>
            <p className="text-xl px-2 font-semibold">₹485</p>
          </div>
        </div>  
        
        
         <div className="card  sm:w-[228px] w-[358px]  overflow-auto bg-gradient-to-r from-brand-orange to-brand-purple rounded-2xl p-4 m-2">
          <div className="flex justify-between items-center ">
            <h3 className="text-base font-bold">Prafull Kumar</h3>
            <p className="text-sm">16 sep, 2022</p>
          </div>
          <h4 className="text-sm font-medium">Courses enrolled ( 23 )</h4>
          <div className="overflow-auto">
          <div className="flex flex-wrap p-3 text-sm  w-[358px]">
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            UI/UX
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            Photoshop
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            Illustrator
            </p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">Python</p>
            <p className="p-2 rounded-full border-2 border-brand-icon-grey text-white m-2">
            MERN
            </p>

            <p className="p-2 m-2 rounded-full border-2 border-brand-icon-grey text-white">Java</p>
          
          </div>
          </div>
          <div className="flex  items-center">
            <h3 className="">Reffered Amount</h3>
            <p className="text-xl px-2 font-semibold">₹485</p>
          </div>
        </div>
      </div>

      <div className="px-[37px] py-8 sm:px-[187px]">
        <p className="text-brand-purple font-medium">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default FriendReferred;
