import React from 'react';
import { create } from 'istanbul-reports';

class ImageCard extends React.Component {
    state = {span :0};
    constructor (props) {
        super(props);
        this.imageRef = React.createRef();
    }

componentDidMount () {
    this.imageRef.current.addEventListener('load',this.setSpans);
}

setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10);
    this.setState({ spans }); 
}

    render () {
        return (
            <div style={{gridRowEnd :`span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description}/>
            </div>
        );
    }
}
export default ImageCard;