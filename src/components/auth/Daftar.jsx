import { useState } from 'react';

import {
  Eye,
  EyeOff,
} from 'lucide-react'; 

import daftar from '@/apis/auth/daftar';

import Button from '../Button';
import Input from '../Input';

export default function Daftar({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await daftar(username, email, password, confirmPassword);
      if (response.success) {
        console.log(response.message);
        onSuccess(); // Switch to login form
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h1 className="text-center font-bold text-3xl">Daftar Akun</h1>
      <Input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <Input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
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
      <div className="relative">
        <Input
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
        />
        <div
          onClick={toggleConfirmPasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
      <Button variant="primary">Submit</Button>
    </form>
  );
}
