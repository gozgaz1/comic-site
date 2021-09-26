import React from 'react';
import ComicGrid from '../../comicComponents/ComicGrid';
import ScrollButton from '../../componentz/ScrollButton';

export default function Comic() {

    return (
        <div className='container'>
            <h1>Comic</h1>
            <ComicGrid />
            <ScrollButton />
        </div>
    )
}
