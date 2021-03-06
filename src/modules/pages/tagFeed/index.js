import React, { Fragment, useEffect } from "react";
import Feed from "../../../component/feed";
import useFetch from "../../../hooks/useFetch";
import Pagination from '../../../component/pagination'
import PopularTags from '../../../component/popularTags'
import {getPaginator, limit} from '../../../utils'
import {stringify} from 'query-string'
import IsLoading from "../../../component/loading";
import ErrorMessage from "../../../component/ErrorMessage";
import FeedToggler from '../../../component/feedToggler'

const TagFeed = ({location, match}) => {
  const tagName = match.params.slug 
  const {offset, currentPage} = getPaginator(location.search)
  const stringifiedParams = stringify({
    limit,
    offset,
    tag: tagName,
  })
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const url = match.url

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler  tagName = {tagName}/>
            {isLoading && <IsLoading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
                <Pagination total={response.articlesCount} limit={limit} url={url} currentPage={currentPage} />
              </Fragment>
            ) }
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagFeed;
