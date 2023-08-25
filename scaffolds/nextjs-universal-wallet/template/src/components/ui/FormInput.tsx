import React from 'react';

interface Props {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}

const FormInput = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      className="box-border flex flex-row items-center w-[100%] h-12 border text-base leading-6 text-[#18171a] mb-[15px] px-4 py-3 rounded-[10px] border-solid border-[#dddbe0] placeholder:text-[#77767a]"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
