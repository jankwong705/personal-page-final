class ProjectCard extends HTMLElement {
    constructor() {
		super();
	}
    connectedCallback() {
        // Create a style tag for the component’s CSS
        const style = document.createElement('style');
        style.textContent = this.getComponentCSS();

        // Get the HTML content
        const content = this.getComponentHTML();

        // Attach styles and HTML content to the component
        this.innerHTML = '';
        this.appendChild(style);
        this.innerHTML += content;

    }

    getComponentCSS() {
        return `
            project-card {
                animation: fade 1.5s ease-in-out;
                display: block;
                padding: var(--standard-gap, 1rem);
                margin: 10px;
                background-color: var(--frame-color);
                border: 2px solid #021218;
                border-radius: 3px;
                text-align: left;
                color: #333;
                font-size: 1.2em;
            }
            .project-pic {
                max-width: 450;
                max-height: 300;
                height: auto;
                border-radius: 4px;
            }
            img.project-pic:hover {
                transition: none !important;
                transform: none !important;
            }`;
    }

    getComponentHTML() {
        return `
            <h2>${this.getAttribute('title') || ''}</h2>
            <i>${this.getAttribute('location') || ''}</i> <br>
            <i>${this.getAttribute('time') || ''}</i> <br>
            <details id="job-details">
                <summary id="job-details-sum">Details</summary>
                <ul>
                    <li>${this.getAttribute('item1') || ''}</li>
                    <li>${this.getAttribute('item2') || ''}</li>
                    <li>${this.getAttribute('item3') || ''}</li>
                    <li> <a href=${this.getAttribute('link')}> <strong>Link to project: ${this.getAttribute('link')}</strong> </a> </li>
                </ul>
            </details>
            <picture>
                <img src=${this.getAttribute('img-src')} alt=${this.getAttribute('alt-text')} class="project-pic">
            </picture>`;
    }

}

customElements.define('project-card', ProjectCard);

// Access buttons and container 
const loadLocal = document.getElementById("load-local");
const loadRemote = document.getElementById("load-remote");
const container = document.getElementById("project-container");

function parseData(projectData) {
    try {
        // Create card for each project
        projectData.forEach(proj => {
            const card = document.createElement("project-card");
            card.setAttribute("title", proj.title);
            card.setAttribute("location", proj.location);
            card.setAttribute("time", proj.time);
            card.setAttribute("img-src", proj.imgSrc);
            card.setAttribute("alt-text", proj.altText);
            card.setAttribute("item1", proj.item1);
            card.setAttribute("item2", proj.item2);
            card.setAttribute("item3", proj.item3);
            card.setAttribute("link", proj.link);
            // Add element to HTML
            container.appendChild(card);
            if(localStorage.getItem("mode") == "dark") {
                card.classList.add("dark-mode");
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

loadLocal.addEventListener("click", () => {
    // Get content from localStorage 
    const projectData = JSON.parse(localStorage.getItem("projects"));
    console.log(projectData);
    parseData(projectData);
}); 

loadRemote.addEventListener("click", async () => {
    // Get content from JSONBin
    let response = await fetch("https://api.jsonbin.io/v3/b/67d3bd0d8960c979a57141b9", {
        headers: {
            "X-Master-Key": "$2a$10$EsrVXsDCDivZOfs9EXNzWutZpS8Igvx5B50xVDFiSmok016Kbc9M6"
        }})
    let projectData = await response.json();
    projectData = Object.values(projectData.record);
    parseData(projectData);
});

