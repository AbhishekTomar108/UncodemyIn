console.log('running');

var courseNames = document.getElementsByClassName("course-name");

// Add event listener to each li element
for (var i = 0; i < courseNames.length; i++) {
  addEventListenerToCourse(i);
}

function addEventListenerToCourse(index) {
  courseNames[index].addEventListener("click", function () {
    var activeElement = document.getElementById("active");
    var checkElement = document.getElementById("check");
    if (activeElement) {
      activeElement.removeAttribute("id");
      checkElement.removeAttribute("id");
    }

    var addactiveElement = document.getElementsByClassName('course-card-thumb')[index];
    var courseElement = document.getElementsByClassName('course-name')[index];
    console.log('add active', index, addactiveElement);
    addactiveElement.setAttribute("id", "active");
    courseElement.setAttribute("id", "check");
  });
}

const movealumniright  =()=>{
  console.log('moving running')

  const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;
  // const MovedImage = document.querySelector('.alumni-image-detail-section').style.left;
  // console.log('move image ',MovedImage)

  const alumni = document.querySelector('.alumni-image-detail-section');
  const computedStyle = window.getComputedStyle(alumni);
  const leftValue = computedStyle.getPropertyValue('left');

  const alumniWidth  = alumni.clientWidth;
  console.log('width of section =',alumni.clientWidth)

  const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
  const currentMove = Math.abs(parseInt(leftValue));
  console.log('total width ',totalWidthToMove)
  console.log(currentMove)

  if((currentMove)>=totalWidthToMove){
    console.log('if =',currentMove,totalWidthToMove)
    alumni.style.left = `${(0)}px`
  }

  else{
    console.log('else =',currentMove,totalWidthToMove)
    alumni.style.left = `${(-currentMove-alumniWidth)}px`
  } 
   
}
const movealumnileft  =()=>{
  console.log('moving running')

  const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;
  // const MovedImage = document.querySelector('.alumni-image-detail-section').style.left;
  // console.log('move image ',MovedImage)

  const alumni = document.querySelector('.alumni-image-detail-section');
  const computedStyle = window.getComputedStyle(alumni);
  const leftValue = computedStyle.getPropertyValue('left');

  const alumniWidth  = alumni.clientWidth;
  console.log('width of section =',alumni.clientWidth)

  const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
  const currentMove = Math.abs(parseInt(leftValue));
  console.log('total width ',totalWidthToMove)
  console.log(currentMove)

  if((currentMove)<=0){
    console.log('if =',currentMove,totalWidthToMove)
    alumni.style.left = `${(-totalWidthToMove)}px`
  }

  else{
    console.log('else =',currentMove,totalWidthToMove)
    alumni.style.left = `${(-currentMove+alumniWidth)}px`
  } 
   
}
