
export default function GalleryEntry(props) {
    console.log(props.image)
    return (
        <div className="card gallery-entry" >
            <div className="card-image gallery-image">
                <img src={props.image.image} />
            </div>
        </div>
    );
}