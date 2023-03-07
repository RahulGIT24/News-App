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
        pageSize: 9,
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1,
            loader: false,
            error: false
        }
    }

    async componentDidMount() {
        try {
            this.setState({ loader: true, error: false })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e8bd2cfb500431f92d7253136ce7424&page=1&pageSize=${this.props.pageSize}`
            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loader: false
            });
        }
        catch (e) {
            this.setState({ error: true, loader: false })
            console.log(new Error("Fail to fetch news"));
        }
    }

    handlePrevious = async () => {
        try {
            this.setState({ loader: true, error: false })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e8bd2cfb500431f92d7253136ce7424&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
            const res = await fetch(url);
            const data = await res.json();
            this.setState(
                {
                    articles: data.articles,
                    page: this.state.page - 1,
                    loader: false
                }
            )

        }
        catch (e) {
            this.setState({ error: true, loader: false })
            console.log(new Error("Unable to fetch news"));
        }
    }

    handleNext = async () => {
        try {
            if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
                this.setState({ loader: true, error: false })
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e8bd2cfb500431f92d7253136ce7424&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
                const res = await fetch(url);
                const data = await res.json();
                this.setState(
                    {
                        articles: data.articles,
                        page: this.state.page + 1,
                        loader: false
                    }
                )

            }
        }
        catch (e) {
            this.setState({ error: true, loader: false })
            console.log(new Error("Unable to fetch news"));
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>News Monkey Top Headliness</h2>
                {this.state.error && <Error />}
                {this.state.loader && <Spinner />}
                <div className="row my-5" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            {this.state.error == false && this.state.loader == false ? <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage != null ? element.urlToImage : "./logo.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt.replace(/T|Z/g," ")}/> : ""}
                        </div>
                    })}
                </div>
                {this.state.error == false ? <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
                    <button type="button" id='nextBTN' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
                </div> : ""}
            </div>
        )
    }
}

export default News
