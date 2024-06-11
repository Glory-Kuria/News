


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const newsContainer = document.getElementById('news-container');

    searchButton.addEventListener('click', async () => { // Mark the callback as async
        const query = searchInput.value.trim();
        if (!query) return;

        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=8f4c5e88c22c4c8485b142c4f294a2b6`);
            const data = await response.json(); 
            console.log({data});
            newsContainer.innerHTML = ''; 
         data.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'article';
                articleDiv.innerHTML = `
                    <a href="${article.url}" target="_blank">
                        <img src="${article.urlToImage}" alt="${article.title}">
                        <h3>${article.title}</h3>
                    </a>
                    <small>${new Date(article.publishedAt).toLocaleString()}</small>
                    <p>${article.description}</p>
                `;
                newsContainer.appendChild(articleDiv);
            });
        } catch (error) {
            console.error('Error fetching news:', error);
        }
        console.log({query});
     
    });
  
});



