import React, { useState, useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import '../Styling/Comic.css';

const ComicBar = ({fullChapterDoc, exitModal, currentPage, changePageIndex, currPageIndex}) => {
    /*
    This component takes docs (list of images) and arrange them in page order, top to bottom for mobile conveniences.|
    We'll use ul li to determine page and page numbering, this is the carousel
    */

    // hard-set to showing 4 panels per section. In the future I might just change this but for now it's strict 4.
    const show = 4;

    // section index indicates a section of 4 panels
    const [sectionIndex, setSectionIndex] = useState(0);

    const [chapterLength, setChapterLength] = useState(fullChapterDoc.length);

    const nextSection = () => {
        // move to the next 4-panel section
        if (sectionIndex < (chapterLength - show - sectionIndex)) {
            setSectionIndex(prevState => sectionIndex + 1)
        }
    }

    const prevSection = () => {
        //move back to the previous 4-panel section
        if (sectionIndex > 0) {
            setSectionIndex(prevState => sectionIndex - 1)
        }
    }
   
    const movePage = (e) => {
        // arrow right (39) or up (38) for moving next page
        // arrow left (37) or down (40) for moving previous page
        // esc (27) to exit
        switch(e.keyCode) {
            case 39:
            case 38:
                if (currPageIndex === (fullChapterDoc.length - 1)) break;
                let nextIndex = currPageIndex + 1;
                changePageIndex(nextIndex);
                // we also move section if the set of panels exceeds the current pages
                if (nextIndex >= ((sectionIndex + 1) * show)) nextSection();
                break;
            case 37:
            case 40:
                if (currPageIndex === 0) break;
                let prevIndex = currPageIndex - 1;
                changePageIndex(prevIndex);
                // we also move section if the set of panels is lower the current pages
                // 0,1,2,3 = section 0/ 4,5,6,7 = section 1/ etc.
                if (prevIndex < (sectionIndex * show)) prevSection();
                break;
            case 27:
                exitModal();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        document.onkeydown = movePage;
    });

    // Set the length to match current chapter from props
    useEffect(() => {
        setChapterLength(fullChapterDoc.length)
    }, [fullChapterDoc]);

    return(<>
        <div className='comic-nav'>
            {
                sectionIndex > 0 &&
                <button className='comic-button comic-button--left' onClick={prevSection}><FaIcons.FaAngleLeft/></button>
            }
            <div className='comic-page-wrapper'>
                <div 
                    className='comic-page-area'
                    style={{ 
                        transform: `translateX(-${sectionIndex * (100)}%)`
                    }}
                >
                    {fullChapterDoc && fullChapterDoc.map((doc,index) => (
                        <img className={doc.className} key={doc.pageNo} src={doc.url} alt="page on" onClick={() => {changePageIndex(index);}}/>
                    ))}
                </div>
            </div>
            {
                sectionIndex < (chapterLength - show - sectionIndex) &&
                <button className='comic-button comic-button--right' onClick={nextSection}><FaIcons.FaAngleRight/></button>
            }
        </div>
        <div className='comic-track' onClick={exitModal}>
            {currentPage &&
                <img src={currentPage.url} alt="page on"/>
            }
        </div>
        </>
    );
}

export default ComicBar;