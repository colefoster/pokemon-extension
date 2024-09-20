export interface Pokemon {
    ability: string;
    baseAbility: string;
    boosts: Record<string, number>; // Empty object, but might contain stat boosts like {atk: 1, def: -1}
    fainted: boolean;
    gender: string;
    hp: number;
    hpcolor: string;
    ident: string;
    item: string;
    itemEffect: string;
    lastMove: string;
    level: number;
    maxhp: number;
    moveTrack: string[]; // Array of moves used
    moves: string[]; // Array of current moves
    movestatuses: Record<string, string>; // Could contain move status like {burn: "active"}
    name: string;
    prevItem: string;
    prevItemEffect: string;
    searchid: string;
    shiny: boolean;
    side: Side;
    speciesForme: string;
    sprite: PokemonSprite;
    status: string; // Status like 'par', 'brn', etc.
    statusData: StatusData;
    statusStage: number;
    teraType: string;
    terastallized: string;
    timesAttacked: number;
    volatiles: Record<string, unknown>; // Status effects that might persist
  }
  export interface Side {
    active: (Pokemon | null)[];
    ally: Side | null;
    avatar: string;
    badges: string[];
    battle: Battle;
    faintCounter: number;
    foe: Side;
    isFar: boolean;
    lastPokemon: Pokemon | null;
    missedPokemon: PokemonSprite | null;
    n: number;
    name: string;
    pokemon: Pokemon[]; // List of Pokemon on this side
    rating: string;
    sideConditions: Record<string, unknown>;
    sideid: string;
    totalPokemon: number;
    wisher: string | null;
    x: number;
    y: number;
    z: number;
  }
  interface StatusData {
    sleepTurns: number;
    toxicTurns: number;
  }
  
  interface PokemonSprite {
    scene: BattleScene;
    $el: HTMLElement | null;
    x: number;
    y: number;
  }
  

export interface BattleData {
    battle: Battle;
    activeMoveIsSpread: null | boolean;
    atQueueEnd: boolean;
    autoresize: boolean;
    compatMode: boolean;
    currentStep: number;
    debug: boolean;
    dex: Dex;
    endLastTurnPending: boolean;
    ended: boolean;
    farSide: Side;
    gameType: string;
    gen: number;
    graceTimeLeft: number;
    hardcoreMode: boolean;
    ignoreNicks: boolean;
    ignoreOpponent: boolean;
    ignoreSpects: boolean;
    isBlitz: boolean;
    isReplay: boolean;
    joinButtons: boolean;
    kickingInactive: boolean;
    lastMove: string;
    messageFadeTime: number;
    messageShownTime: number;
    mute: boolean;
    myAllyPokemon: null | Pokemon;
    myPokemon: null | Pokemon;
    mySide: Side;
    nearSide: Side;
    onResize: () => void;
    p1: Side;
    p2: Side;
    p3: null | Side;
    p4: null | Side;
    paused: boolean;
    pokemonControlled: number;
    preemptStepQueue: any[];
    pseudoWeather: any[];
    rated: boolean;
    roomid: string;
    rules: Record<string, number>;
    scene: BattleScene;
    seeking: null | boolean;
    sides: Side[];
    speciesClause: boolean;
    started: boolean;
    stepQueue: string[];
    subscription: () => void;
    teamPreviewCount: number;
    tier: string;
    totalTimeLeft: number;
    turn: number;
    turnsSinceMoved: number;
    usesUpkeep: boolean;
    viewpointSwitched: boolean;
    waitForAnimations: boolean;
    weather: string;
    weatherMinTimeLeft: number;
    weatherTimeLeft: number;
    battleEnded: boolean;
    battlePaused: boolean;
    callbackWaiting: boolean;
    chatHistory: ChatHistory;
    choice: undefined | string;
    cid: string;
    controlsShown: boolean;
    el: HTMLDivElement;
    id: string;
    isSideRoom: undefined | boolean;
    leftWidth: number;
    tabComplete: TabComplete;
    title: string;
    tooltips: BattleTooltips;
    userActivity: any[];
    userCount: { users: number };
    userList: any;
    users: Record<string, unknown>;
  }
  
  interface Battle { /* Define this interface based on your actual Battle class */ }
  
  interface Dex {
    gen: number;
    modid: string;
    cache: null | unknown;
    statNames: string[];
    statNamesExceptHP: string[];
  }
  
  
  interface BattleScene {
    battle: Battle;
    animating: boolean;
    acceleration: number;
    gen: number;
    mod: string;
    // Add additional fields as needed
  }
  
  interface ChatHistory {
    lines: string[];
    index: number;
  }
  
  interface TabComplete {
    candidates: null | string[];
    index: number;
    prefix: null | string;
    cursor: null | number;
    reset: () => void;
  }
  
  interface BattleTooltips {
    battle: Battle;
    clickTooltipEvent: (e: Event) => void;
    holdLockTooltipEvent: (e: Event) => void;
    showTooltipEvent: (e: Event) => void;
  }
  