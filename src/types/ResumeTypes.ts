import SkillsForm from "../../app/components/SkillsForm";

export interface PersonalForm{
    firstName: string;
    lastName: string;
    jobTitle: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
  };

  export interface EducationForm  {
    schoolName: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
  };

  export interface WorkExperienceForm {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    
  }
  export type SkillsForm = string[]

  export type SummaryForm = string
  
  export interface ResumeData {
    PersonalForm: PersonalForm,
    EducationForm: EducationForm[]
    WorkExperienceForm: WorkExperienceForm[]
    SkillsForm: SkillsForm
    SummaryForm: SummaryForm
  }

