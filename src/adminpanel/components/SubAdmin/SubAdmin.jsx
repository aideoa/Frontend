
import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Trash2 } from "lucide-react"
import toast from "react-hot-toast"

export default function SubAdmin() {
    const [subAdmins, setSubAdmins] = useState([])

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const [deleteConfirmation, setDeleteConfirmation] = useState(null)

    const [adminPasswordVisibility, setAdminPasswordVisibility] = useState({})

    const [changePassword, setChangePassword] = useState("");
    const [changePasswordError, setChangePasswordError] = useState("");

    const fetchSubAdmins = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACKEND_URL}/api/admin/getSubAdmin`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminAuthToken")?.trim().replace(/^"|"$/g, '')}`
                }
            });

            setSubAdmins(response.data);
        } catch (error) {
            console.error("Error fetching sub-admins:", error);
        }
    };


    useEffect(() => {
        fetchSubAdmins();
    }, []);

    const handlePasswordChange = async (id) => {
        setChangePasswordError("");

        if (!changePassword.trim()) {
            setChangePasswordError("New password is required");
            return;
        } else if (changePassword.length < 6) {
            setChangePasswordError("Password must be at least 6 characters");
            return;
        }

        try {
            const response = await axios.put(`${import.meta.env.VITE_API_BACKEND_URL}/api/admin/changePassword/${id}`, {
                newPassword: changePassword
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminAuthToken")?.trim().replace(/^"|"$/g, '')}`
                }
            });

            if (response.status === 200) {
                toast.success("Password changed successfully");
                setChangePassword("");
            } else {
                throw new Error("Something went wrong");
            }
        } catch (error) {
            console.error("Error changing password:", error);
            toast.error(error.response?.data?.message || "Failed to change password");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        setUsernameError("")
        setPasswordError("")

        let isValid = true

        if (!username.trim()) {
            setUsernameError("Username is required")
            isValid = false
        } else if (username.length < 4) {
            setUsernameError("Username must be at least 4 characters")
            isValid = false
        }

        if (!password.trim()) {
            setPasswordError("Password is required")
            isValid = false
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters")
            isValid = false
        }

        if (isValid) {

            const newSubAdmin = {
                role: "subAdmin",
                username,
                password,
            }

            try {
                const res = await axios.post(`${import.meta.env.VITE_API_BACKEND_URL}/api/admin`, newSubAdmin);

                if (res.status === 200) {
                    toast.success("SubAdmin Added Successfully");
                    fetchSubAdmins();
                    setUsername("");
                    setPassword("");
                } else {
                    throw new Error("Something went wrong");
                }
            } catch (error) {
                // Handle errors safely
                const errorMessage = error.response?.data?.error || "Failed to add SubAdmin";
                toast.error(errorMessage);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_BACKEND_URL}/api/admin/subadmin/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminAuthToken")?.trim().replace(/^"|"$/g, '')}`
                }
            });

            if (response.status === 200) {
                toast.success("SubAdmin deleted successfully");
                setSubAdmins(subAdmins.filter((admin) => admin.id !== id));
            } else {
                throw new Error("Something went wrong");
            }
        } catch (error) {
            console.error("Error deleting sub-admin:", error);
            toast.error(error.response?.data?.message || "Failed to delete SubAdmin");
        }

        setDeleteConfirmation(null);
    };


    const toggleAdminPasswordVisibility = (id) => {
        setAdminPasswordVisibility((prevState) => ({
            ...prevState,
            [id]: !(prevState[id] || false),
        }))
    }

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 mt-10">
            <h1 className="text-2xl font-bold mb-6">SubAdmin Management</h1>

            {/* Add SubAdmin Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New SubAdmin</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${usernameError ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter username"
                            />
                            {usernameError && <p className="mt-1 text-sm text-red-500">{usernameError}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${passwordError ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Enter password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#5A2175] text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Add SubAdmin
                        </button>
                    </div>
                </form>
            </div>

            {/* SubAdmins Table */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">SubAdmin List</h2>

                {subAdmins.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Username
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        role
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {subAdmins.map((admin) => (
                                    <tr key={admin.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{admin.username}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {admin.role}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {deleteConfirmation === admin.id ? (
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-sm text-red-500">Confirm?</span>
                                                    <button
                                                        onClick={() => handleDelete(admin.id)}
                                                        className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs"
                                                    >
                                                        Yes
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirmation(null)}
                                                        className="text-white bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded text-xs"
                                                    >
                                                        No
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setDeleteConfirmation(admin.id)}
                                                    className="text-red-500 hover:text-red-700 flex items-center"
                                                >
                                                    <Trash2 size={16} className="mr-1" /> Delete
                                                </button>
                                            )}
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type={adminPasswordVisibility[admin.id] ? "text" : "password"}
                                                    value={changePassword}
                                                    onChange={(e) => setChangePassword(e.target.value)}
                                                    className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                    placeholder="New Password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => toggleAdminPasswordVisibility(admin.id)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    {adminPasswordVisibility[admin.id] ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                                <button
                                                    onClick={() => handlePasswordChange(admin.id)}
                                                    className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-xs"
                                                >
                                                    Update
                                                </button>
                                            </div>
                                            {changePasswordError && <p className="text-red-500 text-xs mt-1">{changePasswordError}</p>}

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500 text-center py-4">No SubAdmins found.</p>
                )}
            </div>
        </div>
    )
}

