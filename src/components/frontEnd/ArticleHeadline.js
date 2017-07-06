import React from 'react';

const ArticleHeadline = (props) => {
  return(
    <div className="col-xs-11">
      <div>{props.headline}</div>
      <div>{props.subHeadline}</div>
    </div>
  );
};

export default ArticleHeadline;
