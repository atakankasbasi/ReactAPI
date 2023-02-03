import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {
    return (<div className="imageList" >
      <div> {imagesPlaceholder.map((image, index)=>{
           return <ImageItem key={index} image={image}/>;
        })}</div>
    </div>);
}

export default ImageList;

