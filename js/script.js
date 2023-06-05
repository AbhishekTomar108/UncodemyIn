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


// function to limit the text in paragraph

const selector  = "review-text"
const maxLength  = 50;

// function truncateText(selector,maxLength) {

//   console.log('truncate is running')

//   var element = document.querySelectorAll(selector)
//   console.log('length =',element.length)
//   for(let i=0; i<element.length; i++)
//   {
//     truncated = element[i].innerText;
//     console.log('truncate text =',truncated.length)

//     if (truncated.length > maxLength) {
//         truncated = truncated.substr(0,maxLength) + '...';
//     }
  
//     element[i].innerText =  truncated
//   }
   
//   return truncated;
// }

window.onload = function() {
  truncateText(".review-text", 300);
  // console.log('Truncated text:', result);
};


function expandText(index) {
  var targetElement = document.getElementById('review-text-' + index);
  let showHideText = document.getElementsByClassName('show-hide')[index];
  
  const maxLength = 300;
  
  if (showHideText.innerText === "show more...") {
    showHideText.innerText = "show less";
  } else {
    showHideText.innerText = "show more...";
  }
  
  console.log('target element outside if-else', targetElement.style.height);
  
  var computedStyle = window.getComputedStyle(targetElement);
  var currentHeight = computedStyle.getPropertyValue('height');
  
  if (currentHeight === '67px') {
    console.log('target element', currentHeight);
    targetElement.style.height = 'auto';
  } else {
    targetElement.style.height = '67px';
  }
  



//   if (textElement.length > maxLength) {
//     console.log('if substr', index, textElement.length,textElement)
//     // textElement = textElement.substr(0,maxLength) + '...';
//     textElement = textElement.substr(0,maxLength) + '...';
// }
// else{
//   console.log('if substr', index)
//   console.log('textelement is running')
//   textElement = textElement.substr(0,textElement.length)
// }
  // textElement.classList.toggle('expanded');
}


function showVideo(){
  document.getElementById('videoContainer').style.display="block"
  var myFrame = videoContainer.querySelector("iframe");
  myFrame.src = "https://www.youtube.com/embed/N6KsC9Y00M8";
  document.getElementById('overlay').style.display="block"
}

function hideVideo(){
  console.log('hiding')
  document.getElementById('videoContainer').style.display="none"
  document.getElementById('overlay').style.display="none"
  var myFrame = videoContainer.querySelector("iframe");
  myFrame.src = ""; 
}

// function toggleIframe() {
//   var videoContainer =  document.getElementById('videoContainer');
  
  
//   if (videoContainer.style.display==="none") {
//     videoContainer.style.display = "block";
//   } else {
//     videoContainer.style.display = "none";
//     myFrame.src = ""; // Clear the iframe source when hiding it
//   }
// }

// code to run yt video



// Global variable to store the YouTube player object
// Function to load the YouTube player
// function loadYouTubePlayer() {
//   // Create an iFrame element
//   var iframe = document.createElement('iframe');

//   // Set the source of the iFrame to the YouTube video URL
//   iframe.src = 'https://www.youtube.com/embed?v=Sg8XVnCneXE';

//   // Set the width and height of the iFrame
//   iframe.width = '640';
//   iframe.height = '360';

//   // Append the iFrame to a container element
//   var container = document.getElementById('videoContainer');
//   container.appendChild(iframe);
// }

// // Attach the click event listener to the button
// var playButton = document.getElementById('playButton');
// playButton.addEventListener('click', function() {
//   console.log('play is running  ')
//   loadYouTubePlayer();
// });
