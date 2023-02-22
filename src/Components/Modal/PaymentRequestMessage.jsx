import React, { useContext, useEffect, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ActionButton from "../Inputs/ActionButton";
import { ForwardIcon } from "../../assets";
import { Link } from "react-router-dom";

export default function PaymentRequestMessage({
  closeModal,
  isOpen,
  openModal,
  title,
  text,
}) {
  return (
    <>
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
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-md tracking-wide text-gray-500">
                      {text}
                    </p>
                  </div>

                  <div className="mt-4 w-full ">
                    <div className="col-span-1">
                      <Link to="/dashboard">
                        <ActionButton
                          type="button"
                          btnIcon={ForwardIcon}
                          label="Go back home"
                          classnames="flex justify-center items-center group text-base bg-mainBlue text-mainWhite font-semibold w-full rounded-md text-center px-4 py-2"
                          onClick={closeModal}
                        />
                      </Link>
                    </div>
                    {/* <div className="col-span-1">
                      <ActionButton
                        type="button"
                        classnames="flex justify-center text-base bg-gradedBlue font-semibold text-mainBlue w-full rounded-md text-center p-4"
                        onClick={closeModal}
                        label="Cancel"
                      />
                    </div> */}
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
