const body = document.querySelector("body");

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const footerElement = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = "Ranex Descallar © " + thisYear;

footerElement.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Python"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", function(event) {

  event.preventDefault(); // Stop page refresh

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  // Select message section
  const messageSection = document.getElementById("messages");

  // Select ul inside message section
  const messageList = messageSection.querySelector("ul");

  // Create new list item
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage} </span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset(); // Clear form

});
if (messageList.children.length > 0) {
  messageSection.style.display = "block";
}
const editButton = document.createElement("button");
editButton.innerText = "edit";
editButton.type = "button";

editButton.addEventListener("click", function() {
  const newText = prompt("Edit your message:");
  if (newText !== null) {
    newMessage.querySelector("span").innerText = " " + newText;
  }
});

newMessage.appendChild(editButton);
