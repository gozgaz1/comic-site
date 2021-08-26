import React, { useState } from 'react';
import ComicBar from './ComicBar';
import '../Styling/Comic.css';

const ComicReaderModal = ({ fullChapterDoc, modalOpen, setModalOpen }) => {
    /* 
        This component comprises of 3 smaller components.
        There's a comic bar to help aid with the page indicator. Pages are loaded from doc via firestore.

    */
    const [currentPage, setCurrentPage] = useState(fullChapterDoc.length > 0 ? fullChapterDoc[0] : null);

    const handleChange = (e) => {
        let tempOpen = modalOpen;
        setModalOpen(!tempOpen);
    }

    const changePage = (newPage) => {
        console.log('current page before change: ', currentPage);
        setCurrentPage(newPage);
    }

    return (
        <div className="comic-backdrop" >
            <ComicBar fullChapterDoc={fullChapterDoc} changePage={changePage} exitModal={handleChange}/>
        </div>
    )
}
export default ComicReaderModal;