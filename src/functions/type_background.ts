import { addLog } from "~src/contents/log_manager";

// Define constants for each Pokémon type and their respective colors
const TYPE_COLORS: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};

export function getTypeGradient(type1: string, type2?: string): string {
    let color1 = TYPE_COLORS[type1.toLowerCase()];
    let color2 = type2 ? TYPE_COLORS[type2.toLowerCase()] : lightenHexColor(color1, 30);

    if (!color1) {
        addLog(`Error: Invalid type1 '${type1}'`);
        return "";
    }

    if (!color2) {
        addLog(`Error: Invalid type2 '${type2}'`);
        return "";
    }

    // Convert both colors to uppercase for consistency
    color1 = color1.toUpperCase();
    color2 = color2.toUpperCase();

    return `linear-gradient(70deg, ${color1} 0%, ${color2} 100%)`;
}

export function lightenHexColor(hex: string, percent: number): string {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Adjust color by the percentage (0% to 100%)
    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

    // Convert back to hex and return
    return `#${r.toString(16).padStart(2, '0').toUpperCase()}${g.toString(16).padStart(2, '0').toUpperCase()}${b.toString(16).padStart(2, '0').toUpperCase()}`;
}
