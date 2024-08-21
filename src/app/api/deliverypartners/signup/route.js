import {connectionStr} from "@/app/lib/db";
import mongoose from "mongoose";
import { deliveryPartnersSchema } from "../../../lib/deliverypartnersModel";
import { NextResponse } from "next/server";





export async function POST(request) {
    const payload = await request.json();
    let success=true;
    await mongoose.connection(connectionStr,{useNewUrlParser:true});
    const user=new deliveryPartnersSchema(payload);
    const result = await deliverypartners.save()
    if(result){
        success=true
    }
    return NextResponse.json({result,success})
}