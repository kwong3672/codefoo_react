import React from 'react';

import Idx from './Idx';
import Duration from './Duration';
import VideoDescription from './VideoDescription';

require('./Video.css');

const Video = (props) => {
  return (
    <div className="col-xs-12 Video" onClick={props.toggle}>
      <Idx idx={props.idx} />
      <VideoDescription name={props.name} description={props.description} />
      <Duration duration={props.duration} />
    </div>
  );
};

export default Video;
