import React from "react";

const HomeNewsCard = (props) => {
  const searchValue = props.searchValue;


  const emboldenText = (text) => {
    const regex = RegExp(searchValue, "gi"); // case insensitive
    const replacement = "<b>" + searchValue + "</b>";
    return text.replace(regex, replacement);
  }
  return (
    <div className="card-news">
      <div className="card-news-l">
        <div className="card-news-thumb">
          <img src={props.thumbnail} />
        </div>
      </div>
      <div className="card-news-r">
        <div className="card-news-title" dangerouslySetInnerHTML={{__html:emboldenText(props.title)}}></div>
        <div className="card-news-date">Date: {props.date}</div>
        <div className="card-news-content" dangerouslySetInnerHTML={{__html:emboldenText(props.content)}}></div>
        <div className="card-news-readmore">
          <p>Read more...</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;
