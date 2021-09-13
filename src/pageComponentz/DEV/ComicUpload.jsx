import React from 'react'
import UploadFormComic from '../../userComponentz/UploadFormComic';
//import '../Styling/PortfolioUpload.css'

export default function ComicUpload() {
    return(
        <div>
            <h2>Comic Upload</h2>
            <UploadFormComic fType='comics' pageNo={0} chapter={0}/>
        </div>
    )
}