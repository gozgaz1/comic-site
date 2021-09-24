import React, { useState } from 'react';
import ImageGrid from '../../imageComponents/ImageGrid';
import ImageModal from '../../imageComponents/ImageModal';
import ScrollButton from '../../componentz/ScrollButton';

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className='container'>
            <h1>Gallery</h1>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            <ScrollButton />
        </div>
    )
}
