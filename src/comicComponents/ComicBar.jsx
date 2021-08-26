import React, { useState } from 'react';
import '../Styling/Comic.css';

const ComicBar = ({fullChapterDoc, changePage, exitModal, currentPageValue}) => {
    /* This component takes docs (list of images) and arrange them in page order, top to bottom for mobile conveniences. */
    /* We'll use ul li to determine page and page numbering, this is the carousel */

    const [isCurrPage, setIsCurrPage] = useState('');

    const updateCurrPage = (pageNo) => {
        if (currentPageValue === pageNo) {setIsCurrPage(' current-page');}
    }

    return(<>
        <div className='comic-nav'>
            {fullChapterDoc && fullChapterDoc.map(doc => (
                    <img className={'comic-thumbnail' + isCurrPage} src={doc.url} alt="page on" onClick={() => {changePage(doc); updateCurrPage(doc.pageNo); console.log(doc.pageNo);}}/>
            ))}
        </div>
        <ul className='comic-track' onClick={exitModal}>
            {fullChapterDoc && fullChapterDoc.map(doc => (
                <li key={doc.id} onClick={() => {changePage(doc);}}>
                    <img src={doc.url} alt="page on"/>
                </li>
            ))}
        </ul>
        </>
    );
}

export default ComicBar;

// we used to use doc.pageNo, try something else like an object for now