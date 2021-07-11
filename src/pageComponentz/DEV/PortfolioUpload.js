import React from 'react'
import UploadForm from '../../userComponentz/UploadForm';
//import '../Styling/PortfolioUpload.css'

export default function PortfolioUpload() {
    return(
        <div className='portfolio-upload'>
            <h2>Portfolio Upload</h2>
            <UploadForm fType='images'/>
        </div>
    )
}