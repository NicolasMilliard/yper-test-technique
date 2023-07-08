import { FC } from "react";
import HeadlineContainer from "presentation/containers/Home/HeadlineContainer/HeadlineContainer";
import SearchResultsContainer from "presentation/containers/Home/SearchResultsContainer/SearchResultsContainer";

const Home: FC = () => {
  return (
    <>
      <HeadlineContainer />
      <SearchResultsContainer />
    </>
  );
};

export default Home;
