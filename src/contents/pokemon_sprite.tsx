import React, { useEffect, useRef, useState } from "react";
import { Sprites} from '@pkmn/img';

type gens = "gen1rg" | "gen1rb" | "gen1" | "gen2g" | "gen2s" | "gen2" | "gen3rs" | "gen3frlg" | "gen3" | "gen3-2" | "gen4dp" | "gen4dp-2" | "gen4" | "gen5" | "gen5ani" | "ani" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

let forcedGen;
 const PokemonSprite: React.FC<{ Name: string, gen: gens, shiny?: boolean }> = ({ Name, gen, shiny }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [spriteGen, setSpriteGen] = useState<string | number>(forcedGen || gen);

  useEffect(() => {
    // Create a new DOM element
    const { url, w, h, pixelated } = Sprites.getPokemon(Name, { gen: gen, shiny: shiny || false });
    const sprite = document.createElement('img');
    sprite.src = url;
    sprite.width = w;
    sprite.height = h;
    if (pixelated) sprite.style.imageRendering = 'pixelated';

    // Append the created element to the container div
    if (containerRef.current) {
      containerRef.current.appendChild(sprite);
    }
  }, []);

  return <span ref={containerRef} onClick={
    () => {
      const gens = ["gen1rg" , "gen1rb" , "gen1" , "gen2g" , "gen2s" , "gen2" , "gen3rs" , "gen3frlg" , "gen3" , "gen3-2" , "gen4dp" , "gen4dp-2" , "gen4" , "gen5" , "gen5ani" , "ani" , 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]
      console.log("Clicked on " + Name);
      setSpriteGen(gens[(gens.indexOf(spriteGen) + 1) % gens.length]);
      forcedGen = gens[(gens.indexOf(spriteGen) + 1) % gens.length];
    }
  }/>;
  
};

export { PokemonSprite };
