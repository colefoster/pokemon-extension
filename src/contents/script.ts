import type { PlasmoCSConfig } from "plasmo"
import { addLog } from "./log_manager"
 
export const config: PlasmoCSConfig = {
  matches: ["https://play.pokemonshowdown.com//*"],
  world: "MAIN"
}


const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => debounce(() => {
    // Trigger the re-render
    if (triggerRerender) {
      triggerRerender();  // This will trigger the component to re-render
    }

  }, 400)(
    
  ))});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

function debounce(callback, delay) {
  let timer
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback();
    }, delay)
  }
}


let triggerRerender;
export function setRerenderCallback(callback) {
  triggerRerender = callback;
}



  
