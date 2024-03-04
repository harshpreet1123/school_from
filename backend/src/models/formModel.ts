import { Document, Schema, model } from "mongoose";

export interface IForm extends Document {
  peNumber: number;
  candidate: {
    name: string;
    sex: string;
    age: string;
    dob: Date;
    religion: string;
    caste: string;
    nationality: string;
    image: string;
    aadharNo: number;
  };
  father?: {
    name: string;
    image: string;
    eduQualification: string;
    occupation: string;
  };
  guardian?: {
    name: string;
    image: string;
    eduQualification: string;
    occupation: string;
  };
  mother: {
    name: string;
    image: string;
    eduQualification: string;
    occupation: string;
  };
  permanentAddress: {
    villageTown: string;
    po: string;
    tehsil: string;
    district: string;
    state: string;
    pincode: string;
  };
  presentAddress: {
    villageTown: string;
    po: string;
    tehsil: string;
    district: string;
    state: string;
    pincode: string;
  };
  contact: {
    phone: number;
    altPhone: number;
    email: string;
  };

  bpl: string;
  rcNo: number;
  totalIncome: number;
  bankDetails: {
    name: string;
    accNumber: string;
    ifscCode: string;
  };
  psebRegNo: string;
  previousSchool: {
    name: string;
    board: string;
    attendance: string;
    percentage: string;
  };
  health: {
    isAllergic: boolean;
    allergies?: string;
    bloodGroup: string;
    heightCms: number;
    weightKg: number;
  };
  sibling1?: {
    name: string;
    class: string;
    admissionNo: string;
  };
  sibling2?: {
    name: string;
    class: string;
    admissionNo: string;
  };
  sibling3?: {
    name: string;
    class: string;
    admissionNo: string;
  };
  isApprove: boolean;
  isAdmissionGranted: boolean;
  reasonIfNot?: string;
  admissionNo: string;
  class: string;
  rollno: string;
  dateOfAdmission: Date;
  remarks?: string;
  isConcessionGranted: boolean;
  concessionType: string;
}

const FormSchema = new Schema<IForm>({
  peNumber: { type: Number, required: true },
  candidate: {
    type: {
      name: { type: String, required: true },
      sex: { type: String, required: true },
      age: { type: String, required: true },
      dob: { type: Date, required: true },
      religion: { type: String, required: true },
      caste: { type: String, required: true },
      nationality: { type: String, required: true },
      image: { type: String, required: true },
      aadharNo: { type: Number, required: true },
    },
    required: true,
  },
  father: {
    type: {
      name: { type: String, required: true },
      image: { type: String, required: true },
      eduQualification: { type: String, required: true },
      occupation: { type: String, required: true },
    },
    required: false,
  },
  guardian: {
    type: {
      name: { type: String, required: true },
      image: { type: String, required: true },
      eduQualification: { type: String, required: true },
      occupation: { type: String, required: true },
    },
    required: false,
  },
  mother: {
    type: {
      name: { type: String, required: true },
      image: { type: String, required: true },
      eduQualification: { type: String, required: true },
      occupation: { type: String, required: true },
    },
    required: true,
  },
  permanentAddress: {
    type: {
      villageTown: { type: String, required: true },
      po: { type: String, required: true },
      tehsil: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    required: true,
  },
  presentAddress: {
    type: {
      villageTown: { type: String, required: true },
      po: { type: String, required: true },
      tehsil: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    required: true,
  },
  contact: {
    type: {
      phone: { type: Number, required: true },
      altPhone: { type: Number, required: true },
      email: { type: String, required: true },
    },
    required: true,
  },
  bpl: { type: String, required: true },
  rcNo: { type: Number, required: true },
  totalIncome: { type: Number, required: true },
  bankDetails: {
    type: {
      name: { type: String, required: true },
      accNumber: { type: String, required: true },
      ifscCode: { type: String, required: true },
    },
    required: true,
  },
  psebRegNo: { type: String, required: true },
  previousSchool: {
    type: {
      name: { type: String, required: true },
      board: { type: String, required: true },
      attendance: { type: String, required: true },
      percentage: { type: String, required: true },
    },
    required: true,
  },
  health: {
    type: {
      isAllergic: { type: Boolean, required: true },
      allergies: { type: String, required: false },
      bloodGroup: { type: String, required: true },
      heightCms: { type: Number, required: true },
      weightKg: { type: Number, required: true },
    },
    required: true,
  },
  sibling1: {
    type: {
      name: { type: String, required: true },
      class: { type: String, required: true },
      admissionNo: { type: String, required: true },
    },
    required: false,
  },
  sibling2: {
    type: {
      name: { type: String, required: true },
      class: { type: String, required: true },
      admissionNo: { type: String, required: true },
    },
    required: false,
  },
  sibling3: {
    type: {
      name: { type: String, required: true },
      class: { type: String, required: true },
      admissionNo: { type: String, required: true },
    },
    required: false,
  },
  isApprove: { type: Boolean, required: true },
  isAdmissionGranted: { type: Boolean, required: true },
  reasonIfNot: { type: String, required: false },
  admissionNo: { type: String, required: true },
  class: { type: String, required: true },
  rollno: { type: String, required: true },
  dateOfAdmission: { type: Date, required: true },
  remarks: { type: String, required: false },
  isConcessionGranted: { type: Boolean, required: true },
  concessionType: { type: String, required: true },
});

const FormModel = model<IForm>("Form", FormSchema);

export default FormModel;
