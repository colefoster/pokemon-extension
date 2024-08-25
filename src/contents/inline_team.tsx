import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList } from "plasmo"


function Button() {
  const battle = (window as any).app.curRoom.battle;
  const partyPokemon = battle.myPokemon;
  if (!partyPokemon) return null;

  const activePokemon = partyPokemon.filter((pokemon) => pokemon.active === true)[0];
  return (
    <>
    <div style={{
      display: "flex",
      flexDirection: "row",
      
      margin: 4,
      borderRadius: 4,
      padding: 10,
      background: "red",
    }}>
      {partyPokemon.slice(0,3).map((pokemon) => (
        <span
          key={pokemon.name}
          style={{
            left: 0,
            margin: 4,
            borderRadius: 4,
            padding: 10,
            background: "grey",
          }}
        >
          {pokemon.name}
        </span>
      ))}

      
    </div></>
  );
}
export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
    world: "MAIN",
    all_frames: true,
    run_at: "document_idle"
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  
  const anchor = document.querySelector('div.switchmenu');

 

  return {
    element: anchor,
    insertPosition: "afterend"
  }
  
}

export default Button