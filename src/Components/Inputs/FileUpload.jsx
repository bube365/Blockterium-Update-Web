import React from "react";
import { UserIcon } from "../../assets";
const FileUpload = ({ getRootProps, getInputProps, isDragActive }) => {
  return (
    <>
      <div className="justify-center flex flex-col mx-auto">
        <div
          {...getRootProps()}
          className=" bg-blueshade mx-auto mb-1 my-auto bg-gradedBlue w-[70px] bg-opacity-20 flex justify-center h-[70px] border-cardselect rounded-full "
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="flex justify-between items-center">
              <img src={UserIcon} className="w-[25px]" />
            </div>
          )}
        </div>
        <p className="text-base text-mainBlue font-extralight text-center">
          Upload display
        </p>
      </div>
    </>
  );
};

export default FileUpload;
