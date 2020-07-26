import React, { Component } from 'react';
import { Grommet, Box, Carousel } from 'grommet';

const SimpleCarousel = (movies) => {
    return (
      <Grommet>
        <Box align="center" pad="large">
            <Box pad="xlarge" background="accent-1">
                Matt
                {console.log(movies.Title)}
            </Box>
            <Box pad="xlarge" background="accent-2">
                {movies.Year}
            </Box>
            <Box pad="xlarge" background="accent-3">
                {movies.Actors}
            </Box>
        </Box>
      </Grommet>
    );
  };

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() { 
        return (

            <SimpleCarousel controls={false} play={1500} movies={this.props.posts}></SimpleCarousel>

          );
    }
}
 
export default Movies;