import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

const steps = ["Enter details", "Upload Image"];

const url = import.meta.env.VITE_API_BACKEND_URL;

const IDform = () => {
  const [formData, setFormData] = useState({
    name: "",
    collegeName: "",
    contactNo: "",
    address: "",
    studentPhoto: null,
    universityIDCard: "",
  });
  const {user}=React.useContext(AuthContext)
  const [progressStudent, setProgressStudent] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const {authToken}=React.useContext(AuthContext)
  const nav=useNavigate()
  const currentYear = new Date().getFullYear(); // Get the current year
  const aideoaIdNo = `AIDEOA${currentYear}${String(user?.id).padStart(4, '0')}`;
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if(!formData.name) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const urlEndpoint = "https://ik.imagekit.io/d8e3qlogb";
  const publicKey = "public_Q3vYMA6u3T7ku53MOJFrGn+cgDY=";

  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:4000/image");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
    setSelectedFile(file);
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (formData) => {
 
    console.log('handleSubmi')
    console.log(formData)
    try {
      const res = await axios.post(
        `${url}/api/studentidcard`,
        {...formData,aideoaIdNo},
        {
          headers: {
            Authorization: `Bearer ${authToken.accessToken}`,
          },
        }
      );
      
      if (res.status === 200) {
        toast.success("Id card submitted");
        setFormData({
          name: "",
          collegeName: "",
          contactNo: "",
          address: "",
          studentPhoto: null,
          universityIDCard: "",
        });
        nav("/home")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    setFormData((prev) => ({
      ...prev,
      studentPhoto: res.url,
    }));
    setProgressStudent(false);
    toast.success("Image uploaded successfully");
    handleSubmit({...formData,studentPhoto:res.url})
    setActiveStep(0)
  };

  const onUploadStart = () => {
    setProgressStudent(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
   
        <React.Fragment>
          {activeStep === 0 ? (
            <form
              className="flex gap-4 flex-col w-1/2 w-full"
             
            >
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-base font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Write your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-base font-bold">
                  College Name
                </label>
                <input
                  type="text"
                  name="collegeName"
                  placeholder="Your college name"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-bold">Contact No</label>
                <input
                  type="text"
                  name="contactNo"
                  placeholder="+1234567890"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-base font-bold">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Write here..."
                  value={formData.address}
                  required
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-base font-bold">
                  University ID card
                </label>
                <input
                  type="text"
                  name="universityIDCard"
                  placeholder="Upload img on Google Drive"
                  value={formData.universityIDCard}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
                />
              </div>
            </form>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-base font-bold">
                {"Student's Photo"}
              </label>
              <div
                onDrop={(e) => handleDrop(e, "studentPhoto")}
                onDragOver={(e) => e.preventDefault()}
                className="flex justify-center items-center w-full h-32 bg-gray-100 rounded-2xl cursor-pointer hover:border-blue-300"
              >
                <label
                  htmlFor="studentPhotoUpload"
                  className="flex flex-col justify-center items-center cursor-pointer"
                >
                  <span className="text-gray-400 text-sm">Drag & Drop or</span>
                  <span className="text-purple-700 text-sm font-semibold">
                    {!progressStudent && !formData.studentPhoto
                      ? "Choose file"
                      : progressStudent
                      ? "Uploading..."
                      : "Uploaded"}
                  </span>
                </label>
                <IKContext
                  publicKey={publicKey}
                  urlEndpoint={urlEndpoint}
                  authenticator={authenticator}
                >
                  <IKUpload
                    id="studentPhotoUpload"
                    style={{ display: "none" }}
                    fileName="student.png"
                    onError={onError}
                    onUploadStart={onUploadStart}
                    onSuccess={onSuccess}
                  />
                </IKContext>
              </div>
            </div>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

           {activeStep !== steps.length - 1 && <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "" : "Next"}
            </Button>}
          </Box>
        </React.Fragment>
      
    </Box>
  );
};

export default IDform;
