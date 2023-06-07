import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'
export default class News extends Component {

  constructor(props) {
    super(props);
    console.log("Hello");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      
      
    };
    document.title = `${this.props.category} - NewsWorld`
  }
  async componentDidMount()  {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ba2e9c446ee4cd8a1cea1eed5f48edb&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})
      
    let data = await fetch(url);
    
    let parsedData = await data.json();
   
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handleNextclick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ba2e9c446ee4cd8a1cea1eed5f48edb&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
        
      })};
    
  };
  handlePrevclick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ba2e9c446ee4cd8a1cea1eed5f48edb&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center mt-2 border-right border-danger rounded  font-weight-bold " style={{fontFamily : "fantasy",fontStyle: "bold",backgroundColor: "#FE014D"}}>News World - Top Headlines </h1>
          {this.state.loading && <Spinner/>}
          <div className="row my-3">
            {!this.state.loading&& this.state.articles.map((element) => {
              return (
                <div className="col md-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-between mb-5">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-warning"
              onClick={this.handlePrevclick}
            >
              &larr; Previous
            </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
              type="button"
              className="btn btn-warning"
              onClick={this.handleNextclick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
        
      </>
    );
  }
}
//  defaultProps ={
//   country : 'in',
//   pageSize : 7,
//   category: 'general'
// }
// static propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// }
