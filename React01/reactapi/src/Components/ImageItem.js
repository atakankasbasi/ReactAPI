function ImageItem({image}) {
    console.log(image);
    return (<div style={{ width: '18rem', display: 'inline-block'}}>
        <img className="imageListImg" src={image.urls.small} alt={image.alt_description}/>
    </div>);
}

export default ImageItem ;