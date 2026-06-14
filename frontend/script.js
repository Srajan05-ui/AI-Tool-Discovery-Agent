const API_URL =
"https://srajan12.app.n8n.cloud/webhook/tools";

let allTools = [];

async function fetchTools(){

    try{

        const response =
        await fetch(API_URL);

        const data =
        await response.json();

        allTools = data.map(item => item.json);

        updateStats();

        populateCategories();

        displayTools(allTools);

    }catch(error){

        console.log(error);

    }

}

function updateStats(){

    document.getElementById(
        "totalTools"
    ).innerText = allTools.length;

    const categories =
    [...new Set(
        allTools.map(
            tool => tool.property_category
        )
    )];

    document.getElementById(
        "totalCategories"
    ).innerText = categories.length;

}

function populateCategories(){

    const select =
    document.getElementById(
        "categoryFilter"
    );

    const categories =
    [...new Set(
        allTools.map(
            tool => tool.property_category
        )
    )];

    categories.forEach(cat => {

        const option =
        document.createElement("option");

        option.value = cat;

        option.textContent = cat;

        select.appendChild(option);

    });

}

function displayTools(tools){

    const container =
    document.getElementById(
        "toolsContainer"
    );

    container.innerHTML = "";

    tools.forEach(tool => {

        container.innerHTML += `

        <div class="tool-card">

            <h2>
            ${tool.property_tool_name}
            </h2>

            <span class="badge category">
            ${tool.property_category}
            </span>

            <span class="badge pricing">
            ${tool.property_pricing}
            </span>

            <p class="rating">
            ⭐ ${tool.property_rating}/10
            </p>

            <p>
            <strong>Use Case:</strong>
            ${tool.property_use_case}
            </p>

            <p class="summary">
            ${tool.property_summary}
            </p>

            <a
             class="website"
             href="https://${tool.property_website}"
             target="_blank">

             Visit Website

            </a>

        </div>

        `;

    });

}

document
.getElementById(
    "searchInput"
)
.addEventListener("input", filterTools);

document
.getElementById(
    "categoryFilter"
)
.addEventListener("change", filterTools);

function filterTools(){

    const search =
    document.getElementById(
        "searchInput"
    ).value.toLowerCase();

    const category =
    document.getElementById(
        "categoryFilter"
    ).value;

    const filtered =
    allTools.filter(tool => {

        const matchesSearch =
        tool.property_tool_name
        .toLowerCase()
        .includes(search);

        const matchesCategory =
        category === "all" ||
        tool.property_category === category;

        return (
            matchesSearch &&
            matchesCategory
        );

    });

    displayTools(filtered);

}

fetchTools();