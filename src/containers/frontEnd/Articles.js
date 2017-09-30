import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addArticles, toggleArticle } from '../../actions/frontEnd/articleActions';

import Image from '../../components/frontEnd/Image';
import Article from '../../components/frontEnd/Article';

class Articles extends Component {

  componentWillMount() {
    if (!this.props.articles.data) {
      this.props.getArticles();
    }
  }

  render() {
    let html = () => {
      if (this.props.articles.data) {
        return this.props.articles.data.map((article, idx) => {
          return (
            <div key={article.metadata.headline}>
              <Article 
                idx={idx} 
                headline={article.metadata.headline}
                subHeadline={article.metadata.subHeadline}
                toggle={() => this.props.toggleArticle(idx)}
              />
              <Image display={article.display} url={article.thumbnails[1].url} />

            </div>
          );
        });

      } else {
        return <div>loading articles</div>;
      }
    };

    return (
      <div>
        {html()}
      </div>
    );
  }



}

const mapPropsToState = (state = {}) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: (articles) => {
      dispatch(addArticles(articles));        
    },
    toggleArticle: (e) => {
      dispatch(toggleArticle(e));
    }
  };
};


export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Articles));
