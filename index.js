angular.module('ticTacToe', [])
.controller('Ctrl', ($scope) => {
  // $scope.board = [
  //   ['--', '--', '--'],
  //   ['--', '--', '--'],
  //   ['--', '--', '--'],
  // ];
  // $scope.move = $scope.player1;
  // $scope.error = '';
  $scope.player1 = 'X';
  $scope.player2 = 'O';
  $scope.makeMove = function (move, index, row) {
    if (row[index] === '--') {
      row[index] = move;
      const state = $scope.checkWin(row, index);
      $scope.error = state ? state == 1 ? `We have a winner!!! Conrats ${$scope.move}` : 'We have a draw!' : '';
      $scope.move = move == $scope.player1 ? $scope.player2 : $scope.player1;
    } else {
      $scope.error = 'please make a move on an empty cell';
    }
  };
  $scope.checkWin = function (row, index) {
    console.log('row number', $scope.board.indexOf(row));

    if (row.every(cell => cell === row[index])) {
      return 1;
    }
    if ($scope.board.every(item => item[index] === row[index])) {
      return 1;
    }
    if ([$scope.board[0][0], $scope.board[1][1], $scope.board[2][2]].every((item) => item === row[index])
    || [$scope.board[0][2], $scope.board[1][1], $scope.board[2][0]].every(item => item === row[index])) {
      return 1;
    }
    if ($scope.board.every(item => item.every(el => el !== '--'))) {
      return 2;
    }
    return false;
  };
  $scope.newBoard = function () {
    $scope.board = [
      ['--', '--', '--'],
      ['--', '--', '--'],
      ['--', '--', '--'],
    ];
    $scope.error = '';
    $scope.move = $scope.player1;
  };
  $scope.newBoard();
});
