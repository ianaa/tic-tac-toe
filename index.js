angular.module('ticTacToe', [])
.controller('Ctrl', ($scope) => {
  $scope.board = [
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
  ];
  $scope.player1 = 'X';
  $scope.player2 = 'O';
  $scope.move = $scope.player1;
  $scope.error = '';
  $scope.makeMove = function (move, index, row) {
    if (row[index] === '--') {
      row[index] = move;
      $scope.move = move == $scope.player1 ? $scope.player2 : $scope.player1;
      $scope.error = '';
    } else {
      $scope.error = 'please make a move on an empty cell';
    }
  };
});
