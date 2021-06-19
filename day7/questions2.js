// question 1
let student={
  name:"David Rayy",
  sclass="VI",
  rollno: 12,

};
console.log(Object.keys(student));

//  question2
let student={
  name:"David Rayy",
  sclass="VI",
  rollno: 12,

};
let del=student.pop();
console.log(student);

// question 3
let student={
  name:"David Rayy",
  sclass="VI",
  rollno: 12,

};
console.log(Object.keys(student).length);


//question 4

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
for(i in library)
{
  console.log(library[i].author)
  console.log(library[i].title)
  console.log(library[i].readingStatus)

}
//  question 5
let cylinder={r:3,h:8}
v=2*3.14*r*h;
console.log("volume of ",v);

// question 6
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
library.sort((a,b)=>a.libraryID-b.libraryID);
console.log(library)
