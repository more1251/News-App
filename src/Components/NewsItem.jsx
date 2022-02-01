import React from 'react'


const NewsItem = (props) =>{
    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return(
        <div className='my-3'>
            <div className="card">

                <div style={{display: 'flex', justifyContent:'flex-end', position: 'absolute', right: '0'}} >
                    <span className="badge rounded-pill bg-danger" >{source}</span>
                </div>
                
                <img src={!imageUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/12/766bb08f601d6aa59cefdc29f52c9b67_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628":imageUrl} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                    <p className="card-text">{description}</p>

                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                </div>
            </div>
    </div>  
    )
}


export default NewsItem
