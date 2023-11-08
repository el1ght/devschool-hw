var Vector = function (components) {
    this.data = components;
};

Vector.prototype.add = function (vector) {
    if (this.data.length !== vector.data.length) throw new Error();
    let newData = [];
    this.data.forEach((n, idx) => newData.push(n + vector.data[idx]));
    return new Vector(newData);
};

Vector.prototype.subtract = function (vector) {
    if (this.data.length !== vector.data.length) throw new Error();
    let newData = [];
    this.data.forEach((n, idx) => newData.push(n - vector.data[idx]));
    return new Vector(newData);
};

Vector.prototype.dot = function (vector) {
    if (this.data.length !== vector.data.length) throw new Error();
    return this.data.reduce((N, n, idx) => N + n * vector.data[idx], 0);
};

Vector.prototype.norm = function () {
    return Math.sqrt(this.data.reduce((N, n) => N + n * n, 0));
};

Vector.prototype.toString = function () {
    return '(' + this.data.toString() + ')';
};

Vector.prototype.equals = function (vector) {
    return this.data.every((n, idx) => n === vector.data[idx]);
};