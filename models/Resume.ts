import mongoose , {Schema,model, models} from "mongoose";


const ResumeSchema = new mongoose.Schema({
    
    UserId: {type: mongoose.Schema.Types.ObjectId, required: true, ref:"User"},
    
    PersonalInfo: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    jobTitle: {type: String, required: true},
    city:{type: String, required: true},
    country:{ type: String, required: true},
    phoneNumber:{type: String, required: true},
    email: {type: String, required: true},
    },

    WorkExperience: [{
        jobTitle: { type: String, required: true },
        company: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        description: { type: String, required: true }
    }],

    Education:[{
        schoolName: {type: String, required: true},
        degree: {type: String, required:true},
        fieldOfStudy: {type: String, required: true},
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        description: { type: String, required: true}
    }],
    Skills:[{
         type: String, required:true
    }],

    Summary:{
        type: String, required:true
    }
})


const Resume = models.Resume || model("Resume", ResumeSchema)
export {Resume};


