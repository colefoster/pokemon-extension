import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList, PlasmoGetOverlayAnchor, PlasmoGetOverlayAnchorList } from "plasmo"

import styleText from "data-text:./inline.css"
import type { PlasmoGetStyle } from "plasmo"
 
export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}
function Button() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      borderRadius: 4,
      padding: 10,
    }}>
    <div
      style={{
        minHeight: 100,
        borderRadius: 4,
        padding: 4,
      }}>
    </div>
    <div
      style={{
        borderRadius: 4,
        padding: 4,
        background: "green",
        color: "white",
      }}>
        
      New Main Overlay
    </div>
    </div>
  );
}
export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
}

export const getOverlayAnchorList: PlasmoGetOverlayAnchorList = async () => {
  const elements = document.querySelectorAll('div.battle-controls');
  console.log({elements})
  if(elements.length > 0){
    return elements
  }

  const elements2 = document.querySelectorAll('div.controls');
  console.log({elements2})

  if(elements2.length > 0){
    return elements2
  }

  return null
}


export default Button