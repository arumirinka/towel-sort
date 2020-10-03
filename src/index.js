module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((acc, val, i) => acc.concat(i%2 ? val.reverse() : val), []) : [];
}
