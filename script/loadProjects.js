const project1 = {
    title: "Analysis of Pixar Movie Success",
    location: "La Jolla",
    time: "September 2024 - December 2024",
    imgSrc: "img/movie_pj.png",
    altText: "Character types vs. revenue visualzied in a boxplot.",
    item1: "Collaborated with a team of 4 members to analyze the influence of character types on Pixar movies revenue",
    item2: "Performed data cleaning and exploratory data analysis to gain insights into the data of 28 Pixar movies",
    item3: "Concluded the absence of a correlation between character types and box office using permutation testing",
    link: "https://github.com/COGS108/Group137-FA24/blob/master/FinalProject_Group137-FA24.ipynb"
};
const project2 = {
    title: "Streak-Based Developer Journal",
    location: "La Jolla",
    time: "April 2024 - June 2024",
    imgSrc: "img/devjourn_pj.png",
    altText: "Home page of the developer journal, showcasing the plant-based theme",
    item1: "Collaborated with a team of 11 members through Agile practices, participating in daily stand-ups, sprint planning, and conducting retrospectives to ensure smooth and efficient project progress",
    item2: "Developed the tagging feature using JavaScript, allowing users to organize journal entries effectively",
    item3: "Contributed to end-to-end Puppeteer testing, improving the reliability and robustness of the application",
    link: "https://cse110-sp24-group22.github.io/cse110-sp24-group22/src/html/home.html"
};
const project3 = {
    title: "Evaluation of Speech Recognition AI",
    location: "La Jolla, CA",
    time: "January 2024 - December 2024",
    imgSrc: "img/whisper_pj.png",
    altText: "Poster showcasing the resutls of the project.",
    item1: "Evaluated the performance of OpenAI’s Whisper against 75 human transcribers on a dataset of 300 English sentences spoken by 20 speakers with varying accents",
    item2: "Discovered that sentence context differentially affected model and human performance",
    item3: "Observed that humans outperformed models on isolated words, suggesting potential limitations in models’ training data or acoustic context requirements",
    link: "https://drive.google.com/file/d/1njbZ3BvwtOl5_99aGGe8xsL3X7Ab2Mzo/view"
};

const projects = [project1, project2, project3];
localStorage.setItem("projects", JSON.stringify(projects));