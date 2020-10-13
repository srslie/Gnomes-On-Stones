  //make board array
const board = [[0, 1, 1, 1, 1, 1, 1, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 2, 2, 2, 2, 2, 2, 0],
];

const bLand = 2
const wLand = 1
const lava = 0
const whiteStone = ws
const whiteGnome = wg
const blackStone = bs
const blackGnome = bg

//set counter for turns, 6 moves per turns
//for current player, +1 to turnCount after ever move
  let turnCount = 0

//as a MOVE function condition, check if turnCount < 6
(turnCount < 6)

//add a ticker to the end of the MOVE function to add one to turnCount
  if (playerMakesMove) {
    turnCount + 1}

//next player's turn, reset ticker
function changeTurn(turnCount) {
  if (turnCount === 6) {
    turnCount = 0
  }
}

  let isBlackTurn = bool

  //define space states
class boardSpace {
  constructor(isEmpty, wsOccupied,bsOccupied, wgWsOccupied, wgBsOccupied, bsBsOccupied, bsWsOccupied, wgWLand, bgWLand, bgBLand, wgBLand, wEmptyLand, bEmptyLand) {
    this.isEmpty
    this.wsOccupied
    this.bsOccupied
    this.wgWsOccupied
    this.wgBsOccupied
    this.bsBsOccupied
    this.bsWsOccupied
    this.wgWLand
    this.bgWLand
    this.bgBLand
    this.wgBLand
    this.wEmptyLand
    this.bEmptyLand
    this.northNeighbor
    this.southNeighbor
    this.westNeighbor
    this.eastNeighbor}

    //^^all booleans.
    //if empty, cannot be any Occupied status, stones can only move on empty spaces
    //if emptyLand, must be either WLand or WLand,
    //gnomes can only move on the emptyLands or stoneOccupied spaces, but not if it is gnomeOcuppied

    verifyMove(playerColor, selectedPiece, stoneColor, gnomeColor, startSpace, endSpace) {

      //checks if player can move selectedPiece from startSpace to endSpace validly
        //if valid, returns true
      //check if playerColor is same as the selectedPieceColor
      //find out what kind of piece selectedPiece is;
        //if selectedPiece is stone can only move to empty place, no gnomes can be occupying that startSpace with it
        //if selectedPiece is gnome, it can move to any empty adjacent stone or land
      //check if selectedEnd is bLand, wLand, wEmptyLand, bEmptyLand


      if (playerColor === selectedPieceColor) {
        return
      }


       && (turnCount >= 6) && (endSpace.empty === true) {
        endSpace = selectedPiece)
      }
    }

    setup() {
      //put all these things where

    }
)


//check if move triggers win condition, so all of wLand is occupied by bg or all of bLand is occupied by wg
checkWin() {
if all bgWLand|| or wgBLand
}

//make a board with D3 library

svg.append("rect")
  .style("class", "fields")
