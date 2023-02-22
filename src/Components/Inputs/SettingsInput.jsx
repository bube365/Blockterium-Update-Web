import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SettingsInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  onFocus,
  required,
}) => {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  return (
    <div className=" flex flex-col py-1 mb-3">
      <label className="px-5 text-xs">{label}</label>

      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        aria-describedby="pwdnote"
        className="border-none text-greyFour text-sm outline-none px-5"
        required={required}
      />
    </div>
  );
};

export default SettingsInput;
