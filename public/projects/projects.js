/*
    <div class="row">
        <div class="card bg-dark w-75 my-3">
            <div class="card-body">
                <h3 class="card-title">Portfolio</h3>
                <p class="greyout card-text">25/04/2021 - 09/05/2021</p>
                <p class="card-text">This personal portfolio, which has been implemented using Node.js in conjunction with Express. The Bootstrap library was used for front-end styling. </p>
                <a class="text-info" href="https://github.com/geor1812/portfolio">https://github.com/geor1812/portfolio</a>
            </div>
        </div>
    </div>
*/

const colorDictionary = {
    swd: "text-info",
    creative: "text-warning"
};

(async function getProjects() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        result.data.map(project => {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row";

            const cardDiv = document.createElement("div");
            cardDiv.className = "card bg-dark w-75 my-3";

            const cardBodyDiv = document.createElement("div");
            cardBodyDiv.className = "card-body";

            const projectTitle = document.createElement("h3");
            projectTitle.className = "card-title";
            projectTitle.innerText = project.title;

            const duration = document.createElement("p");
            duration.className = "greyout card-text";
            duration.innerText = project.startDate.slice(0,10).replace(/-/g, "/") + " - " + project.endDate.slice(0,10).replace(/-/g, "/");
            
            const description = document.createElement("p");
            description.className = "card-text";
            description.innerText = project.description;
            

            const section = document.getElementById(project.type);
            section.appendChild(rowDiv);
            rowDiv.appendChild(cardDiv);
            cardDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(projectTitle);
            cardBodyDiv.appendChild(duration);
            cardBodyDiv.appendChild(description);

            console.log(project.links);
            project.links.map(link => {
                const text = document.createElement("p");
                text.className = "card-text"
                text.innerText = link.description + ": "
                

                const linkElement = document.createElement("a");
                linkElement.className = colorDictionary[project.type]
                linkElement.href = link.url;
                linkElement.innerText = link.url;

                text.appendChild(linkElement)
                cardBodyDiv.appendChild(text);
            });
        });

    } catch (error) {
        console.log(error);
    }
})();