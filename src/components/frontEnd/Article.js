import React from 'react';

import Idx from './Idx';
import ArticleHeadline from './ArticleHeadline';

const Article = (props) => {
  return(
    <div className="col-xs-12" onClick={props.toggle}>
      <Idx idx={props.idx} />
      <ArticleHeadline headline={props.headline} subHeadline={props.subHeadline} />
    </div>
  );
};

export default Article;
