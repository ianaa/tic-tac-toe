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
      $scope.error = $scope.checkWin(row, index) ? `We have a winner!!! Conrats ${$scope.move}` : '';
      $scope.move = move == $scope.player1 ? $scope.player2 : $scope.player1;
    } else {
      $scope.error = 'please make a move on an empty cell';
    }
  };
  $scope.checkWin = function (row, index) {
    if (row.every(cell => cell === row[index])) {
      return true;
    }
    if ($scope.board.every((item) => { item[index] === row[index]; })) {
      return true;
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
