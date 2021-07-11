import React from 'react'
import UploadForm from '../../userComponentz/UploadForm';

export default function ComicUpload() {
    return(
        <div className='portfolio-upload'>
            <h2>Comic Upload</h2>
            <UploadForm fType='comics'/>
        </div>
    )
}