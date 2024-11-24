import { useState } from "react";

export default function WorkExperienceForm() {
    const Form = () => {
        const [formData, setFormData] = useState({
            name:''
            
        })

    }
    return (
      <div className="InputForm">
        <form>
            <input 
            type="text"
            />
            
        </form>
      </div>
    );
  }