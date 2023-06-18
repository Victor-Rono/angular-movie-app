export interface MovieInterface {
  id: string,
  primaryImage:{
    url: string,
    height:number,
    width:number,
    },
  releaseDate: {
    day:number,
    month:number,
    year:number,
    },
  titleText:{
    text: string,
  }
  titleType: {
    text: string,
  }
}

export interface SearchedMovieInterface {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
}
