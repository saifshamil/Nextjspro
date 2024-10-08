
'use client'

import Card from "./components/Card";

import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter ()
  return (
   <div>
   <h1 className="bg-yellow-300 text-blue-500 font-extrabold text-9xl pl-[650px] pt-48">Home</h1>
<div className="p-32">
   <button onClick={()=>route.push('./About')} className="bg-orange-400 rounded p-4 m-4 text-3xl font-extrabold text-red-500 ">About</button>


   <button onClick={()=>route.push('./contactus')} className="bg-orange-400 rounded p-4 m-4 text-3xl font-extrabold text-red-500 ">Contact Us</button>

   <button onClick={()=>route.push('./services')} className="bg-orange-400 rounded p-4 m-4 text-3xl font-extrabold text-red-500 ">Services</button>
   </div>

   <Card Name= 'Shariq' RollNo= {11111} Day='Mon'/><br />
   <Card Name= "Danish" RollNo= {2222} Day='tue'/><br />
   <Card Name= "Rashid" RollNo= {3333} Day="sat"/><br />
   

   </div>
  );
}
