document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const id = document.getElementById("studentID").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("helpType").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !id || !email || !type || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email.");
    return;
  }

  document.getElementById("formMessage").textContent = " Request submitted successfully!";
  this.reset();
});
