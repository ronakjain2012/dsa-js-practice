var Point = function (x, y) {
  this.x = x;
  this.y = y;
};

var DetectSquares = function () {
  this._points = [];
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  this._points.push(new Point(point[0], point[1]));
};

/**
 * @param {number[]} point
 * @return {number}DetectSquares.js
 */
DetectSquares.prototype.count = function (point) {
  this._points.push(new Point(point[0], point[1]));
  /** 
    4th y == 1st y 
    4th x == 2nd x 
    +
    3rd y == 2st y
   */
  return this._points;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
var seq = ['DetectSquares', 'add', 'add', 'add', 'count', 'count', 'add', 'count'];
var data = [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]];
var obj = new DetectSquares();
let output = [];
for (var i = 0; i < seq.length; i++) {
  if (seq[i] != 'DetectSquares' && seq[i] == 'add') {
    output.push(obj.add(seq[i][0]));
  }
  if (seq[i] != 'DetectSquares' && seq[i] == 'count') {
    output.push(obj.count(seq[i][0]));
  }
}
console.log(output);
