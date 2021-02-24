
exports.min = function min (array) {
  if (array == undefined) return 0;
  if (array.length == 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (array == undefined) return 0;
  if (array.length == 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array == undefined) return 0;
  if (array.length == 0) return 0;
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return (total / array.length);
}
