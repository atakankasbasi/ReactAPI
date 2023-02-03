import axios from 'axios'
const searchImages=async(term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
      Authorization:'Client-ID F__DTWLXoeDMrVb6yEyPauwj5XXKIvlkHill-_Sk6cw'
    },
    params:{
      query:term,
    },
    });
    return response.data.results;
  };
  export default searchImages;