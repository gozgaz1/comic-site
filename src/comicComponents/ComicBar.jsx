import React from 'react';
import '../Styling/Comic.css';

const ComicBar = ({fullChapterDoc, changePage, exitModal, currentPage, changePageIndex}) => {
    /*
    This component takes docs (list of images) and arrange them in page order, top to bottom for mobile conveniences.|
    We'll use ul li to determine page and page numbering, this is the carousel
    */

    return(<>
        <div className='comic-nav'>
            {fullChapterDoc && fullChapterDoc.map((doc,index) => (
                <img className={doc.className} key={doc.pageNo} src={doc.url} alt="page on" onClick={() => {changePage(doc); changePageIndex(index);}}/>
            ))}
        </div>
        <div className='comic-track' onClick={exitModal}>
            {currentPage &&
                <img src={currentPage.url} alt="page on"/>
            }
        </div>
        {/*
        <ul className='comic-track' onClick={exitModal}>
            {fullChapterDoc && fullChapterDoc.map(doc => (
                <li key={doc.id} onClick={() => {changePage(doc);}}>
                    <img src={doc.url} alt="page on"/>
                </li>
            ))}
        </ul>
            */}
        </>
    );
}

export default ComicBar;

// we used to use doc.pageNo, try something else like an object for now