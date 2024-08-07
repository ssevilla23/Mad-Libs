/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  
  // This line of code retrieves an HTML element by calling its ID. This is mainly used to call the words that the user inputted in the madLib game.
  let formElement = document.getElementById(id);
  
  // If the user leaves any part of the form blank and attempts to generate a Mad Lib, then this code with run since it found that one or more of the form values don't exist. It makes sure to check if the user filled out the entire form or not and will run this error if not.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

	// These lines of code checks if the user only entered whitespaces as their responses. If that is done, then the madLib will use the placeholder form words in sqaure brackets as the words in the generated story.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {

  // Retrieve form value
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");

  // Insert form values into madlib

  let madLib = `Dear ${relative},
  <br><br>
  I have been having a really ${adjective1} time 
  at camp. The counselour is ${adjective2} and 
  the food is ${adjective3}. I met ${famousPerson} 
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}`;

  // Output the madlib to the player
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
  
}