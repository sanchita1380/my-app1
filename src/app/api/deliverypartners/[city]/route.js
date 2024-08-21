import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {connectionStr} from "@/app/lib/db";
import {deliveryPartnerSchema} from "@/app/lib/deliverypartnersModel";

export async function GET (request,content){
    let city = content.params.city
    let success=false;
    await mongoose.connection(connectionStr,{useNewUrlParser:true});
    let filter = {city:{$regex:new RegExp(city,'i')}}
    const result = await deliveryPartnerSchema.find(filter)
  return NextResponse.json({result})
}