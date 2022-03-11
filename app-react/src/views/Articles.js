import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ArticleFrame from '../components/ArticleFrame';



class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            loaded: props.state.loaded
        }
    }

    handleChange = (text) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.search = text
        this.setState(stateCopy)
    }

    render(){
        const showArticles= this.props.state.articles.data.filter(
            (article,key)=>article.attributes.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
        
        return(
            <>
                <Navbar callback={this.handleChange}/>
                <div className="container-articles">
                    <h2 className="flow-text">Articles</h2>
                    <div className="gamepages-container row">
                        {this.props.state.articles && showArticles.map((article,i) => <ArticleFrame key={i} article={article}/>)}
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Articles;