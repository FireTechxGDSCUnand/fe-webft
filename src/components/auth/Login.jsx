import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import login from "@/apis/auth/login";
import Button from "../Button";
import Input from "../Input";

export default function Login({ onMessage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      if (response.success) {
        onMessage(response.message);
        window.location.href = `${
          import.meta.env.VITE_FRONTEND_BASE_URL
        }/user/beranda`;
      } else {
        onMessage(response.message);
        console.error(response.message);
      }
    } catch (error) {
      onMessage("Login failed");
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-center font-bold text-3xl">Masuk Akun</h1>
      <Input
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
        type="text"
      />
      <div className="relative">
        <Input
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
        <div
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
      <Button variant="primary">Log in</Button>
    </form>
  );
}
