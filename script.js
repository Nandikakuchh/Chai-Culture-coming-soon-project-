function handleSubmit() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  alert("Thank you! We'll notify you when we launch.");
  document.getElementById("email").value = "";
}
