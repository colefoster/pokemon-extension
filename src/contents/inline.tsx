import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList } from "plasmo"


function Button() {
  const battle = window.app.curRoom.battle;
  const myParty = battle.myPokemon;
  const mySide = battle.mySide;
  const oppSide = battle.farSide;
  console.log(mySide)
  const myActive = mySide.active[0];
  const oppActive = oppSide.active[0];

  return (
    <>
      {myParty.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{
            left: 0,
            margin: 4,
            borderRadius: 4,
            padding: 10,
            background: "grey",
          }}
        >
          Pokemon: {pokemon.name} <br />
        </div>
      ))}
    </>
  );
}
export const config: PlasmoCSConfig = {
    matches: ["https://play.pokemonshowdown.com//*"],
    world: "MAIN"
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  
  const anchors = document.querySelectorAll('div.controls');
  return Array.from(anchors).map((element) => ({
    element,
    insertPosition: "beforebegin"
  }))
  
}


export default Button