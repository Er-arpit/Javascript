const course = {
    name : "Javascript in hindi",
    price : "499",
    course_teacher: "Vipin sir",
    Discount : "20% Off"
}


// console.log(course.course_teacher);

// D-istracture
// const {course_teacher}=course;
// console.log(course_teacher);

const {course_teacher : teacher}=course;
console.log(teacher);


