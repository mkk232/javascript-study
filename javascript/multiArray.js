const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']];
console.log(gameBoard); // [ [ 'X', 'O', 'X' ], [ 'O', null, 'X' ], [ 'O', 'O', 'X' ] ]

// 중앙의 null에 어떻게 접근을 할까 ? 
console.log(gameBoard[1]); // [ 'O', null, 'X' ]

console.log(gameBoard[1][1]); // null