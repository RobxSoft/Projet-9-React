import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WS_Background from '../img/worldseed_thumbnail.jpeg';
import ContainerArticles from '../components/ContainerArticles';
import Loader from '../components/Loader';


const LINK = "http://localhost:1337"



class ArticleInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: null,
            loaded: false
        }     
    }

    componentDidMount(){
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const article = this.props.state.articles.data.find(article=>article.id===parseInt(id))
        this.setState({article: article, loaded: true})
    }


    render(){
        console.log(this.state);
        if (this.state.loaded == false){
            return <Loader />
        }
        return(     
            <React.Fragment>
                <Navbar/>
                <div className="gameinfo-container center white-text">
                    <div className="container">
                        <h1>{this.state.article.attributes.title}</h1>
                        <img src={LINK+this.state.article.attributes.icon.data.attributes.url}/>
                        <h2 className="left-align">{this.state.article.attributes.main_text}</h2>
                        <p className="left-align content">{this.state.article.attributes.text}</p>
                        <p>Article wrote by {this.state.article.attributes.author}</p>
                        <p>Posted on {this.state.article.attributes.publish}</p>
                    </div>
                </div>

                <div className="container-games">
                    <h2 className="flow-text">Dedicated Articles</h2>
                    <a className="waves-effect btn z-depth-0">SEE ALL</a>
                    <div className="send-game-container">
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default ArticleInfo;