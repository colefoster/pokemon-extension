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
  const [height, setHeight] = useState(130); // Default height

 

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

  const gens = new Generations(Dex);
  const gen = battle.gen

  let farSideInfo;
  try {
    farSideInfo = battle.farSide;
  } catch (e) {
    addLog("Error getting far side info");
    addLog(e);
    return null;
  }

  let farPokemon;
  try {
    farPokemon = gens.dex.species.get(farSideInfo.active[0].speciesForme);
  } catch (e) {
    addLog("Error getting far pokemon");
    addLog(e);
    return null;
  }

  let farType;
  try {
    farType = farPokemon.types;
  } catch (e) {
    addLog("Error getting far type");
    addLog(e);
    return null;
  }

  let farBackground;
  if (farType.length === 2) {
    farBackground = getTypeGradient(farType[0], farType[1]);
  } else if (farType.length === 1) {
    farBackground = getTypeGradient(farType[0]);
  } else {
    farBackground = "black";
    addLog("Error getting far background, made black");
  }

  const width = document.querySelector("div.battle")?.clientWidth;
  const margin = 4;
  const padding = 4;

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
          minHeight: height,
          borderRadius: 12,
          border: "black solid 4px",
        }}
      >
        {/* Top-right background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: farBackground,
            borderRadius: 12,
          }}
        />

        {/* Top-right text */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          

          {farPokemon.name}
          <br />
          <PokemonSprite Name={farPokemon.name} gen={"gen5"}/>
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
