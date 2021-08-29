import React, { useState } from 'react';
import ComicBar from './ComicBar';
import '../Styling/Comic.css';

const ComicReaderModal = ({fullChapterDoc, modalOpen, setModalOpen}) => {
    /* 
        This component comprises of 3 smaller components.
        There's a comic bar to help aid with the page indicator. Pages are loaded from doc via firestore.
        This is where the page value and page object should be loaded.

    */

    // currentPage is the page object. We actually get a lot of info from the object so might as well use it.
    const [currentPage, setCurrentPage] = useState(fullChapterDoc.length > 0 ? fullChapterDoc[0] : null);

    // currePageNo is the number indicating the current page we're on.
    const [currPageIndex, setCurrPageIndex] = useState(0);

    // currentChapter, this is the object which minic the main chapter object, only contains the fullChapter, meant for manipulation during modal
    const [currentChapter, setCurrentChapter] = useState(fullChapterDoc);

    // Handling turning on/off the modal to read.
    const handleChange = (e) => {
        let tempOpen = modalOpen;
        setModalOpen(!tempOpen);
    }

    const changePage = (newPage) => {
        let tempPage = newPage;
        setCurrentPage(tempPage);
    }

    const changePageIndex = (newPageIndex) => {
        // update the chapter at the particular indexes
        let tempDoc = fullChapterDoc;
        tempDoc[currPageIndex].className = 'comic-thumbnail';
        tempDoc[newPageIndex].className = 'comic-thumbnail current-page';

        // run the functions
        setCurrPageIndex(newPageIndex);
        setCurrentChapter(tempDoc);
    }

    return (
        <div className="comic-backdrop" >
            <ComicBar 
                fullChapterDoc={currentChapter}
                changePage={changePage}
                exitModal={handleChange}
                currentPage={currentPage}
                changePageIndex={changePageIndex}
            />
        </div>
    )
}
export default ComicReaderModal;