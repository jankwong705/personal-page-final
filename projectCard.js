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

    getComponentHTML(title, employer, location, time, imgSrc, altText, item1, item2, item3, link) {
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
const loadLocal = document.getElementsByID("load-local");
const loadRemote = document.getElementsByID("load-remote");

loadLocal.addEventListener("click", () => {
    
}); 

try {
    const projectData = await JSON.parse(localStorage.getItem("projects")) 
    projectData.record.forEach(car => {
        console.log(car);
        // Example of expected result:
        // {
        // image_url:
        // "working_url_here"
        // make:
        // "Suzuki"
        // model:
        // "Wagon R"
        // year:
        // 1998
        //}


        window.galleryItem = document.createElement("my-ride");
        // TODO 5: Set attributes of my-ride as follows:
        // <!-- <my-ride year="1998" make="Suzuki" model="Wagon R"
        //     image-url="https://pub-940f423c24074b9ebe0052cc5f384faa.r2.dev/IMG_4746.jpg"></my-ride> -->
        // using the properties in the "car" obj.
        // setAttribute() will do the trick.
        document.getElementById("gallery").appendChild(window.galleryItem);
    });

} catch (error) {
    console.error("Can't load projects!");
}