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
        return `project-card:has(h2) {
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
        }`;
    }

    getComponentHTML(title, employer, location, time, imgSrc, altText, item1, item2, item3) {
        return `<h2>Computer Science Tutor</h2>
            <i>UC San Diego</i> <br>
            <i>La Jolla, CA</i> <br>
            <i>April 2024 - December 2024</i> <br>
            <picture></picture>
            <details id="job-details">
                <summary id="job-details-sum">Details</summary>
                <ul>
                    <li>Provided clarification and support to students enrolled in the "Theory of Computation" course during office hours</li>
                    <li>Evaluated students’ homework assignments and exams, offering detailed feedback to aid their understanding</li>
                    <li>Participated in weekly staff meetings with the teaching team to discuss course progress and address challenges</li>
                </ul>
            </details>`;
    }

}

customElements.define('project-card', ProjectCard);