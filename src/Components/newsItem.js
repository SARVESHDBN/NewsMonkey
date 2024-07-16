import React, { Component } from "react";

export class newsItem extends Component {
    render() {
        let { title, discription, imageurl, newsurl, author, date, source } = this.props;
        
        return (
        <div>
            <div className="card mx-2 my-4">
                <img
                    src={
                    (!imageurl || imageurl==="...")
                        ? "https://ichef.bbci.co.uk/news/1024/branded_news/d142/live/8cc31ab0-33f7-11ef-90be-b75b34b0bbb2.jpg"
                        : imageurl
                    }
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {title}...{" "}
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style= {{zIndex:'1', left: '92%'}}>
                            {source}
                        </span>
                    </h5>
                    <p className="card-text">{discription}...</p>
                    <p className="card-text">
                    <small className="text-danger">
                        By {!author ? "Unknown" : author} on{" "}
                        {new Date(date).toGMTString()}
                    </small>
                    </p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary">
                        Read more
                    </a>
                </div>
            </div>
        </div>
        );
    }
    }

    export default newsItem;
