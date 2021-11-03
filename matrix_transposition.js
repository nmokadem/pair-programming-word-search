function transpose1(matrix) {
  let finalresult = matrix.reduce((result, smallArray) => smallArray.map((element, index) =>
  (result[index] || []).concat(element)
  ), []);
  return finalresult
}

const transpose = function(matrix) {
  let rows = 0;
  let cols = 0;
  for (const row of matrix) {
    if (rows === 0) {
      for (const el of row) {
        cols++;
      }
    }
    rows++;
  }

  let thisArray = new Array(cols);
  for (let i = 0; i < cols; i++) {
    thisArray[i] = new Array(rows);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      thisArray[j][i] = matrix[i][j];
    }
  }

  return thisArray;
};

module.exports = transpose;

//Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write('\n');
//   }
// };

// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

// console.log('----');

// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----');

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

/*
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
----
1 3 5
2 4 6
----
1
2
3
4
5
6
7
*/
