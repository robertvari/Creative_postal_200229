import React from 'react';
import "./UploadPost.css"
import ImageUploader from "../widgets/ImageUploader";

function UploadPost(props) {
    return (
        <div className="upload_page_layout">
            <ImageUploader/>

            <hr/>

            <textarea name="" id="" rows="5" placeholder="Photo description"/>

            <div className="tag_list_layout">
                <input type="text" placeholder="Add tag..."/>
            </div>

            <hr/>

            <button>Upload</button>
        </div>
    );
}

export default UploadPost;