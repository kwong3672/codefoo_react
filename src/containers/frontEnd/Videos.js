import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Video from '../../components/frontEnd/Video';
import Image from '../../components/frontEnd/Image';

import { addVideos, toggleImage } from '../../actions/frontEnd/videoActions';

class Videos extends Component {

  componentWillMount() {
    if (!this.props.videos.data){
      this.props.getVideos();
    }
  }

  handleDuration(duration) {
    const hrs = Math.floor(duration / 3600);
    const mins = Math.floor(duration % 3600 / 60);
    const secs = duration % 60;

    return `${(hrs > 0 ? hrs + ':' : '')}${(hrs > 0 ? '0' + mins : mins)}:${secs < 10 ? '0' + secs : secs}`;
  }



  render() {
    let html = () => {
      if (this.props.videos.data) {
        return this.props.videos.data.map((video, idx) => {
          return (
            <div key={video.metadata.name}>

              <Video 
                idx={idx} 
                name={video.metadata.name} 
                description={video.metadata.description} 
                duration={this.handleDuration(video.metadata.duration)} 
                toggle={() => this.props.toggleImage(idx)}
              />
              <Image display={video.display} url={video.thumbnails[1].url} />

            </div>
          );
        });

      } else {
        return <div>loading videos</div>;
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
    videos: state.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (videos) => {
      dispatch(addVideos(videos));        
    },
    toggleImage: (e) => {
      dispatch(toggleImage(e));
    }
  };
};


export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Videos));
