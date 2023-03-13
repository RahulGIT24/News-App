import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import Error from './error'
import PropTypes from 'prop-types'
export class News extends Component {
    articles = [];
    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 15,
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1,
            loader: false,
            error: false
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    async updateNews(pageNo) {
        try {
            this.props.setProgress(0)
            this.setState({ loader: true, error: false })
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e8bd2cfb500431f92d7253136ce7424&page=${pageNo}&pageSize=${this.props.pageSize}`
            this.props.setProgress(50)
            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loader: false
            });
            this.props.setProgress(100)
        }
        catch (e) {
            this.props.setProgress(0)
            this.setState({ error: true, loader: false })
            console.log(new Error("Fail to fetch news"));
            this.props.setProgress(100)
        }
    }

    async componentDidMount() {
        this.updateNews(1);
    }

    handlePrevious = async () => {
        this.setState({ page: this.state.page - 1 });
        let pageNO = this.state.page - 1;
        this.updateNews(pageNO);
    }


    handleNext = async () => {
        this.setState({ page: this.state.page + 1 });
        let pageNO = this.state.page + 1;
        this.updateNews(pageNO);
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>News Monkey Top {this.capitalizeFirstLetter(this.props.category)} Headliness</h2>
                {this.state.error && <Error mode={this.props.mode} />}
                {this.state.loader && <Spinner mode={this.props.mode} />}
                <div className="row my-5" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            {this.state.error == false && this.state.loader == false ? <NewsItem title={element.title} description={element.description} mode={this.props.mode} imageUrl={element.urlToImage != null ? element.urlToImage : "./logo.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt.replace(/T|Z/g, " ")} source={element.source.name} /> : ""}
                        </div>
                    })}
                </div>
                {this.state.error == false ? <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className={`btn btn-${this.props.mode == 'light' ? 'dark' : 'light'} bg-${this.props.mode == 'light' ? 'light' : 'dark'} text-${this.props.mode == 'light' ? 'dark' : 'light'}`} onClick={this.handlePrevious}>&larr; Previous</button>
                    <button type="button" id='nextBTN' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className={`btn btn-${this.props.mode == 'light' ? 'dark' : 'light'} bg-${this.props.mode == 'light' ? 'light' : 'dark'} text-${this.props.mode == 'light' ? 'dark' : 'light'}`} onClick={this.handleNext}>Next &rarr;</button>
                </div> : ""}
            </div>
        )
    }
}

export default News
