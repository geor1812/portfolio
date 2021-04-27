if (location.pathname === "/") {
    document.getElementById("home").classList.add("active");
}

if (location.pathname === "/skills/") {
    document.title = "Skills";
    document.getElementById("skills").classList.add("active");
}

if (location.pathname === "/projects/") {
    document.title = "Projects";
    document.getElementById("projects").classList.add("active");
}

if (location.pathname === "/education/") {
    document.title = "Education";
    document.getElementById("education").classList.add("active");
}

if (location.pathname === "/contact/") {
    document.title = "Contact";
    document.getElementById("contact").classList.add("active");
}