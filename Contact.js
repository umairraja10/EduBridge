// Get form elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const categoryInput = document.getElementById("category");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const submitBtn = document.getElementById("submitBtn");

// When user clicks submit
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        category: categoryInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };

    console.log("Form Data:", formData);
});
