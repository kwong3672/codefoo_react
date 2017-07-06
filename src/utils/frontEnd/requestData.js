import jsonp from 'fetch-jsonp';

const requestData = (category = 'videos', startIndex = 0, count = 10) => {
  return jsonp(`http://ign-apis.herokuapp.com/${category}?startIndex=${startIndex}\u0026count=${count}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export default requestData;