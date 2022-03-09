module.exports.getArticle = async function(){
    const response = await fetch('http://localhost:1337/api/articles?populate=*', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    }
    )
    const articles = await response.json();
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

module.exports.getCreator = async function(){
    const response = await fetch('http://localhost:1337/api/creators?populate=*', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    }
    )
    const creators = await response.json();
    return creators;
}