// Objects

// properties
let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName + " " + person.lastName);
console.log(person["firstName"] + " " + person["lastName"]);
console.log(person["xyz"]);
console.log(person.xyz);

// More Complex Object

let course = {
  id: "COMS-3163",
  name: "Web Programming",
  times: [
    {
      day: "Tuesday",
      startTime: "4:00 pm",
      endTime: "5:20pm",
    },
    {
      day: "Thursday",
      startTime: "4:00 pm",
      endTime: "5:20pm",
    },
  ],
};

function CourseInfo(course) {
  console.log(course.name);
  console.log(course.id);

  course.times.forEach((t) => {
    console.log(t.day + " " + t.startTime + " - " + t.endTime);
  });
}

CourseInfo(course);
