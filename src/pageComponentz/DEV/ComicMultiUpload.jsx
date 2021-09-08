import React from 'react'
import UploadMultiFormComic from '../../userComponentz/UploadMultiFormComic';
//import '../Styling/PortfolioUpload.css'

export default function ComicMultiUpload() {
    return(
        <div className='portfolio-upload'>
            <h2>Comic Multi Upload</h2>
            <UploadMultiFormComic fType='comics'/>
        </div>
    )
}