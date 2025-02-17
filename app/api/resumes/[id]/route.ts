import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import { Resume } from "../../../../models/Resume";

export async function GET({ params }: { params: { id: string } }) {
    console.log("api route hit")
    await connectMongo();

    try{
        const resume = await Resume.findById(params.id)
        if (!Resume) return  NextResponse.json({error:"resume not found"}, {status:404});

        return NextResponse.json(resume);
    }catch(error){
        return NextResponse.json({error: "failed to fetch resumes"}, {status:500})
    }
}

export async function Delete({params}:{params: {id: string}}) {
    
    await connectMongo()

    try{
        await Resume.findByIdAndDelete(params.id)
        return NextResponse.json({message:"Resume has been deleted"});
    }catch(error){
        return NextResponse.json({error: "resume could not be deleted"}, {status:500})
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    await connectMongo();

    try {
        const updatedData = await req.json(); 
        const updatedResume = await Resume.findByIdAndUpdate(params.id, updatedData, { new: true }); // ✅ Update the resume

        if (!updatedResume) {
            return NextResponse.json({ error: "Resume not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Resume successfully updated", resume: updatedResume });
    } catch (error) {
        return NextResponse.json({ error: "Resume could not be updated" }, { status: 500 });
    }
}