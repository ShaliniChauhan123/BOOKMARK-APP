import React from "react";
import "../../../../routes/Dashboard/styles.css";
const ChildFolder = (props) => {
  return (
    <div key={props.id} className="relative">
      <div className="folderComponent p-2 flex items-center justify-around cursor-pointer ">
        <img
          className="folderarrowmargin"
          src="https://bookmarksreact.netlify.app/static/media/closed_folder_arrow.c1d97d5a.svg"
          alt="folder-arrow"
        />
        <img
          src="https://bookmarksreact.netlify.app/static/media/folder_icon.568ab9fe.svg"
          alt="folder-icon"
        />{" "}
        <p class="ml-2 text-gray-500 w-2/3">{props.name}</p>
      </div>
    </div>
  );
};

export default ChildFolder;
