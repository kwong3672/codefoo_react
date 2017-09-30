import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../../components/frontEnd/NavBar';
import Footer from '../../components/frontEnd/Footer';
import Container from '../../components/frontEnd/Container';

import { changeCategory } from '../../actions/frontEnd/appActions';
import { addVideos } from '../../actions/frontEnd/videoActions';
import { addArticles } from '../../actions/frontEnd/articleActions';

// import {} from './Frontend.css';


class Frontend extends Component {

  render() {
    const category = this.props.category;
    const idx = category === 'videos' ? this.props.videoIndex : this.props.articleIndex;
    const getMore = category === 'videos' ? () => this.props.getMoreVideos('videos', idx, 10) : () => this.props.getMoreArticles('articles', idx, 10);
  
    return (
      <div className="app container">
        <NavBar 
          category={category} 
          changeCategory={this.props.changeCategory}
        />
        <Container />
        <Footer 
          category={category} 
          idx={idx}
          getMore={getMore}
        />
      </div>
    );  
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.app.category,
    videoIndex: state.videos.startIndex,
    articleIndex: state.articles.startIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category) => {
      dispatch(changeCategory(category));
    },
    getMoreVideos: (category, idx, count) => {
      dispatch(addVideos(category, idx, count));
    },
    getMoreArticles: (category, idx, count) => {
      dispatch(addArticles(category, idx, count));
    }

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Frontend));
