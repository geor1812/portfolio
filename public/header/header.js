if (location.pathname === "/") {
    document.getElementById("home").className = "nav-item active";
}

if (location.pathname === "/skills/") {
    document.title = "Skills";
    document.getElementById("skills").className = "nav-item active";
}

if (location.pathname === "/projects/") {
    document.title = "Projects";
    document.getElementById("projects").className = "nav-item active";
}

if (location.pathname === "/education/") {
    document.title = "Education";
    document.getElementById("education").className = "nav-item active";
}

if (location.pathname === "/contact/") {
    document.title = "Contact";
    document.getElementById("contact").className = "nav-item active";
}