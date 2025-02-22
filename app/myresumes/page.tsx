'use client'
import { PersonalForm, EducationForm, ResumeData } from "@/types/ResumeTypes";
import { useState, useEffect } from "react";
import { Resume } from "../../models/Resume";
import SkillsForm from "../components/SkillsForm";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'


export default function MyResumesPage() {
    const [data, setData] = useState<ResumeData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isEdit, setIsEdit] = useState(false)

    const router= useRouter();

    useEffect(()=>{
        fetch('/api/resumes')
        .then((res)=> res.json())
        .then((data)=>{
            console.log("Fetched data:", data);
            setData(data)
            setIsLoading(false)
        })
    },[])

    if (isLoading) return <p>Loading...</p>
    if(!data) return <p>no resume</p>
    
    console.log("EducationForm data:", data?.EducationForm);

    return (
        
        <div className="text-center">
            
            <p>{data.SummaryForm}</p>

            {data.PersonalForm ? (
        <div className="border p-2 rounded">
            <p><strong>Full Name:</strong> {data.PersonalForm.firstName} {data.PersonalForm.lastName}</p>
            <p><strong>Job Title:</strong> {data.PersonalForm.jobTitle}</p>
            <p><strong>Location:</strong> {data.PersonalForm.city}, {data.PersonalForm.country}</p>
            <p><strong>Phone:</strong> {data.PersonalForm.phoneNumber}</p>
            <p><strong>Email:</strong> {data.PersonalForm.email}</p>
        </div>
    ) : (
        <p className="text-gray-500">No personal details provided.</p>
    )}
          
            {data?.EducationForm?.length > 0 ?(
                data.EducationForm.map((education,index)=>(
                    <div key={index} className="mb-4">
                        <p><strong>Schoolname:</strong>{education.schoolName}</p>
                        <p><strong>degree:</strong>{education.degree}</p>
                        <p><strong>field of study:</strong>{education.fieldOfStudy}</p>
                        <p><strong>start date:</strong>{education.startDate}</p>
                        <p><strong>end date:</strong>{education.endDate}</p>
                        <p><strong>description:</strong>{education.description}</p>
                    </div>
                ))
            ) :( <p>no education</p>
            )}
             {data?.WorkExperienceForm?.length > 0 ?(
                data.WorkExperienceForm.map((work,index)=>(
                    <div key={index} className="mb-4">
                        <p><strong>jobTitle:</strong>{work.jobTitle}</p>
                        <p><strong>company:</strong>{work.company}</p>
                        <p><strong>start date:</strong>{work.startDate}</p>
                        <p><strong>end date:</strong>{work.endDate}</p>
                        <p><strong>description:</strong>{work.description}</p>
                    </div>
                ))
            ) :( <p>no Work Experience</p>
            )}
             {data?.SkillsForm?.length > 0 ?(
                data.SkillsForm.map((skills,index)=>(
                    <div key={index} className="mb-4">
                        <p><strong>skills</strong>{skills}</p>
                    </div>
                ))
            ) :( <p>no skills</p>
            )}
            <div>
            <button
        onClick={() => {setIsEdit(true); router.push("/")}}
  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
>
  Edit
</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Delete</button>
            </div>
        </div>
        
    );
    
}