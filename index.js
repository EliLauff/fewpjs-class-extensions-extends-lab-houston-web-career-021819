// Your code here
class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths;
  }

  get getCount() {
    return this.sideLengths.length;
  }

  get perimeter() {
    const sum = this.sideLengths.reduce((total, num) => total + num, 0);
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    const s1 = this.sideLengths[0];
    const s2 = this.sideLengths[1];
    const s3 = this.sideLengths[2];
    return s1 > s2 + s3 || s2 > s1 + s3 || s3 > s1 + s2 ? false : true;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sideLengths.every(side => side === this.sideLengths[0]);
  }

  get area() {
    if (this.isValid) return this.sideLengths[0] * this.sideLengths[0];
  }
}
