import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EmployeeForm = ({ formData, userType }) => {
  const navigate = useNavigate();
  const [org, setOrg] = useState("");
  const [idNo, setIdNo] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("accessToken");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/auth/additional`,
        {
          userType,
          organization: org,
          organizationId: idNo,
          mobile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Organization"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID"
        value={idNo}
        onChange={(e) => setIdNo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
