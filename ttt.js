var board = [" ", " ", " "," ", " ", " "," ", " ", " "]

var mark = function(board, square, mark) {
  if (square == "a1\n") {
    if (board[0] == " ") {
      board[0] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "a2\n") {
    if (board[1] == " ") {
      board[1] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "a3\n") {
    if (board[2] == " ") {
      board[2] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "b1\n") {
    if (board[3] == " ") {
      board[3] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "b2\n") {
    if (board[4] == " ") {
      board[4] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "b3\n") {
    if (board[5] == " ") {
      board[5] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "c1\n") {
    if (board[6] == " ") {
      board[6] = mark;
      return true;
    } else {
      return false;
    }
  } else if (square == "c2\n") {
    if (board[7] == " ") {
      board[7] = mark;
      return true;      
    } else {
      return false;
    }
  } else if (square == "c3\n") {
    if (board[8] == " ") {
      board[8] = mark;
      return true;      
    } else {
      return false;
    }
  }
}

var checkWin = function(board, mark){
  if (
      (board[0] == mark && board[1] == mark && board[2] == mark) ||
      (board[3] == mark && board[4] == mark && board[5] == mark) ||
      (board[6] == mark && board[7] == mark && board[8] == mark) ||
      (board[0] == mark && board[3] == mark && board[6] == mark) ||
      (board[1] == mark && board[4] == mark && board[7] == mark) ||
      (board[2] == mark && board[5] == mark && board[8] == mark) ||
      (board[0] == mark && board[4] == mark && board[8] == mark) ||
      (board[2] == mark && board[4] == mark && board[6] == mark)    
    ) {
    return true;
  } else {
    return false;
  }
}

var newTurn = function(currentTurn) {
  if (currentTurn == "x") {
    var turn = "y";
    return turn;
  } else if (currentTurn == "y") {
    var turn = "x";
    return turn;
  }
}

var renderBoard = function(board, turn) {
  console.log("Turn: " + turn)
  console.log("|" + board[0] + "|" + board[1] + "|" + board[2] + "|");
  console.log("|" + board[3] + "|" + board[4] + "|" + board[5] + "|");
  console.log("|" + board[6] + "|" + board[7] + "|" + board[8] + "|");
}

var nextTurn = "y";

process.stdin.on('readable', function() {
  var square = process.stdin.read();
  var currentTurn = nextTurn;
  if (mark(board, square, nextTurn)) {
    if (checkWin(board, currentTurn)) {
      console.log(currentTurn + " wins!");
    } else {
      nextTurn = newTurn(currentTurn);    
    }
  }
  renderBoard(board, nextTurn);  
});


