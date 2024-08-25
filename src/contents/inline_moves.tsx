import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList } from "plasmo"

import styleText from "data-text:./inline.css"
import type { PlasmoGetStyle } from "plasmo"
 
export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}
function Button() {

  const battle = (window as any).app.curRoom.battle;
  const partyPokemon = battle.myPokemon;
  const activePokemon = partyPokemon.filter((pokemon) => pokemon.active === true)[0];

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      
      borderRadius: 4,
      padding: 10,
      background: "teal",
    }}>
      {
      activePokemon.moves.map((move) => {
        const deepMove = (window as any).BattleMovedex[move]
        return (
        <div
          key={deepMove.num}
          style={{
            margin: 4,
            borderRadius: 4,
            padding: 10,
            background: "grey",
          }}
        >
          move: {deepMove.name} <br />
        </div>
      )})}
    </div>
  );
}
export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
    world: "MAIN",
    all_frames: true,
    run_at: "document_idle"
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  
  const anchor = document.querySelector('label.megaevo');

  
  if(anchor){
    return {
      element: anchor,
      insertPosition: "beforebegin"
    }
  }

  const noTeraAnchor = document.querySelector('div.movemenu');
  return {
    element: noTeraAnchor,
    insertPosition: "afterend"
  }
  
}
export default Button