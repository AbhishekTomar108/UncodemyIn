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
    const container = addactiveElement.parentElement;
    container.scrollTop = addactiveElement.offsetTop;



    // parentContainer.scrollTo({ behavior: 'smooth', block: 'start' });
    courseElement.setAttribute("id", "check");
  });
}

const certificateRight = ()=>{



     
  const totalCertificateLenght  = document.getElementsByClassName('certicate-image').length;
 

  const certificate = document.querySelector('.certificate-right-box');
 

  const computedCertificateStyle = window.getComputedStyle(certificate);
  const certificateWidth = parseFloat(computedCertificateStyle.getPropertyValue('width'));
  const certificateLeftValue = computedCertificateStyle.getPropertyValue('left');




  const totalCertificateWidthToMove = (totalCertificateLenght-1)*certificateWidth;
  const currentCertificateMove = Math.abs(parseFloat(certificateLeftValue));
  console.log('left value = ',certificateLeftValue,parseInt(certificateLeftValue),certificateWidth)
  // const currentCertificateMove = parseInt(certificateLeftValue);
  console.log('total width ',totalCertificateWidthToMove)
  console.log(currentCertificateMove)

  if((currentCertificateMove)>=totalCertificateWidthToMove-1){
    console.log('if =',currentCertificateMove,totalCertificateWidthToMove)
    certificate.style.left = `${(0)}px`
  }

  else{
    console.log('else =',currentCertificateMove,totalCertificateWidthToMove)
    certificate.style.left = `${(-currentCertificateMove-certificateWidth)}px`
  }

  
}

const certificateLeft = ()=>{

     
  const totalCertificateLenght  = document.getElementsByClassName('certicate-image').length;
 

  const certificate = document.querySelector('.certificate-right-box');
 

  const computedCertificateStyle = window.getComputedStyle(certificate);
  const certificateWidth = parseFloat(computedCertificateStyle.getPropertyValue('width'));
  const certificateLeftValue = computedCertificateStyle.getPropertyValue('left');

  const totalCertificateWidthToMove = (totalCertificateLenght-1)*certificateWidth;
  const currentCertificateMove = Math.abs(parseFloat(certificateLeftValue));
 

  
  if((currentCertificateMove)<=1){
 
    certificate.style.left = `${(-totalCertificateWidthToMove)}px`
  }

   else{
    
    certificate.style.left = `${(-currentCertificateMove+certificateWidth)}px`
  } 
  
}


const movealumniright  =()=>{
  
  // clearInterval(alumniInterval)

  const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;
  // const MovedImage = document.querySelector('.alumni-image-detail-section').style.left;
  // console.log('move image ',MovedImage)

  const alumni = document.querySelector('.alumni-image-detail-section');
  const computedStyle = window.getComputedStyle(alumni);
  const leftValue = computedStyle.getPropertyValue('left');

  const alumniWidth  = alumni.clientWidth;


  const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
  const currentMove = Math.abs(parseInt(leftValue));


  if((currentMove)>=totalWidthToMove){
    
    alumni.style.left = `${(0)}px`
  }

  else{
    
    alumni.style.left = `${(-currentMove-alumniWidth)}px`
  } 
   
}
const movealumnileft  =()=>{


  // clearInterval(alumniInterval)

  const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;
  // const MovedImage = document.querySelector('.alumni-image-detail-section').style.left;
  // console.log('move image ',MovedImage)

  const alumni = document.querySelector('.alumni-image-detail-section');
  const computedStyle = window.getComputedStyle(alumni);
  const leftValue = computedStyle.getPropertyValue('left');

  const alumniWidth  = alumni.clientWidth;
  

  const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
  const currentMove = Math.abs(parseInt(leftValue));


  if((currentMove)<=0){
 
    alumni.style.left = `${(-totalWidthToMove)}px`
  }

  else{
 
    alumni.style.left = `${(-currentMove+alumniWidth)}px`
  } 
   
}


// function to limit the text in paragraph

const selector  = "review-text"
const maxLength  = 50;



let alumniInterval = null

window.onload = function() {
  

  // ------------- alumni auto crousel ------------------
  alumniInterval = setInterval(()=>{

    // ------------- alumni auto crousel ---------------

    const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;

  
    const alumni = document.querySelector('.alumni-image-detail-section');
    const computedStyle = window.getComputedStyle(alumni);
    const leftValue = computedStyle.getPropertyValue('left');
  
    const alumniWidth  = alumni.clientWidth;

  
    const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
    const currentMove = Math.abs(parseInt(leftValue));
  
  
    if((currentMove)>=totalWidthToMove){
     
      alumni.style.left = `${(0)}px`
    }
  
    else{
    
      alumni.style.left = `${(-currentMove-alumniWidth)}px`
    }


    // --------- certificate auto crousel --------------
      
  const totalCertificateLenght  = document.getElementsByClassName('certicate-image').length;
 

  const certificate = document.querySelector('.certificate-right-box');
 

  const computedCertificateStyle = window.getComputedStyle(certificate);
  const certificateWidth = parseFloat(computedCertificateStyle.getPropertyValue('width'));
  const certificateLeftValue = computedCertificateStyle.getPropertyValue('left');




  const totalCertificateWidthToMove = (totalCertificateLenght-1)*certificateWidth;
  const currentCertificateMove = Math.abs(parseFloat(certificateLeftValue));

  // const currentCertificateMove = parseInt(certificateLeftValue);
  

  if((currentCertificateMove)>=totalCertificateWidthToMove-1){
    certificate.style.left = `${(0)}px`
  }

  else{
    certificate.style.left = `${(-currentCertificateMove-certificateWidth)}px`
  }

  },5000)
 



};




function expandText(index) {
  var targetElement = document.getElementById('review-text-' + index);
  let showHideText = document.getElementsByClassName('show-hide')[index];
  const reviewCard = document.getElementsByClassName('review-card')[index];

  
  const maxLength = 300;
  
  if (showHideText.innerText === "show more...") {
    showHideText.innerText = "show less";
  } else {
    showHideText.innerText = "show more...";
  }
  
  console.log('target element outside if-else', targetElement.style.height);
  
  var computedStyle = window.getComputedStyle(targetElement);
  var currentHeight = computedStyle.getPropertyValue('height');

  // var computedReviewStyle = window.getComputedStyle(reviewCard);
  // var currentReviewHeight = computedStyle.getPropertyValue('height');
  
  if (currentHeight === '67px') {

    console.log('target element', targetElement.scrollHeight);
    targetElement.style.height = `${targetElement.scrollHeight}px`;
    
    // targetElement.style.height = "auto";
    // reviewCard.style.height = 'auto'
  } else {
    targetElement.style.height = '67px';
    // reviewCard.style.height = '150px'
  }

  if (reviewCard.classList.contains('expanded')) {
    reviewCard.style.height = '200px';
    reviewCard.classList.remove('expanded');
  } else {
   
    // reviewCard.style.height = `${reviewCard.scrollHeight}px`;
    reviewCard.style.height = 'auto';

    reviewCard.classList.add('expanded');
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
  document.getElementById('videoContainer').style.top="20%"

  document.body.style.overflow='hidden'
  var myFrame = videoContainer.querySelector("iframe");
  myFrame.src = "https://www.youtube.com/embed/N6KsC9Y00M8";
  document.getElementById('overlay').style.display="block"
  // videoContainer.classList.add('show');
}

function hideVideo(){
  console.log('hiding')
  document.getElementById('videoContainer').style.display="none"
  document.getElementById('videoContainer').style.top="0"
  document.body.style.overflow='auto'
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
