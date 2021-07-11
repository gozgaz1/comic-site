import React, { useState } from 'react';
import ImageGrid from '../../componentz/ImageGrid';
import ImageModal from '../../componentz/ImageModal';

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
