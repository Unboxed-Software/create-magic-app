import React from 'react';

const Toast = ({ children }: any) => {
  return (
    <div className="fixed w-fit text-white font-medium shadow-[4px_8px_20px_rgba(0,0,0,0.15)] mx-auto my-0 px-4 py-2 rounded-[10px] top-[30px] inset-x-0 bg-[#00875f]">
      {children}
    </div>
  );
};

export default Toast;
