import React from "react";
// import "../scss/HomeNewsList.scss";
import HomeNewsCard from "./HomeNewsCard";
import HomeNewsData from "./HomeNewsData";

export default class HomeNewsList extends React.Component {
  render() {
    return (
      <div className="app-page-l">
        {HomeNewsData.map((news, i) => {
          return (
            <HomeNewsCard
              key={i}
              thumbnail={news.thumbnail}
              title={news.title}
              date={news.date}
              content={news.content}
              searchValue={this.props.searchValue}
            />
          );
        })}
      </div>
    );
  }
}
