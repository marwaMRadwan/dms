var log = console.log;
var Student = /** @class */ (function () {
    function Student(n, a, g) {
        if (g === void 0) { g = []; }
        this.name = n;
        this.age = a;
        this.grades = g;
    }
    Student.prototype.addGrade = function (g) {
        this.grades.push(g);
    };
    Student.prototype.showData = function () {
        log("".concat(this.name, " - ").concat(this.age, " - "));
        // log(this.name, " - ", this.age, " - ")
        this.grades.forEach(function (g) { return log(g.subject, " - ", g.degree, " - "); });
    };
    return Student;
}());
var s1 = new Student("marwa", 39);
s1.addGrade({ "subject": "math", "degree": 70 });
s1.showData();
