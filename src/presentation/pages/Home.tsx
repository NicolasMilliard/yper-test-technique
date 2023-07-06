import { FC } from "react";
import HeadlineContainer from "../containers/Home/HeadlineContainer/HeadlineContainer";
import SearchResultsContainer from "../containers/Home/SearchResultsContainer/SearchResultsContainer";

const Home: FC = () => {
  return (
    <>
      <HeadlineContainer />
      <SearchResultsContainer />
    </>
  );
};

export default Home;
