'use client'

import { useState, useEffect } from "react";

export default function MyResumesPage() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('/api/resumes')
        .then((res)=> res.json())
        .then((data)=>{
            setData(data)
            setIsLoading(true)
        })
    },[])

    if (isLoading) return <p>Loading...</p>
    if(!data) return <p>no resume</p>
    console.log("Fetched data:", data);
    
    return (
        
        <div className="text-center">
            
            <h1>(data.workExperience)</h1>
            <h1>(data.Personal)</h1>
            <h1>(data.Summary)</h1>
            <h1>(data.skills)</h1>
            <h1>(data.Education)</h1>
        </div>
        
    );
    
}