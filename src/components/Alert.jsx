import React, { useEffect } from 'react';
import c from '/public/c.png';
import x from '/public/x.png';

function AlertModal({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="z-[100] inset-0 fixed flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm ">
      <div className="bg-white backdrop-blur-sm bg-opacity-45 flex flex-col justify-center gap-4 items-center border-2 shadow-xl border-neutral-50 rounded-lg p-8">
        <img src={message.includes('Berhasil') ? c : x} alt="icon" className="w-10" />
        <p className="text-center font-semibold text-2xl">{message}</p>
      </div>
    </div>
  );
}

export default AlertModal;