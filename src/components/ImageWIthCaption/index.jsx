import "./index.scss";

const ImageWithCaption = ({path, caption}) => {

    console.log(path)
    return ( <div className="imageContainer">
        
        <img src={path} alt="Description" />
        <div className="annotation">{caption}</div>
        </div> );
}
 
export default ImageWithCaption;