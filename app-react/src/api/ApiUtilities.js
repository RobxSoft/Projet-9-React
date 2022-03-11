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

module.exports.getDiscover = async function(){
    const response = await fetch('http://localhost:1337/api/discovers?populate=*', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    }
    )
    const discovers = await response.json();
    return discovers;
}

module.exports.getUser = async function(ID){
    const response = await fetch(`http://localhost:1337/api/users/${ID}?populate=*`, {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    })
    const userData = await response.json();
    return userData;
}

module.exports.getDiscoverArticles = async function(){
    const response = await fetch(`http://localhost:1337/api/discover-articles?populate=*`, {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type':'application/json'
        }
    })
    const discoverArticles = await response.json();
    return discoverArticles;
}