function sudokuToArray(board) {
  //Representation of the board is 90 degrees from what shows up on screen.
  for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
      board[i][j].value = document.getElementById('vc_'+i+'_'+j).innerHTML;
    }
  }
  return board;
}

function createBoard() {
  var board = new Array(9);
  for (var i=0; i<9; i++) {
    board[i] = new Array(9);
    for (var j=0; j<9; j++) {
      board[i][j] = new Object();
      board[i][j].value = "";
      board[i][j].poss = new Array();
      board[i][j].indexVals = [i, j];
    }
  }
  return board;
}

function checkPossInitial(board, element) {
  //Goes through and checks all possibilites for single element. Used to create
  //initial possibilies array. Inefficient to do every time program checks
  //possibilies.
  element.poss = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //check horizontal row
  for (var i=0; i<9; i++) {
    if (i!=element.indexVals[0]) {
      if (board[i][element.indexVals[1]].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[i][element.indexVals[1]].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
  }
  //check vertical row
  for (var i=0; i<9; i++) {
    if (i!=element.indexVals[1]) {
      if (board[element.indexVals[0]][i].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[element.indexVals[0]][i].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
  }
  //check rest of box
}
