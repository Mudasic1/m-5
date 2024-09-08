var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profileImage");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profileFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profileFile ? URL.createObjectURL(profileFile) : "";
        // Create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\"class:\"ProfilePicture\">") : "", "\n        <p><strong>Name:</strong> <span class=\"editable\" id=\"editname\" >").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\" id=\"editemail\" >").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span class=\"editable\" id=\"editphone\" >").concat(phone, "</span></p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("Element with ID 'resumeOutput' not found");
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.value = element.textContent || "";
            element.textContent = "";
            element.appendChild(inputElement);
            inputElement.focus();
            inputElement.addEventListener("blur", function () {
                element.textContent = inputElement.value;
                inputElement.remove();
            });
        });
    });
}
