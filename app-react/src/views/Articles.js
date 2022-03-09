import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ArticleFrame from '../components/ArticleFrame';

class Articles extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.state);
        this.state = {
            articles: props.state.articles,
            games: props.state.games,
            loaded: props.state.loaded
        }
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container-games">
                    <h2 className="flow-text">Articles</h2>
                    <div className="gamepages-container row">
                        {this.state.articles && this.state.articles.data.map((article,i) => <ArticleFrame key={i} article={article}/>)}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Articles;