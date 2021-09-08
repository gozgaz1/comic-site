import React from 'react';
//import UploadForm from '../../userComponentz/UploadForm';
import PortfolioUpload from './PortfolioUpload';
import ComicUpload from './ComicUpload';
import ComicMultiUpload from './ComicMultiUpload';

export default function DEV() {
    return (
        <div className='container'>
            <h1>DEV</h1>
            <PortfolioUpload />
            <ComicUpload />
            <ComicMultiUpload />
        </div>
    )
}
