import mongoose , {Schema,model, models} from "mongoose";


const ResumeSchema = new mongoose.Schema({
    
    UserId: {type: mongoose.Schema.Types.ObjectId, required: true, ref:"User"},
    
    personalInfo: [{
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    jobTitle: {type: String, required: true},
    city:{type: String, required: true},
    country:{ type: String, required: true},
    phoneNumber:{type: String, required: true},
    email: {type: String, required: true},
    }],

    workExperience: [{
        jobTitle: { type: String, required: true },
        company: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        description: { type: String, required: true }
    }],

    education:[{
        schoolName: {type: String, required: true},
        degree: {type: String, required:true},
        fieldOfStudy: {Type: String, required: true},
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        description: { type: String, required: true}
    }],
    Skills:[{
        skills: {type: String, required:true}
    }],

    Summary:[{
        Summary:{type: String, required:true}
    }]
})

module.exports = mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
const Resume = models.Resume || model("Resume", ResumeSchema)
export {Resume};


