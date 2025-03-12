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
            <h2>${this.getAttribute('title') || 'NA'}</h2>
            <i>${this.getAttribute('location') || 'NA'}</i> <br>
            <i>${this.getAttribute('time') || 'NA'}</i> <br>
            <details id="job-details">
                <summary id="job-details-sum">Details</summary>
                <ul>
                    <li>${this.getAttribute('item1') || 'NA'}</li>
                    <li>${this.getAttribute('item2') || 'NA'}</li>
                    <li>${this.getAttribute('item3') || 'NA'}</li>
                    <li> <a href=${this.getAttribute('link')}> <strong>Link to project: ${this.getAttribute('link')}</strong> </a> </li>
                </ul>
            </details>
            <picture>
                <img src=${this.getAttribute('img-src')} alt=${this.getAttribute('alt-text')} class="project-pic">
            </picture>`;
    }

}

customElements.define('project-card', ProjectCard);