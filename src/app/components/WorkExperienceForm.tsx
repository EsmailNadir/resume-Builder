'use client'

import React from "react";
import { useState, FormEvent, ChangeEvent } from "react";

type WorkExperienceData = {
  jobTitle : string;
  company : string;
  startDate : string;
  endDate : string;
  description: string;
}

interface WorkExperienceFormProps {
  onSubmit: (data: WorkExperienceData) => void;  
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({onSubmit}) => {
    const [formData, setFormData] = useState<WorkExperienceData>({
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''

    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setFormData((prevData)=>({
        ...prevData,
        [name]: value
      }));
    };

    const handleSubmit = ( e:FormEvent) => {
      e.preventDefault()
      onSubmit(formData);
    };
    return (
      <form className="shadow-lg my-6 w-1/3 " onSubmit={handleSubmit}>
        <div>
          <label>Job Title</label>
          <input className="shadow-md my-6 mx-6" name="jobTitle" value={formData.jobTitle} onChange={handleChange}/>
        </div>
        <div>
          <label>company</label>
          <input  className="shadow-md mx-6" name="company" value={formData.company} onChange={handleChange}/>
        </div>
        <div>
          <label>StartDate</label>
          <input  className=" shadow-md my-6 mx-6" type="date" name="startDate" value={formData.startDate} onChange={handleChange}/>
        </div>
        <div>
          <label>EndDate</label>
          <input className="mx-6 my-6 shadow-md" type="date" name="EndDate" value={formData.endDate} onChange={handleChange}/>
        </div>
        <div>
          <label>Description</label>
          <textarea  className="shadow-md my-6 mx-6" name="description" value={formData.description} onChange={handleChange}/>
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
      </form>
    )
}

  export default WorkExperienceForm;
