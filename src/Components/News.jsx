import React, {useState,useEffect} from 'react';

import NewsItem from './NewsItem.jsx';
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) =>{

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  

  const updateNews = async()=>{

    props.setProgress(10);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
   

  useEffect(() => {
    updateNews();
    document.title = `Daily Bugle - ${props.category}`;
    // eslint-disable-next-line 
  }, [])
  

  const fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page+1);  
    let data = await fetch(url);
    let parseData = await data.json();


    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);

    
  }

  return(
    <>
    <h1 className='text-center' style={{margin: '30px 0px' , marginTop: '120px'}}>Daily Bugle - Top Headlines</h1>
    {loading && <Spinner />}

    <InfiniteScroll style={{overflow: '0'}} dataLength={articles.length} next={fetchMoreData} hasMore={articles.length!== totalResults} loader={<Spinner />}>
      
      <div className="container">
        
        <div className="row">
        {/* {!loading && articles.map((element)=>{ you can use this scroll if you are using a button for next page data load */}
        {articles.map((element)=>{
          return(
            <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          )})}
        </div>

      </div>
    </InfiniteScroll>
  
    {/* <div className="container d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Prev</button>
      <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr; </button>
    </div> */}

    {/* 
    
      Logic for math.ceil for disabling next page button ... "page" is current page like 3rd page and "totalResults" is whole numbers of results in that API regardless of PageSize and "pageSize" is how data should be there on one page.

      for Eg if total pages are 38 then  and pagesIZE IS 20 then "Math.ceil(totalResults/props.pageSize)" = (38/20)=1.9=2 So, total pages should be 2 and if current page i.e. "page+1" is 2 then 2 > 2 is false and the button will get disbled stating that only 2 pages are there no data on 3rd page exists. 
    
    */}
    
  </>
  )
}









// export class News extends Component {
  
//   static defaultProps ={
//     country: 'in',
//     pageSize: 6,
//     category: 'general'
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

//   constructor(props){
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `Daily Bugle - ${this.props.category}`;
//   }
    
//   async updateNews(){
//     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=24b93d8ef1624c16bc05e2a84c2b8c97&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
//     this.setState({loading: true});
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parseData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parseData.articles, 
//       totalResults:parseData.totalResults,
//       loading: false
//     })
//     this.props.setProgress(100);
//   }


//   async componentDidMount(){
//     this.updateNews();
//   }

//   // handlePrevClick = async()=>{
//   //   this.setState({page: this.state.page - 1});
//   //   this.updateNews();
//   // }

//   // handleNextClick = async()=>{
//   //   this.setState({page: this.state.page + 1});
//   //   this.updateNews();
//   // }
  
//   fetchMoreData = async() => {
    
//     this.setState({page: this.state.page + 1});
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
//     let data = await fetch(url);
//     let parseData = await data.json();

//     this.setState({
//       articles: this.state.articles.concat(parseData.articles), 
//       totalResults: parseData.totalResults
//     })
//   };



//     render() {
//         return (
//           <>
//             <h1 className='text-center' style={{margin: '30px 0px'}}>Daily Bugle - Top Headlines</h1>
//             {this.state.loading && <Spinner />}

//             <InfiniteScroll style={{overflow: '0'}} dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!== this.state.totalResults} loader={<Spinner />}>
              
//               <div className="container">
                
//                 <div className="row">
//                 {/* {!this.state.loading && this.state.articles.map((element)=>{ you can use this scroll if you are using a button for next page data load */}
//                 {this.state.articles.map((element)=>{
//                   return(
//                     <div className="col-md-4" key={element.url}>
//                       <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                     </div>
//                   )})}
//                 </div>

//               </div>
//             </InfiniteScroll>
          
//             {/* <div className="container d-flex justify-content-between">
//               <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Prev</button>
//               <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
//             </div> */}
            
//           </>
//         )
//   }
// }


News.defaultProps ={
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
