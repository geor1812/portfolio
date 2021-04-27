

(async function getSkills() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();



    } catch (error) {
        console.log(error);
    }
})();