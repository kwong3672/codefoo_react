import requestData from '../../utils/frontEnd/requestData';  

export function addVideos(category = 'videos', startIdx = 0, count = 10) {
  return {
    type: 'ADD_VIDEOS',
    payload: requestData(category, startIdx, count)
  };
}

export function toggleImage(idx) {
  return {
    type: 'TOGGLE_IMAGE',
    payload: idx
  };
}
