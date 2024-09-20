import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList, PlasmoGetOverlayAnchor, PlasmoGetOverlayAnchorList } from "plasmo"

import { addLog } from "./log_manager"


function Button() {

  
  return (
    <div style={{
      padding: 0,
      marginLeft: 0,
      marginTop:55,
      bottom: 0,
    }}>
    <span style={{
      fontSize: 30,
      color: "green",
    }}> 
      ✅ 
    </span>
    </div>
  );
}
export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
}

export const getOverlayAnchorList: PlasmoGetOverlayAnchorList = async () => {
 return document.querySelectorAll('img.logo');


}

export default Button