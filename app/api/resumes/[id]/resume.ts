import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import { Resume } from "../../../../models/Resume";

export async function GET(){

    await connectMongo();

    try{
        const resumes = await Resume.find();
        return NextResponse.json(resumes);
    } catch(error){
        return  NextResponse.json({error:"failed to fetch resumes"}, {status:500});
    }
}

export async function POST(req:Request) {
    await connectMongo();

    try{
        const data = await req.json();
        const newResume = await Resume.create(data);
        return NextResponse.json({message:"resume is saved", resume: newResume});
    } catch(error){
        return NextResponse.json({error:"failed to save resume", status:500});
    }
}




