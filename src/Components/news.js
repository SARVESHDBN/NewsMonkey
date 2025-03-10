import React, { Component } from 'react';
import NewsItem from './newsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
    articles = [
        { 
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Julian Assange: Australia’s quiet campaign to bring Wikileaks founder home",
            "description": "Assange was welcomed home by the prime minister, but there was initially little sympathy for him in Australia.",
            "url": "https://www.bbc.co.uk/news/articles/c3ggv6zdk1do",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a0b7/live/8d963b10-33a8-11ef-ab7a-67b738977048.jpg",
            "publishedAt": "2024-06-27T00:07:15.7037669Z",
            "content": "In reality, he is still an extremely polarising figure in Australia.\r\nAlexander Downer a former Australian foreign minister and its High Commissioner to the UK between 2014 and 2018 has long argued A… [+1703 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Sunak and Starmer in final debate clash over tax and immigration",
            "description": "Rishi Sunak and Keir Starmer go head-to-head for the final time before next week's general election.",
            "url": "https://www.bbc.co.uk/news/articles/c3gg6gdz7kdo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2e1f/live/bb34e5c0-340d-11ef-90be-b75b34b0bbb2.jpg",
            "publishedAt": "2024-06-27T00:07:12.7982376Z",
            "content": "Sir Keir was more combative in his responses than in the first debate, accusing Mr Sunak of repeating a lie after the PM asked the audience: \"Can you afford to pay at least £2,000 more in tax?\r\nThe t… [+1361 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "1MDB: Assets worth $100m to be returned to Malaysia",
            "description": "The US said artworks by artists Andy Warhol and Claude Monet and a luxury flat in Paris would be liquidated and assets worth $67m released.",
            "url": "https://www.bbc.co.uk/news/articles/cy6683963p5o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1962/live/81cf2500-33dd-11ef-a044-9d4367d5b599.jpg",
            "publishedAt": "2024-06-26T23:52:13.3600014Z",
            "content": "The US Justice Department has reached an agreement with fugitive financier Jho Low to return more than $100m (£79m) allegedly embezzled from Malaysias state-owned wealth fund as part of the 1MDB scan… [+1540 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Biden v Trump: What are they thinking in Moscow, Beijing and Delhi?",
            "description": "Eight BBC correspondents give their view on the US election from global capitals.",
            "url": "https://www.bbc.co.uk/news/articles/cp008qzzee1o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4549/live/2c163c00-33d5-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-26T23:07:13.1412567Z",
            "content": "By Laura Bicker, China correspondent, Beijing\r\nBoth candidates are vying to be tough on Beijing and have similar economic policies to combat Chinas rise including raising tariffs on cheap Chinese goo… [+1241 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Five charged for bribing juror with $120,000 in cash in Covid fraud trial",
            "description": "The trial in Minneapolis centres on the theft of millions of dollars from a scheme to feed  hungry children.",
            "url": "https://www.bbc.co.uk/news/articles/cnee4emz44po",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2306/live/74b126c0-33ec-11ef-a784-8952677cdf33.jpg",
            "publishedAt": "2024-06-26T22:37:14.5633627Z",
            "content": "Five people have been charged with attempting to bribe a juror with $120,000 (£93,770) in cash to vote against conviction in the \"largest pandemic fraud\" trial in the US.\r\nThe unnamed 23-year-old jur… [+1351 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Bolivian president warns army after soldiers seen in capital",
            "description": "Unverified videos showed armoured vehicles and soldiers in the centre of the capital La Paz.",
            "url": "https://www.bbc.co.uk/news/articles/c288eewr1wko",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d142/live/8cc31ab0-33f7-11ef-90be-b75b34b0bbb2.jpg",
            "publishedAt": "2024-06-26T20:37:17.8753399Z",
            "content": "Bolivian President Luis Arce has demanded democracy be \"respected\" after soldiers were reported to have moved into central La Paz.\r\nUnverified videos showed armoured vehicles and soldiers in Murillo … [+1199 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Supreme Court briefly issues opinion allowing Idaho abortions",
            "description": "Court says publication of opinion on its website was \"inadvertent\" and that a final ruling has not been made.",
            "url": "https://www.bbc.co.uk/news/articles/c6pp2yvnv94o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/19d2/live/de78f830-33e2-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-26T18:22:22.4462431Z",
            "content": "The US Supreme Court appears ready to allow abortions in cases of medical emergencies in Idaho, after briefly publishing - and then deleting - an opinion on its website.\r\nAccording to a report on Blo… [+1500 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Farmers ‘at war’ with rural crime gangs",
            "description": "One farmer told the BBC he faces 'constant warfare' against balaclava-clad thieves.",
            "url": "https://www.bbc.co.uk/news/articles/c5111vx8y4mo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5732/live/803fc390-32fa-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-26T13:52:18.8366408Z",
            "content": "The CLAs findings come after a Durham University report earlier this year , externalfound there were 22 serious organised criminal gangs active in the countryside\r\nSimon Porter, 65, who farms 570 hec… [+609 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "When your uni neighbour turns out to be a prince",
            "description": "A former student remembers what it was like living next door to the future Emperor of Japan.",
            "url": "https://www.bbc.co.uk/news/articles/cxwwzw08zxxo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/57aa/live/5b25e4f0-2fde-11ef-8e15-41b05d9d84b4.jpg",
            "publishedAt": "2024-06-26T03:52:14.2264949Z",
            "content": "More than 40 years later, Emperor Naruhito is going back to his old student haunts while on a state visit to the UK.\r\nKeith, from the Appalachian mountains and who liked to play bluegrass music, gave… [+722 chars]"
            },
            {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Boeing Starliner: Why are the astronauts still in space?",
            "description": "What has delayed their return and what does it mean for the mission?",
            "url": "https://www.bbc.co.uk/news/articles/c6pp29gdwe6o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/325e/live/13ab7590-330d-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-26T01:07:21.8209044Z",
            "content": "The sequence of events raises questions about whether the launch should have gone ahead in spite of the leak. \r\nDr Adam Baker, who is head of Rocket Engineering, a UK company specialising in rocket p… [+1311 chars]"
        }
    ]
    
    static defaultProps = {
        country: "in",
        pageSize: 6,
        
    };
    
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    };
    
    
    constructor(){
        super();
        console.log("A am a constructor of the news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    updateNews = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parceddata = await data.json(url);
        console.log(parceddata);
        console.log(data);
        this.setState({
            articles: parceddata.articles,
            totalResults: parceddata.totalResults,
            loading: false
        });
    }

    async componentDidMount(){
        console.log("cdm ");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parceddata = await data.json(url);
        console.log(parceddata);
        console.log(data);
        this.setState({
            articles: parceddata.articles,
            totalResults: parceddata.totalResults,
            loading: false
        });
    }
    
    handlePrevclick = async()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parceddata = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parceddata.articles,
            loading: false
        });
    }
    
    handleNextclick = async()=>{
        console.log("Next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parceddata = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parceddata.articles,
                loading: false
            });
        }
    }
    
    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parceddata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parceddata.articles),
            totalResults: parceddata.totalResults,
            loading: false
        });
        
    };

    render(){
        return (
        // {console.log("render")}
            <div className="container my-3">
                <h1 className="text-center">Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                <div className="container">
                <div className="row">
                    { this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title = {element.title?element.title.slice(0, 45):""} 
                            discription = {element.description?element.description.slice(0, 88):""}
                            imageurl = {element.urlToImage}
                            newsurl = {element.url}
                            author = {element.author}
                            date={element.publishedAt}
                            source={element.source.name}/>
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-primary mx-3" 
                    onClick={this.handlePrevclick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} 
                    type="button" className="btn btn-primary mx-3"
                    onClick={this.handleNextclick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default news
