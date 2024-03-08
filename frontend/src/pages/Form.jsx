import {
  ProCard,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from "@ant-design/pro-components";
import { Button, ConfigProvider, message } from "antd";
import { useState } from "react";
import enUS from "antd/es/locale/en_US";
import axios from "axios";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [peNumber,setPeNumber] = useState('');
  return (
    <ConfigProvider locale={enUS}>
      <ProCard>
        <StepsForm
          onFinish={async () => {
            setLoading(true);
            try {
              const response = await axios.post(
                "http://localhost:3000/add-form",
                {
                  body: {
                    
                  },
                }
              );
              console.log(response.body);
            } catch (e) {
              console.log("error", e);
            }
            message.success("Submitted successfully");
            setLoading(false);
          }}
          submitter={{
            render: ({ form, onSubmit, step, onPre }) => {
              return [
                <Button
                  key="rest"
                  onClick={() => {
                    form?.resetFields();
                  }}
                >
                  Reset
                </Button>,
                step > 0 && (
                  <Button
                    key="pre"
                    onClick={() => {
                      onPre?.();
                    }}
                  >
                    Previous
                  </Button>
                ),
                <Button
                  key="next"
                  loading={loading}
                  type="primary"
                  onClick={() => {
                    onSubmit?.();
                  }}
                >
                  Next
                </Button>,
              ];
            },
          }}
          formProps={{
            validateMessages: {
              required: "This is required",
            },
          }}
        >
          <StepsForm.StepForm
            name="Candidate"
            title="Personal Details"
            onFinish={async () => {
              setLoading(true);
              await waitTime(2000);
              setLoading(false);
              return true;
            }}
          >
            <ProFormText
              name="peNumber"
              label="PE Number"
              placeholder="PE Number"
              rules={[{ required: true }]}
            />
            <ProFormText
              name="name"
              label="Candidate name"
              placeholder="Candidate name"
              rules={[{ required: true }]}
            />
            <div style={{ display: "flex" }}>
              <ProFormSelect
                placeholder="Gender"
                label="Sex"
                name="sex"
                rules={[{ required: true }]}
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "Other", label: "Other" },
                ]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormDatePicker
                label="Date of Birth"
                name="dob"
                placeholder="Select Date"
                rules={[{ required: true }]}
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormSelect
                name="religion"
                label="Religion"
                rules={[{ required: true }]}
                options={[
                  { value: "Sikh", label: "Sikh" },
                  { value: "Hindu", label: "Hindu" },
                  { value: "Muslim", label: "Muslim" },
                  { value: "Christian", label: "Christian" },
                  { value: "Other", label: "Other" },
                ]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormDependency name={["religion"]}>
                {({ religion }) => {
                  return religion == "Other" ? (
                    <ProFormText label="Religion" />
                  ) : (
                    <p></p>
                  );
                }}
              </ProFormDependency>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormSelect
                name="categoty"
                label="Categoty"
                options={[
                  { value: "BC", label: "BC" },
                  { value: "SC", label: "SC" },
                  { value: "General", label: "General" },
                  { value: "OBC", label: "OBC" },
                  { value: "ST", label: "ST" },
                ]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="caste"
                label="Caste"
                placeholder="Caste Name"
                rules={[{ required: true }]}
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="nationlaity"
                label="Nationality"
                placeholder="Candidate name"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="aadharNo"
                label="Aadhar No"
                placeholder="XXXX-XXXX-XXXX"
                rules={[{ required: true }]}
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="phoneNo"
                label="Mobile Number"
                placeholder="+91-XXXXXXXXXX"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="altPhone"
                label="Alternative Mobile Number"
                placeholder="+91-XXXXXXXXXX"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="email"
                label="Email"
                placeholder="example@example.com"
                rules={[{ required: true }]}
              />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="Family" title="Family Details">
            <div style={{ display: "flex" }}>
              <ProFormText
                name="bpl"
                label="BPL Card Number"
                placeholder="BPL"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="rcNo"
                label="Rc Number"
                placeholder="RC"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="totalIncome"
                label="Total Income"
                placeholder="1,00,000"
                rules={[{ required: true }]}
              />
            </div>
            <h3>Parents/Guardian Details</h3>
            <ProFormSelect
              label="Father or Guardian"
              name="fatherOrGuardian"
              options={[
                { value: "Father", label: "Father" },
                { value: "Guardian", label: "Guardian" },
              ]}
            />
            <div style={{ display: "flex" }}>
              <ProFormText
                name="FGname"
                label="Father/Guardian Name"
                placeholder="Name"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="FGccupation"
                label="Father/Guardian Occupation"
                placeholder="Occupation"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="FGedu"
                label="Father/Guardian Education"
                placeholder="Education"
                rules={[{ required: true }]}
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="motherName"
                label="Mother Name"
                placeholder="Name"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="motherOccupation"
                label="Mother Occupation"
                placeholder="Occupation"
                rules={[{ required: true }]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="motherEdu"
                label="Mother Education"
                placeholder="Education"
                rules={[{ required: true }]}
              />
            </div>
            <h3>Siblings Details</h3>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="sb1name"
                label="Sibling Name"
                placeholder="Sibling name"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="sb1class" label="Class" placeholder="Class" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="sb1admissionNo"
                label="Admission No"
                placeholder="Admission No"
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="sb2name"
                label="Sibling Name"
                placeholder="Sibling name"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="sb2class" label="Class" placeholder="Class" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="sb2admissionNo"
                label="Admission No"
                placeholder="Admission No"
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="sb3name"
                label="Sibling Name"
                placeholder="Sibling name"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="sb3class" label="Class" placeholder="Class" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="sb3admissionNo"
                label="Admission No"
                placeholder="Admission No"
              />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="Address" title="Address">
            <h3>Permanent Address </h3>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="perVillageTown"
                label="Village/Town"
                placeholder="Village/Town"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="perPo"
                label="Post Office"
                placeholder="Post Office"
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="perTehsil"
                label="Tehsil"
                placeholder="Tehsil"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="perDistrict"
                label="District"
                placeholder="District"
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="perPincode"
                label="Pincode"
                placeholder="Pincode"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="perState" label="State" placeholder="State" />
            </div>
            <h3>Current Address </h3>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="currVillageTown"
                label="Village/Town"
                placeholder="Village/Town"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="currPo"
                label="Post Office"
                placeholder="Post Office"
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="currTehsil"
                label="Tehsil"
                placeholder="Tehsil"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="currDistrict"
                label="District"
                placeholder="District"
              />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="currPincode"
                label="Pincode"
                placeholder="Pincode"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="currState" label="State" placeholder="State" />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="health" title="Health Deatils">
            <div style={{ display: "flex", alignContent: "center" }}>
              <ProFormCheckbox name="isAlergic" />
              &nbsp;&nbsp;&nbsp;&nbsp;isAlergic?&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <ProFormDependency name={["isAlergic"]}>
              {({ isAlergic }) => {
                return isAlergic ? <ProFormText name="alergies" /> : <p></p>;
              }}
            </ProFormDependency>
            <div style={{ display: "flex" }}>
              <ProFormText
                name="bloodGroup"
                label="Blood Group"
                placeholder="AB+"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="height" label="Height" placeholder="in Cms" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="weight" label="Weight" placeholder="in Kg" />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="other" title="Other Deatils">
            <h3>Bank Deatils</h3>
            <ProFormText
              name="bankName"
              label="Bank Name"
              placeholder="Bank Name"
            />
            <div style={{ display: "flex" }}>
              <ProFormText name="ifscCode" label="IFSC" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="accNumber" label="Account Number" />
            </div>
            <h3>Previous School Details</h3>
            <div style={{ display: "flex" }}>
              <ProFormText name="psebRegNo" label="PSEB Registration Number" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="previousBoard" label="Previous Board" />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormText name="previousSchool" label="School Name" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="percentage" label="Marks" placeholder="in %" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText
                name="attendence"
                label="Attendence"
                placeholder="in %"
              />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm name="office" title="For Office">
            <div style={{ display: "flex" }}>
              <ProFormSelect
                name="isApprove"
                label="isApproved"
                options={[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ]}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormSelect
                name="isAdmissionGranted"
                label="Admission Granted"
                options={[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ]}
              />
            </div>
            <ProFormDependency name={["isAdmissionGranted"]}>
              {({ isAdmissionGranted }) => {
                return isAdmissionGranted == false ? (
                  <ProFormTextArea label="Reason" name="reason" />
                ) : (
                  <p></p>
                );
              }}
            </ProFormDependency>
            <div style={{ display: "flex" }}>
              <ProFormText name="admissionNO" label="Admission No" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="class" label="Class" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="rollno" label="Roll No" />
            </div>
            <div style={{ display: "flex" }}>
              <ProFormDatePicker name="admissionDate" label="Admission Date" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ProFormText name="concession" label="Concession Type" />
            </div>
            <ProFormTextArea name="remarks" label="Remarks" />
          </StepsForm.StepForm>
        </StepsForm>
      </ProCard>
    </ConfigProvider>
  );
};
export default Form;
