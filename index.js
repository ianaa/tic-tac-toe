angular.module('ticTacToe', [])
.controller('Ctrl', ($scope) => {
  $scope.player1 = 'X';
  $scope.player2 = 'O';
  $scope.move = $scope.player1;
  $scope.makeMove = function (move, index, row) {
    row[index] = move;
    $scope.move = move == $scope.player1 ? $scope.player2 : $scope.player1;
  };
  $scope.board = [
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
  ];
})
;
