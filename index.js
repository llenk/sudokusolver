function sudokuToArray(board) {
  for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
      board[i][j] = document.getElementById('vc_'+i+'_'+j).innerHTML;
    }
  }
}

function createBoard() {
  var board = new Array(9);
  for (var i=0; i<9; i++) {
    board[i] = new Array(9);
  }
  return board;
}
