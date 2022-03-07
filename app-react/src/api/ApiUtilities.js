export const getArticle = async () => {
    const response = await fetch('http://localhost:3001/api/articles?populate=*', {
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

export default getArticle;