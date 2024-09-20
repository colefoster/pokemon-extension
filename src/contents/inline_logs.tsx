import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList } from "plasmo"
import React from "react";
import { useLogState } from "./log_manager"

export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
    world: "MAIN",
    all_frames: true,
    run_at: "document_idle"
}


export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
    
    const anchor = document.querySelector('div.pad');
        
    return {
        element: anchor,
        insertPosition: "afterbegin"
    }
    
}


export default function LogBox() {
   const logs = useLogState();
    
    const height = 205;

 

    return (
        <div
        style={{
            position: "relative",
            borderRadius: 4,
            padding: 0,
            border: "1px solid black",
            height: height,
            fontSize: 12,
            width: "100%",
            overflow: "auto",
        }}>
            <span
            style={{
                borderBottom: "1px solid black",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                background:"grey"

            }}>LOGS</span>
            
           {logs.map((log, index) => (
               <div key={index}>{"> " + log}</div>
           ))}
        </div>
    );
}