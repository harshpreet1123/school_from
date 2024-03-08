import { Document, Schema, model } from "mongoose";

export interface IForm extends Document {
  peNumber: number;
  name: string;
  sex: string;
  age: number;
  dob: Date;
  religion: string;
  caste: string;
  nationality: string;
  image?: string;
  aadharNo: number;
  fatherORguardian: string;
  FGname: string;
  FGimage?: string;
  FGeduQualification: string;
  FGoccupation: string;
  Mname: string;
  Mimage?: string;
  MeduQualification: string;
  Moccupation: string;
  perVillageTown: string;
  perPo: string;
  perTehsil: string;
  perDistrict: string;
  perState: string;
  perPincode: string;
  currVillageTown: string;
  currPo: string;
  currTehsil: string;
  currDistrict: string;
  currState: string;
  currPincode: string;
  phone: number;
  altPhone?: number;
  email: string;
  bpl: string;
  rcNo: number;
  totalIncome: number;
  bankName: string;
  bankAccNumber: string;
  bankIfscCode: string;
  psebRegNo: string;
  previousSchool: string;
  previousBoard: string;
  previousAttendance: string;
  previousPercentage: string;
  isAllergic: boolean;
  allergies?: string;
  bloodGroup: string;
  heightCms: number;
  weightKg: number;
  sb1name?: string;
  sb1class?: string;
  sb1admissionNo?: string;
  sb2name?: string;
  sb2class?: string;
  sb2admissionNo?: string;
  sb3name?: string;
  sb3class?: string;
  sb3admissionNo?: string;
  isApprove: boolean;
  isAdmissionGranted: boolean;
  reasonIfNot?: string;
  admissionNo: string;
  class: string;
  rollno: string;
  dateOfAdmission: Date;
  remarks?: string;
  concessionType: string;
}

const FormSchema = new Schema<IForm>({
  peNumber: { type: Number, required: true, unique: true },
  name: { type: String, required:true},
  sex:{type:String, required:true},
  age:{type:Number, required:true},
  dob: { type: Date, required:true},
  religion:{type:String,required:true},
  caste: {type:String,required:true},
  nationality: {type:String,required:true},
  image: {type:String,required:false},
  aadharNo: {type:Number,required:true, unique:true},
  fatherORguardian: {type:String,required:true},
  FGname: {type:String,required:true},
  FGimage: {type:String,required:false},
  FGeduQualification: {type:String,required:true},
  FGoccupation: {type:String,required:true},
  Mname: {type:String,required:true},
  Mimage: {type:String,required:false},
  MeduQualification: {type:String,required:true},
  Moccupation: {type:String,required:true},
  perVillageTown: {type:String,required:true},
  perPo: {type:String,required:true},
  perTehsil: {type:String,required:true},
  perDistrict: {type:String,required:true},
  perState:{type:String,required:true},
  perPincode: {type:String,required:true},
  currVillageTown: {type:String,required:true},
  currPo: {type:String,required:true},
  currTehsil: {type:String,required:true},
  currDistrict: {type:String,required:true},
  currState: {type:String,required:true},
  currPincode: {type:String,required:true},
  phone: {type:Number,required:true},
  altPhone: {type:Number,required:false},
  email: {type:String,required:true},
  bpl: {type:String,required:true},
  rcNo: {type:Number,required:true},
  totalIncome: {type:Number,required:true},
  bankName: {type:String,required:true},
  bankAccNumber: {type:String,required:true},
  bankIfscCode: {type:String,required:true},
  psebRegNo: {type:String,required:true},
  previousSchool: {type:String,required:true},
  previousBoard: {type:String,required:true},
  previousAttendance: {type:String,required:true},
  previousPercentage: {type:String,required:true},
  isAllergic: {type:Boolean,required:true},
  allergies: {type:String,required:false},
  bloodGroup: {type:String,required:true},
  heightCms: {type:Number,required:true},
  weightKg: {type:Number,required:true},
  sb1name: {type:String,required:false},
  sb1class: {type:String,required:false},
  sb1admissionNo: {type:String,required:false},
  sb2name: {type:String,required:false},
  sb2class: {type:String,required:false},
  sb2admissionNo: {type:String,required:false},
  sb3name: {type:String,required:false},
  sb3class: {type:String,required:false},
  sb3admissionNo: {type:String,required:false},
  isApprove: { type: Boolean, required: true },
  isAdmissionGranted: { type: Boolean, required: true },
  reasonIfNot: { type: String, required: false },
  admissionNo: { type: String, required: true },
  class: { type: String, required: true },
  rollno: { type: String, required: true },
  dateOfAdmission: { type: Date, required: true },
  remarks: { type: String, required: false },
  concessionType: { type: String, required: true },
});
const FormModel = model<IForm>("Form", FormSchema);

export default FormModel;