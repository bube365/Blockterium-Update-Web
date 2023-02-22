import React, { useContext, useEffect, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ActionButton from "../Inputs/ActionButton";
import { ForwardIcon } from "../../assets";
import { Link } from "react-router-dom";
import PaymentRequestMessage from "./PaymentRequestMessage";

export default function SubscriptionModal({
  closePaymentModal,
  Open,
  openPaymentModal,
  title,
  text,
}) {
  let [isOpen, setIsOpen] = useState(false);
  const fullName = localStorage.getItem("fullName");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {!isOpen && (
        <Transition appear show={Open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closePaymentModal}
          >
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
              <div className="flex min-h-full items-center  justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="transform overflow-hidden bg-white p-6 text-center align-middle shadow-xl transition-all rounded-md">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-black"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="text-lg tracking-wide text-black">{text}</p>
                    </div>

                    {/* <div className="">
                      <div className="">
                        <ActionButton
                          type="button"
                          btnIcon={ForwardIcon}
                          label="I have made this payment"
                          classnames="flex justify-center items-center group text-[12px] w-[15rem] bg-mainBlue text-mainWhite font-semibold  rounded-sm text-center px-4 py-2 m-auto my-4"
                          onClick={openModal}
                        />
                      </div>
                      <div className="">
                        <ActionButton
                          type="button"
                          classnames="flex justify-center bg-gradedBlue font-semibold text-mainBlue rounded-sm text-center px-4 py-2 text-[12px] w-[15rem] m-auto"
                          onClick={closePaymentModal}
                          label="Close"
                        />
                      </div>
                    </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      {isOpen && (
        <PaymentRequestMessage
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          title="Request Sent"
          text={`Thank you ${fullName}, we will confirm your payment and get back to you.`}
        />
      )}
    </>
  );
}
