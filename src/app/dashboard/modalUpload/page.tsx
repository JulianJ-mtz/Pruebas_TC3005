"use client";
import React from "react";
import { AiOutlineUpload } from "react-icons/ai";

import TableErrors from "@/components/table/tableError";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModalTable, setShowModalTable] = React.useState(false);

  return (
    <div className="flex justify-center">
      <button
        className="bg-pink-500 text-white mt-44 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <button
        className="bg-pink-500 text-white mt-44 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModalTable(true)}
      >
        Open regular modal con tabla
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto h-1/2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-full w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative rounded-xl p-6 flex items-center justify-center bg-azulClaro w-5/6 my-9 mx-auto h-3/4">
                  <div className="h-full w-full flex items-center justify-center">
                    <AiOutlineUpload className="w-1/4 h-1/4 text-black" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between mb-8 w-full px-32">
                  <button
                    className="text-white bg-turquesa font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-60"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-turquesa font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  w-60"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Validate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModalTable ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto h-1/2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-full w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative  rounded-xl p-6 flex items-center justify-center bg-azulClaro w-5/6 my-9 mx-auto h-3/4">
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    <TableErrors />
                    <AiOutlineUpload className="w-14 h-14 text-black mt-6" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between mb-8 w-full px-32">
                  <button
                    className="text-white bg-turquesa font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-60"
                    type="button"
                    onClick={() => setShowModalTable(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-turquesa font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  w-60"
                    type="button"
                    onClick={() => setShowModalTable(false)}
                  >
                    Validate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
