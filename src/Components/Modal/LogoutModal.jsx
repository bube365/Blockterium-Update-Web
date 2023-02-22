import React, { useContext, useEffect, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ActionButton from "../Inputs/ActionButton";
import { ForwardIcon } from "../../assets";
import AuthContext from "../../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

export default function LogoutModal({
  closeModal,
  isOpen,
  openModal,
  title,
  text,
}) {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-lg tracking-wide text-gray-500">
                      {text}
                    </p>
                  </div>

                  <div className="mt-4 w-full grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <ActionButton
                        type="button"
                        btnIcon={ForwardIcon}
                        label="Log out"
                        classnames="flex justify-center items-center group text-base bg-mainBlue text-mainWhite font-semibold w-full rounded-md text-center p-4"
                        onClick={logout}
                      />
                    </div>
                    <div className="col-span-1">
                      <ActionButton
                        type="button"
                        classnames="flex justify-center text-base bg-gradedBlue font-semibold text-mainBlue w-full rounded-md text-center p-4"
                        onClick={closeModal}
                        label="Cancel"
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
