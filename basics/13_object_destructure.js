const course={
    courseName : "js in hindi",
    price :"90",
    cousrseInstructor:"shivam"
}
// course.cousrseInstructor
const {cousrseInstructor:instructor}=course // now instead of courseInstructor you can use name instructor 
console.log(instructor); // above code called destructure of the object

// in api json come as {} and keys used as string or we get array of objects 
/*
  {
    "name" :"shivam",
    " courseName" :"js" 
  }
*/
