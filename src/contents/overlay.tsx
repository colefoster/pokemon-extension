import type { PlasmoCSConfig, PlasmoGetOverlayAnchorList } from "plasmo"


function Button() {
  return (
    <div
      style={{
        
        borderRadius: 4,
        padding: 4,
        background: "green"
      }}>
      RUNNING
    </div>
  );
}
export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
}

export const getOverlayAnchorList: PlasmoGetOverlayAnchorList = async () => {
  return document.querySelectorAll("div.battle")
  
}


export default Button