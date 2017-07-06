import requestData from '../../utils/frontEnd/requestData';  

export function addArticles(category = 'articles', startIdx = 0, count = 10) {

  console.log('inside add Articles function');
  return {
    type: 'ADD_ARTICLES',
    payload: requestData(category, startIdx, count)
  };
}

export function toggleArticle(idx) {
  return {
    type: 'TOGGLE_ARTICLE',
    payload: idx
  };
}

