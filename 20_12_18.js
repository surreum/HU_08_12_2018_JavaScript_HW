function createStudent(name) {
    var student = {
        name: name
    }
    Object.setPrototypeOf (student, studentProto);
    return student;
}
var studentProto = {
    sleep: function () {
        return 'zzzz';
    }
}