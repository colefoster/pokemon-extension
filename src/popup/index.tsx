import { useStorage } from "@plasmohq/storage/hook";
import { addLog } from "~src/contents/log_manager";
import { Storage } from "@plasmohq/storage"
import { get } from "http";
import { useState } from "react";
 


function Popup() {

  



  return (
    <div
      style={{
        minWidth: 200,
        padding: 4,
        margin: 4,
        borderRadius: 12,
        border: "black solid 4px",
      }}>
      <h2>Options</h2>
      

      <label>
        Height:
        
      </label>
    </div>
  );
}

export default Popup;
