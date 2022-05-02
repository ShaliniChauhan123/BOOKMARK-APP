import "./styles.css";
import React, { useState } from "react";
import SidePopUpMenu from "../sidePopUpMenu";
import PopUp from "../../../routes/Dashboard/PopUp";
const AddLinkPopUp = (props) => {
  const { toggleAddLink, togglePop, modal } = props;
  return (
    <div
      key={props.id}
      className="fixed top-0 left-0 w-full h-full bg-opacity-60 bg-black"
    >
      <div className="fixed bg-white w-2/3 h-2/3 top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 rounded-xl px-10 py-8 flex">
        <div className="w-1/2 p-2 pl-0 mt-5 overflow-auto">
          <div className="text-gray-400 font-bold mb-5 pl-4 pr-5 flex items-center justify-between">
            <div>SAVE TO</div>
            <div
              onClick={togglePop}
              className="text-app-blue border-2 border-solid border-app-blue rounded-md h-5 w-5 font-light hover:bg-app-blue hover:text-white cursor-pointer text-sm flex items-center justify-center"
            >
              +
            </div>
            {modal && <PopUp toggle={togglePop} />}
          </div>
          <div className="flex-auto">
            <div className="folders flex-col h-full">
              <div className="modal1">
                {props.getfolders.map((i) => (
                  <div key={i.id} className="modal11">
                    <SidePopUpMenu name={i.name} key={i.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 pl-5">
          <div
            onClick={toggleAddLink}
            className="w-full text-right cursor-pointer text-gray-400"
          >
            x
          </div>
          <h1 className="text-3xl font-semibold">Add Link</h1>
          <div className="my-5 w-6/7">
            <h3 className="ml-1 text-gray-500">Link Name</h3>
            <div className="h-10 w-full">
              <div className="mainInput w-full h-full rounded-xl">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full h-full p-3 rounded-md border-solid border-2 border-gray-200"
                  //   value=""
                />
              </div>
            </div>
          </div>
          <div className="my-5 w-6/7">
            <h3 className="ml-1 text-gray-500">Link URL</h3>
            <div className="h-10 w-full">
              <div className="mainInput w-full h-full rounded-xl">
                <input
                  type="text"
                  placeholder="Enter URL"
                  className="w-full h-full p-3 rounded-md border-solid border-2 border-gray-200"
                  //   value=""
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 my-5">
            <div className="mainButton w-full h-full rounded-xl">
              <button
                className="rounded-lg w-full py-2 cursor-not-allowed"
                disabled=""
                // style="background-color: gray; color: rgb(255, 255, 255);"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddLinkPopUp;
