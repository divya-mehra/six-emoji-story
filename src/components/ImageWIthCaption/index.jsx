import "./index.scss";

const ImageWithCaption = ({path}) => {

    console.log(path)
    return ( <div className="imageContainer">
        
        <img src={path} alt="Description" />
        <div className="annotation">This is my caption.</div>
        </div> );
}
 
export default ImageWithCaption;