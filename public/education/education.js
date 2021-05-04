/*
<div class="row ml-5">
    <div class="card bg-dark w-75 text-light my-3">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img src="/education/logos/kea.jpg" class="img-fluid">
                </div>
                <div class="col-7">
                    <h3 class="card-title">Copenhagen School of Design and Technology</h3>
                </div>     
            </div>             
                    
            <p class="lead card-text">AP in Computer Science</p>
            <p class="greyout card-text">25/04/2021 - 09/05/2021</p>
            <ul>
                <li>SWD</li>
                <li>Python</li>
                <li>Blablabla</li>
                <li>NodeJs</li>
            </ul>
        </div>
    </div>
</div>
*/

(async function getEducationList() {
    try {
        const response = await fetch("/api/education");
        const result = await response.json();
        
        const mainDiv = document.getElementById("educationList");

        result.data.map(education => {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row ml-5";

            const cardDiv = document.createElement("div");
            cardDiv.className = "card bg-dark w-75 my-3";

            const cardBodyDiv = document.createElement("div");
            cardBodyDiv.className = "card-body";

            const cardHeaderRow = document.createElement("div");
            cardHeaderRow.className = "row";

            const imageColumn = document.createElement("div");
            imageColumn.className = "col-3";

            const titleColumn = document.createElement("div");
            titleColumn.className = "col-7";

            const logo = document.createElement("img");
            logo.src = education.logo;
            logo.className = "img-fluid";

            const institution = document.createElement("h3");
            institution.className = "card-title";
            institution.innerText = education.institution;

            const programme = document.createElement("p");
            programme.className = "lead card-text";
            programme.innerText = education.programme;

            const duration = document.createElement("p");
            duration.className = "greyout card-text";
            duration.innerText = education.startDate.slice(0,10).replace(/-/g, "/") + " - " + education.endDate.slice(0,10).replace(/-/g, "/");

            const courseList = document.createElement("ul");
            education.courses.map(course => {
                const courseItem = document.createElement("li");
                courseItem.innerText = course;
                courseList.appendChild(courseItem);
            });

            mainDiv.appendChild(rowDiv);
            rowDiv.appendChild(cardDiv);
            cardDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(cardHeaderRow);
            cardHeaderRow.appendChild(imageColumn);
            cardHeaderRow.appendChild(titleColumn);
            imageColumn.appendChild(logo);
            titleColumn.appendChild(institution);
            cardBodyDiv.appendChild(programme);
            cardBodyDiv.appendChild(duration);
            cardBodyDiv.appendChild(courseList);
        });

    } catch (error) {
        console.log(error);
    }
})();