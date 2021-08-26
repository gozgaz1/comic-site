import React, { useState } from 'react';
import ImageGrid from '../../imageComponents/ImageGrid';
import ImageModal from '../../imageComponents/ImageModal';

export default function Portfolio() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className='container'>
            <h1>Portfolio</h1>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </div>
    )
}
