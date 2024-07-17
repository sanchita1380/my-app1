import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

import mongoose from "mongoose";
import { NextResponse } from "next/server";




 


export async function GET() {
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
   


   const data= await restaurantSchema.find()
    console.log(data);

  return NextResponse.json({result:data})
}

export async function POST(request){
  let payload= await request.json();
  let result;
  await mongoose.connect(connectionStr,{useNewUrlParser:true})
  if(payload.login){
    //use it for login api
  }else{
    // use it for signup
    const restaurant = new restaurantSchema(payload)
     result = await restaurant.save();
  }
 
  
  console.log(payload);
  return NextResponse.json({result,success:true})
}
