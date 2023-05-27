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
