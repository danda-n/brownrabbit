import React from "react";
import "../scss/Home.scss";

import slider_img1 from "../images/slider_img1.png";
import slider_img2 from "../images/slider_img2.png";
import slider_img3 from "../images/slider_img3.png";
import slider_img4 from "../images/slider_img4.png";
import slider_img5 from "../images/slider_img5.png";

import social_fb from "../images/social_fb.png";
import social_ig from "../images/social_ig.png";
import social_linkedin from "../images/social_linkedin.png";
import social_twitter from "../images/social_twitter.png";
import social_yt from "../images/social_yt.png";

import sponsor_1 from "../images/sponsors/sponsor_1.jpg";
import sponsor_2 from "../images/sponsors/sponsor_2.jpg";
import sponsor_3 from "../images/sponsors/sponsor_3.jpg";
import sponsor_4 from "../images/sponsors/sponsor_4.jpg";
import sponsor_5 from "../images/sponsors/sponsor_5.jpg";
import sponsor_6 from "../images/sponsors/sponsor_6.jpg";
import sponsor_7 from "../images/sponsors/sponsor_7.jpg";
import sponsor_8 from "../images/sponsors/sponsor_8.jpg";
import sponsor_9 from "../images/sponsors/sponsor_9.jpg";
import sponsor_10 from "../images/sponsors/sponsor_10.jpg";
import sponsor_11 from "../images/sponsors/sponsor_11.png";
import sponsor_12 from "../images/sponsors/sponsor_12.png";
import sponsor_13 from "../images/sponsors/sponsor_13.jpg";
import sponsor_14 from "../images/sponsors/sponsor_14.png";
import sponsor_15 from "../images/sponsors/sponsor_15.jpg";
import sponsor_16 from "../images/sponsors/sponsor_16.png";
import sponsor_17 from "../images/sponsors/sponsor_17.jpg";
import sponsor_18 from "../images/sponsors/sponsor_18.png";
import sponsor_19 from "../images/sponsors/sponsor_19.jpg";
import sponsor_20 from "../images/sponsors/sponsor_20.jpg";
import sponsor_21 from "../images/sponsors/sponsor_21.png";
import sponsor_22 from "../images/sponsors/sponsor_22.jpg";
import sponsor_23 from "../images/sponsors/sponsor_23.png";

import flickr1 from "../images/flickr_img1.jpg";
import flickr2 from "../images/flickr_img2.jpg";
import flickr3 from "../images/flickr_img3.jpg";
import flickr4 from "../images/flickr_img4.jpg";
import flickr5 from "../images/flickr_img5.jpg";
import flickr6 from "../images/flickr_img6.jpg";
import flickr7 from "../images/flickr_img7.jpg";
import flickr8 from "../images/flickr_img8.jpg";
import flickr9 from "../images/flickr_img9.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HomeNewsList from "./HomeNewsList";

export default class Layout extends React.Component {
  
  render() {
    const rng = Math.floor(Math.random() * 5);
    const carousel_options = {
      selectedItem: rng,
      showStatus: false,
      showThumbs: false,
      autoPlay: true,
      stopOnHover: true,
      swipeable: true,
      infiniteLoop: true,
      //   dynamicHeight: true,
      transitionTime: 1000,
      interval: 3000,
    };
    const event_msg =
      "NORDIC BARISTA CUP 2021 \nCopenhagen, Denmark \nDates: 25th - 27th August 2021 \nTheme: SENSORY";
    const score_msg =
      "List of winners from past years \n\n2020 - Sweden \n2019 - Denmark \n2018 - Sweden \n2017 - Norway \n2016 - Norway \n2015 - Denmark";
    const footer_quote_msg =
      '"To create an environment in which knowledge \nabout coffee and its sphere can be obtained."';
    const footer_l_msg =
      '"...create an environment..." \nCombined with personally absorption having \nthe opportunity to see and experience countries, \npeople, traditions etc. will always server as a \nsource of an inspiration in our daily work. \nThe organization behind the Nordic Barista Cup \nsee it as its main purpose to be a part of creating \nthis forum in which people can meet, bond and \nachieve further knowledge.';
    const footer_r_msg =
      "Amagertorv 13 \n1160 Copenhagen K \n+45 33 12 04 28 \nCVR: 11427693 \nEmail: bbrend@nordicbaristacup.com";
    return (
      <div className="app-home">
        <Carousel {...carousel_options}>
          <div>
            <img src={slider_img1} />
          </div>
          <div>
            <img src={slider_img2} />
          </div>
          <div>
            <img src={slider_img3} />
          </div>
          <div>
            <img src={slider_img4} />
          </div>
          <div>
            <img src={slider_img5} />
          </div>
        </Carousel>
        <div className="app-social">
          <div className="app-social-l">
            <p>
              "Good communication is just as stimulating as black coffee, and
              just as hard to sleep after."
            </p>
          </div>
          <div className="app-social-r">
            <a href="fb_link">
              <img src={social_fb} />
            </a>
            <a href="ig_link">
              <img src={social_ig} />
            </a>
            <a href="yt_link">
              <img src={social_yt} />
            </a>
            <a href="twitter_link">
              <img src={social_twitter} />
            </a>
            <a href="linkedin_link">
              <img src={social_linkedin} />
            </a>
          </div>
        </div>
        <div></div>
        <div className="app-page">
          <div className="app-page-l">
            <HomeNewsList searchValue={this.props.searchValue}></HomeNewsList>
          </div>
          <div className="app-page-r">
            <div className="app-page-r-content">
              <div className="app-page-r-cart">
                <h2>NBC Shop</h2>
                <p>Your shopping cart is empty.</p>
                <span>
                  <a href="#">Visit the shop.</a>
                </span>
              </div>
              <div className="app-page-r-next">
                <h2>Next Event</h2>
                <p>{event_msg}</p>
              </div>
              <div className="app-page-r-score">
                <h2>Scoreboard</h2>
                {score_msg}
              </div>
            </div>
          </div>
        </div>
        <div className="app-sponsors">
          <h2>Nordic Barista Cup Sponsors</h2>
          <div>
            <img src={sponsor_1} />
            <img src={sponsor_2} />
            <img src={sponsor_3} />
            <img src={sponsor_4} />
            <img src={sponsor_5} />
            <img src={sponsor_6} />
            <img src={sponsor_7} />
          </div>
          <div>
            <img src={sponsor_8} />
            <img src={sponsor_9} />
            <img src={sponsor_10} />
            <img src={sponsor_11} />
            <img src={sponsor_12} />
            <img src={sponsor_13} />
            <img src={sponsor_14} />
          </div>
          <div>
            <img src={sponsor_15} />
            <img src={sponsor_16} />
            <img src={sponsor_17} />
            <img src={sponsor_18} />
            <img src={sponsor_19} />
            <img src={sponsor_20} />
            <img src={sponsor_21} />
          </div>
          <div>
            <img src={sponsor_22} />
            <img src={sponsor_23} />
          </div>
        </div>
        <div className="app-footer">
          <div className="app-footer-l col">
            <h2>About Nordic Barista Cup</h2>
            <p>The vision within the Nordic Barista Cup is:</p>
            <span>{footer_quote_msg}</span>
            <p className="msg-breaks">{footer_l_msg}</p>
          </div>
          <div className="app-footer-m col">
            <h2>NBC Flickr Stream</h2>
            <div>
              <img src={flickr1} />
              <img src={flickr2} />
              <img src={flickr3} />
            </div>
            <div>
              <img src={flickr4} />
              <img src={flickr5} />
              <img src={flickr6} />
            </div>
            <div>
              <img src={flickr7} />
              <img src={flickr8} />
              <img src={flickr9} />
            </div>
          </div>
          <div className="app-footer-r col">
            <h2>Contact</h2>
            <h4>Nordic Barista Cup</h4>
            <span className="msg-breaks">{footer_r_msg}</span>
            <div>
              <a href="fb_link">
                <img src={social_fb} />
              </a>
              <a href="ig_link">
                <img src={social_ig} />
              </a>
              <a href="yt_link">
                <img src={social_yt} />
              </a>
              <a href="twitter_link">
                <img src={social_twitter} />
              </a>
              <a href="linkedin_link">
                <img src={social_linkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
