import React, { useState, useEffect } from 'react';
import ComicGrid from '../../comicComponents/ComicGrid';

export default function Comic() {
      
    const [comicState, setComicState] = useState({
        currentChapter: 0,      // This is the object's current chapter
        fullChapter: []         // This is the array of pages that is the full chapter being selected by user.
    });

    
    useEffect(() => {
        console.log('checking: ', comicState);
    },[comicState])

    return (
        <div className='container'>
            <h1>Comic</h1>
            <ComicGrid comicState={comicState} setComicState={setComicState} />
        </div>
    )
}
