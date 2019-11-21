import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images :[]};

     onSubmit = async (term)=> {
        console.log(term)
        const response = await Unsplash.get('/search/photos',{
            params:{query:term},
        });
        console.log(response);
        this.setState({images : response.data.results})
    }
    render () {
        return (
            <div>
            <SearchBar onSubmit={this.onSubmit}/>
            <ImageList images={this.state.images}/>
            </div>
        );
    }
}
export default App;