import React, { useEffect, useState } from "react";
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchorList,
} from "plasmo";
import { Dex } from "@pkmn/dex";
import { Generations } from "@pkmn/data";
import { setRerenderCallback } from "./script";
import { getTypeGradient } from "src/functions/type_background";
import { addLog } from "./log_manager";

import { PokemonSprite } from "./pokemon_sprite";

function Button() {


  

  
  const [update, setUpdate] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [battle, setBattle] = useState<any>(null);
  

  useEffect(() => {
    setRerenderCallback(() => {
      setUpdate((prev) => prev + 1); // Increment the state to trigger re-render
    });
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        let currentBattle = null;
        try {
          currentBattle = (window as any).app.curRoom.battle;
        } catch (e) {
          addLog("Error getting current battle");
        }

        if (currentBattle) {
          setBattle(currentBattle);
          setIsLoaded(true);
          clearInterval(interval); // Stop the interval once the battle is found
        }
      }, 200);

      // Cleanup the interval if the component unmounts
      return () => clearInterval(interval);
    }
  }, [update]);

  if (!isLoaded || !battle) return null;

  const gen = battle.gen
  const gens = new Generations(Dex);




  let mySideInfo;
  try {
    mySideInfo = battle.mySide;
  } catch (e) {
    addLog("Error getting my side info");
    addLog(e);
    return null;
  }

  let myPokemon;
  try {
    myPokemon = gens.dex.species.get(mySideInfo.active[0].speciesForme);
  } catch (e) {
    addLog("Error getting my pokemon");
    addLog(e);
    return null;
  }


  


  let myType;
  try {
    myType = myPokemon.types;
  } catch (e) {
    addLog("Error getting my type");
    addLog(e);
    return null;
  }

  let myBackground;
  if (myType.length === 2) {
    myBackground = getTypeGradient(myType[0], myType[1]);
  } else if (myType.length === 1) {
    myBackground = getTypeGradient(myType[0]);
  } else {
    myBackground = "black";
    addLog("Error getting my background, made black");
  }

  const width = document.querySelector("div.battle")?.clientWidth;
  const margin = 4;
  const padding = 4;
  const minHeight = 200;

  return (
    <div
      style={{
        display: "flex",
        left: 0,
        width: width,
        flexDirection: "column",
        borderRadius: 12,
        padding: padding,
        margin: margin,
      }}
    >
      <div
        style={{
          position: "relative",
          minHeight: minHeight,
          borderRadius: 12,
          border: "black solid 4px",
        }}
      >
        {/* Bottom-left background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 12,
            background: myBackground,
          }}
        />

        {/* Bottom-left text */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <PokemonSprite Name={myPokemon.name} gen={"gen5ani"}/>
          <br />
          {myPokemon.name}
        </div>
      </div>
    </div>
  );
}

export const config: PlasmoCSConfig = {
  matches: ["https://play.pokemonshowdown.com//*"],
  world: "MAIN",
  run_at: "document_idle",
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const elements = document.querySelectorAll("div.battle-controls");
  if (elements.length > 0) {
    return Array.from(elements).map((element) => ({
      element,
      insertPosition: "beforeend",
    }));
  }

  const elements2 = document.querySelectorAll("div.controls");

  if (elements2.length > 0) {
    return Array.from(elements2).map((element) => ({
      element,
      insertPosition: "beforeend",
    }));
  }

  return null;
};

export default Button;
