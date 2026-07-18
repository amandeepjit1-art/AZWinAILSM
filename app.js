const tracks = [
    {
        name: "AZ-900",
        description: "Microsoft Azure Fundamentals certification path.",
        modules: [
            "Cloud Concepts",
            "Core Azure Services",
            "Security & Governance"
        ]
    },
    {
        name: "AI-900",
        description: "Microsoft Azure AI Fundamentals certification path.",
        modules: [
            "Machine Learning Basics",
            "Computer Vision",
            "Natural Language Processing",
            "Azure OpenAI"
        ]
    },
    {
        name: "AZ-104",
        description: "Microsoft Azure Administrator certification path.",
        modules: [
            "Identity Services",
            "Azure Storage",
            "Virtual Machines",
            "Networking",
            "Monitoring"
        ]
    },
    {
        name: "AZ-305",
        description: "Microsoft Azure Solutions Architect certification path.",
        modules: [
            "Architecture Design",
            "Business Continuity",
            "Security Design",
            "Infrastructure Strategy"
        ]
    }
];

const menu = document.getElementById("menu");
const content = document.getElementById("content");
const dashboard = document.getElementById("dashboard");
const search = document.getElementById("search");
const revisionBtn = document.getElementById("revisionBtn");
const quizBtn = document.getElementById("quizBtn");

let selectedTrack = null;

function renderTracks(trackList) {
    menu.innerHTML = "";

    trackList.forEach(track => {

        const button = document.createElement("button");

        button.textContent = track.name;

        button.addEventListener("click", () => {

            selectedTrack = track;

            dashboard.textContent =
                `Selected Track: ${track.name}`;

            content.innerHTML = `
                <h2>${track.name}</h2>

                <p>${track.description}</p>

                <h3>Learning Modules</h3>

                <ul>
                    ${track.modules
                        .map(module => `<li>${module}</li>`)
                        .join("")}
                </ul>

                <br>

                https://learn.microsoft.com/
                    Microsoft Learn
                </a>
            `;
        });

        menu.appendChild(button);
    });
}

renderTracks(tracks);

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filteredTracks = tracks.filter(track =>
        track.name.toLowerCase().includes(value)
    );

    renderTracks(filteredTracks);
});

revisionBtn.addEventListener("click", () => {

    if (!selectedTrack) {
        alert("Please select a certification track first.");
        return;
    }

    content.innerHTML += `
        <hr>

        <h3>Revision Notes</h3>

        <p>
            Review all modules listed for
            ${selectedTrack.name}
            before attempting practice exams.
        </p>
    `;
});

quizBtn.addEventListener("click", () => {

    if (!selectedTrack) {
        alert("Please select a certification track first.");
        return;
    }

    content.innerHTML = `
        <h2>${selectedTrack.name} Practice Quiz</h2>

        <p>
            Which certification track are you currently studying?
        </p>

        <button id="correctAnswer">
            ${selectedTrack.name}
        </button>

        <button>
            AI-900
        </button>

        <button>
            AZ-104
        </button>

        <button>
            AZ-305
        </button>

        <div id="quizResult"></div>
    `;

    document
        .getElementById("correctAnswer")
        .addEventListener("click", () => {

            document.getElementById("quizResult").innerHTML =
                "<h3 style='color:green'>✅ Correct Answer</h3>";
        });
});
