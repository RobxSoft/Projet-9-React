export const getArticle = async () => {
    const response = await fetch('http://localhost:3001/articles', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    return articles
}