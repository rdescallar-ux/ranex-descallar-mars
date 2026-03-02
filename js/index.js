const body = document.querySelector("body");

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const footerElement = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.textContent = `© ${thisYear} Ranex Descallar`;

footerElement.appendChild(copyright);

const copyright = document.getElementById("copyright");

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
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage} </span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function() {
    newMessage.remove();

    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";

  editButton.addEventListener("click", function() {
    const newText = prompt("Edit your message:");
    if (newText !== null && newText.trim() !== "") {
      newMessage.querySelector("span").innerText = " " + newText;
    }
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  if (messageList.children.length > 0) {
    messageSection.style.display = "block";
  }

  messageForm.reset();
});

const repoList = document.querySelector("#repo-list");

fetch("https://api.github.com/users/rdescallar-ux/repos")
  .then(response => response.json())
  .then(data => {
    data.forEach(repo => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");

      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank";

      listItem.appendChild(link);
      repoList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Error fetching repositories:", error);
  });

  const projectSection = document.getElementById("projects");

  const projectList = projectSection.querySelector("ul");

  repositories.forEach(repo => {
    const project = document.createElement("li");
    project.innerText = repo.name;
    projectList.appendChild(project);
});

.catch(error => {
    projectList.innerText = "Unable to load projects at this time.";
});

