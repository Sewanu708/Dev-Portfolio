const sideBar = document.querySelector(".sidebar");
const hamburger = document.querySelector("#bars");
const close = document.getElementById("close");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");
const handleSideBar = () => {
  sideBar.classList.toggle("hidden");
  hamburger.classList.toggle("fa-close");
};
hamburger.addEventListener("click", handleSideBar);

close.addEventListener("click", handleSideBar);

document.addEventListener("click", (e) => {
  if (!sideBar.classList.contains("hidden")) {
    if (e.target !== sideBar && e.target !== hamburger) {
      handleSideBar();
      return;
    }
  }
});
home.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".home").scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hello");
  document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("submit").addEventListener("click", sendMail);
function sendMail(e) {
  e.preventDefault();
  const inputName = document.getElementById("name").value.trim();
  const inputMail = document.getElementById("mail").value.trim();
  const inputText = document.getElementById("message").value.trim();

  if (inputName === "" || inputMail === "" || inputText === "") {
    alert("Please fill in all fields.");
    return;
  }
  let params = {
    name: inputName,
    email: inputMail,
    message: inputText,
  };

  emailjs
    .send("service_c6g0v6r", "template_xvycpjr", params)
    .then((response) => {
      alert("Your message has been sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send your message. Please try again later.");
    });
}
