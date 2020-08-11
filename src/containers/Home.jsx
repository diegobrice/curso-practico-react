import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
// import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

// const API = "http://localhost:3000/initalState";

const Home = ({ myList, trends, originals }) => {
  // const [videos, categories] = useInitialState(API);

  // videos.length === 0 ? (
  //   <h1>Loading...</h1>
  // ) :

  return (
    <>
      <Header />
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      {trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {originals.length > 0 && (
        <Categories title="Originals">
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {/* <Categories title="Originals">
        <Carousel>
          {videos.originals.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
export default connect(mapStateToProps, null)(Home);
