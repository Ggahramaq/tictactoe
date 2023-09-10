const CELLS = document.querySelectorAll(".button-option");
const BOARD = document.querySelector('[data-board]');
const POPUPREF = document.querySelector(".popup");
const NEWGAMEBTN = document.getElementById("new-game");
const RESTARTBTN = document.getElementById("restart");
const MSGREF = document.getElementById("message");
let isPlayerX = false;


const WINING_CELLS = [
    [0,1,2],
    [1,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

const PLAYERS_CLASSES = {
    x: 'player-x',
    o: 'player-o'
};

const st