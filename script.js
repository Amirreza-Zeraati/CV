const data = {
    "languages": {
        "Go": 70,
        "JavaScript": 40,
        "C++": 30,
        "Python": 80,
        "Bash": 50,
        "HTMX": 70,
        "CSS": 70,
    }
};


async function fetchLanguages() {
    try {
        console.log('Loaded language data from data.json:', data.languages);
        return data.languages || {};
    } catch (error) {
        console.error('Error fetching language data from data.json:', error);
        return {};
    }
}


async function updateLanguages() {
    try {
        console.log('Starting to fetch languages...');
        const totalLanguages = await fetchLanguages();
        console.log('Loaded languages:', totalLanguages);

        const languageStats = Object.entries(totalLanguages)
            .map(([name, percentage]) => ({
                name,
                percentage: percentage.toFixed(1)
            }))
            // .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
            // .slice(0, 8);

        console.log('Final language stats:', languageStats);

        const container = document.getElementById('languages-container');
        if (container) {
            container.innerHTML = languageStats.map(lang => `
                <div class="language-bar">
                    <div class="language-name">${lang.name}</div>
                    <div class="progress">
                        <div
                            class="progress-bar"
                            style="
                                width: ${lang.percentage}%;
                                background-color: ${getLanguageColor(lang.name)};
                            "
                        >
                        </div>
                    </div>
                    <div class="percentage">${lang.percentage}%</div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error:', error);
        const container = document.getElementById('languages-container');
        if (container) {
            container.innerHTML = '<p class="error-message">Unable to load language data.</p>';
        }
    }
}

function getLanguageColor(language) {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        Java: '#b07219',
        C: '#555555',
        'C++': '#f34b7d',
        Ruby: '#701516',
        Go: '#00ADD8',
        Rust: '#dea584',
        Shell: '#89e051',
        PHP: '#4F5D95',
        Makefile: '#427819',
        CMake: '#DA3434',
        Dockerfile: '#384d54',
        CSS: '#563d7c',
        HTMX: '#e34c26',
        Assembly: '#6E4C13',
        ASL: '#6a40fd'
    };

    return colors[language] || '#8b8599';
}

document.addEventListener('DOMContentLoaded', updateLanguages);
