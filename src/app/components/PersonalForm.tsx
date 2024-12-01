'use client'
import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";

type PersonalFormData = {
FirstName: string;
LastName: string;
jobTitle: string;
city: string;
country: string;
phoneNumber: string;
email:string
}

interface PersonalFormProp{
onSubmit:(data:PersonalFormData) => void;
}

const PersonalForm: React.FC<PersonalFormProp> = ({onSubmit}) =>{
    const [formData, setFormData] = useState<PersonalFormData> ({
        FirstName: '',
        LastName: '',
        jobTitle: '',
        city: '',
       country: '',
       phoneNumber: '',
       email: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit =(e:FormEvent) =>{
        e.preventDefault()
        onSubmit(formData);
      }

      return(
        <form className="shadow-lg my-6 w-1/3 " onSubmit={handleSubmit}>
            <div>
            <label>First Name</label>
            <input className="shadow-md my-6 mx-6" name="First Name" value={formData.FirstName} onChange={handleChange} />
            </div>
            <div>
            <label>Last Name</label>
            <input className="shadow-md my-6 mx-6" name="Last Name" value={formData.LastName} onChange={handleChange} />
            </div>
            <div>
            <label>job Title</label>
            <input className="shadow-md my-6 mx-6" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            </div>
            <div>
            <label>First city</label>
            <input className="shadow-md my-6 mx-6" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div>
            <label>First country</label>
            <input className="shadow-md my-6 mx-6" name="country" value={formData.country} onChange={handleChange} />
            </div>
            <div>
            <label>First phonenumber</label>
            <input className="shadow-md my-6 mx-6" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div>
            <label>email</label>
            <input className="shadow-md my-6 mx-6" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"> save </button>
        </form>
      )
}
export default PersonalForm;

