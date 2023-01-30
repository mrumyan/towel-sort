
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];
  if (!arguments.length) {
    return result;
  }

  for (let i = 0; i < matrix.length; i++) {
    let columns = matrix[i].length;
    for (let j = 0; j < columns; j++) {
      result.push(matrix[i][i % 2 === 0 ? j : columns - 1 - j]);
    }
  }

  return result;
}