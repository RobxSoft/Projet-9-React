module.exports.getArticle = async function(){
    const response = await fetch('http://localhost:1337/api/articles', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    }
    )
    const articles = await response.json();
    console.log(articles);
    return articles;
}

module.exports.getGames = async function(){
    const response = await fetch('http://localhost:1337/api/games?populate=*', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    }
    )
    const games = await response.json();
    return games;
}

module.exports.getCategories = async function(){
    const response = await fetch('http://localhost:1337/api/categories?populate=*', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    }
    )
    const categories = await response.json();
    return categories;
}