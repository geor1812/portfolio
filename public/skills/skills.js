const colorDictionary = {
    language: "bg-info",
    fandl: "bg-success",
    service: "bg-warning",
    industry: "bg-danger"
};

//Using fetch to get the skills and dynamically adding them to the page
(async function getSkills() {
    try {
        const response = await fetch("/api/skills");
        const result = await response.json();

        result.data.map(skill => {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row";

            const cardDiv = document.createElement("div");
            cardDiv.className = "card bg-dark w-75 my-3";

            const cardBodyDiv = document.createElement("div");
            cardBodyDiv.className = "card-body";

            const skillTitle = document.createElement("h3");
            skillTitle.className = "card-title";
            skillTitle.innerText = skill.title;

            const skillDescription = document.createElement("p");
            skillDescription.className = "card-text";
            skillDescription.innerText = skill.description;

            const progressBackground = document.createElement("div");
            progressBackground.className = "progress bg-secondary";

            const progressBar = document.createElement("div");
            progressBar.className = "progress-bar progress-bar-striped progress-bar-animated";
            progressBar.classList.add(colorDictionary[skill.type]);
            progressBar.setAttribute("style", `width: ${skill.progress * 20}%`);


            const section = document.getElementById(skill.type);
            
            section.appendChild(rowDiv);
            rowDiv.appendChild(cardDiv);
            cardDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(skillTitle);
            cardBodyDiv.appendChild(skillDescription);
            cardBodyDiv.appendChild(progressBackground);
            progressBackground.appendChild(progressBar);
        });

    } catch (error) {
        console.log(error);
    }
})();