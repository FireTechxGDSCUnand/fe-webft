import { useState } from "react";
import Daftar from "./Daftar";
import Login from "./Login";
import AlertModal from "../Alert";

export default function Auth({ onClose, isLoginInitial = true }) {
  const [isLogin, setIsLogin] = useState(isLoginInitial);
  const [message, setMessage] = useState("");

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const closeAlert = () => {
    setMessage("");
  };

  return (
    <>
      <div
        className="fixed z-50 inset-0 flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="bg-white backdrop-blur-sm bg-opacity-45 border-2 border-neutral-50 rounded-2xl p-8"
          onClick={stopPropagation}
        >
          {isLogin ? <Login onMessage={handleMessage} /> : <Daftar onMessage={handleMessage} onSuccess={handleSwitchToLogin} />}

          <div className="text-center font-medium mt-3 text-neutral-400 text-sm">
            <p>
              {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}
              <button
                className="text-blue ml-1"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Daftar" : "Masuk"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <AlertModal message={message} onClose={closeAlert} />
    </>
  );
}
