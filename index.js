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
      board[i][j].poss = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      board[i][j].indexVals = [i, j];
    }
  }
  return board;
}

function checkPossElement(board, element) {
  //Goes through and checks all possibilites for single element.
  var a = element.indexVals[0];
  var b = element.indexVals[1];
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
  //check rest of box (4 elements left)
  if (a%3 === 0) {
    if (b%3 === 0) {
      //upper left
      if (board[a+1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b+2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b+2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+2][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+2][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+2][b+2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+2][b+2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
    else if (b%3 === 1) {
      //center left
      if (board[a+1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+2][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+2][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+2][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+2][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
    else if (b%3 === 2) {
      //lower left
      if (board[a+1][b-2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b-2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+2][b-2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+2][b-2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+2][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+2][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
  }
  if (a%3 === 1) {
    if (b%3 === 0) {
      //upper center
      if (board[a-1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b+2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b+2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b+2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b+2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
    else if (b%3 === 1) {
      //center
      if (board[a-1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
    else if (b%3 === 2) {
      //lower center
      if (board[a-1][b-2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b-2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b-2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b-2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a+1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a+1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
  }
  if (a%3 === 2) {
    if (b%3 === 0) {
      //upper right
      if (board[a-2][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-2][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-2][b+2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-2][b+2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b+2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b+2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
    else if (b%3 === 1) {
      //center right
      if (board[a-2][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-2][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-2][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-2][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b+1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b+1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
    else if (b%3 === 2) {
      //lower right
      if (board[a-2][b-2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-2][b-2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-2][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-2][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b-2].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b-2].value) {
            element.poss.splice(j, 1);
          }
        }
      }
      if (board[a-1][b-1].value) {
        for (var j=0; j<element.poss.length; j++) {
          if (element.poss[j]===board[a-1][b-1].value) {
            element.poss.splice(j, 1);
          }
        }
      }
    }
  }
}

function fillInBoard(board) {
  var progress = false;
  for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
      if (board[i][j].poss.length===1) {
        document.getElementById('vc_'+i+'_'+j).innerHTML = board[i][j].poss[0];
        board[i][j].value = board[i][j].poss[0];
        board[i][j].poss = [];
        progress = true;
      }
    }
  }
  return progress;
}

function checkPossBoard(board) {
  //checks possibilities for whole board
  for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
      checkPossElement(board, board[i][j]);
    }
  }
}

function checkSolved(board) {
  var solved = true;
  for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
      if (board[i][j].value === " ") {
        solved = false;
      }
    }
  }
  return solved;
}

function printBoard(board) {
  for (var i=0; i<9; i++) {
    var string = "";
    for (var j=0; j<9; j++) {
      string += board[j][i].value + " ";
    }
    console.log(string);
  }
}

function playGame() {
  var board = createBoard();
  sudokuToArray(board);
  var makingProgress = true;
  while (!checkSolved(board) && makingProgress) {
    makingProgress = false;
    checkPossBoard(board);
    makingProgress = fillInBoard(board);
  }
  if (checkSolved(board)) {
    alert("Solved!");
  }
  else {
    alert("Sorry, I couldn't solve it.")
  }
}
