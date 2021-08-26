import React, { useState } from 'react';
import useFirestoreComic from '../stores/useFirestoreComic';
import '../Styling/ImageGrid.css';
import { firebaseDb } from '../firebase/firebase';
import ComicContainer from './ComicContainer';

const ComicGrid = () => {
    // This is simply an encapsulator of other components. The main component is ComicContainer.
  
    const [comicState, setComicState] = useState({
        currentChapter: 0,      // This is the object's current chapter
        fullChapter: []         // This is the array of pages that is the full chapter being selected by user.
    });

    const changeFullChapter = (currChapter) => {
        firebaseDb.collection('comics')
            .where('chapter', '==', currChapter)
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
                });
                let tempDoc = documents.slice().sort((a,b) => {return a.pageNo < b.pageNo ? -1 : a.pageNo > b.pageNo ? 1 : 0});
                setComicState({
                    currentChapter: currChapter,
                    fullChapter: tempDoc,
                });
            });
        // console.log(comicState.fullChapter);
    }

    const { docs } = useFirestoreComic('comics');
    return <ComicContainer docs={docs} fullChapterDoc={comicState.fullChapter} changeFullChapter={changeFullChapter} comicState={comicState} />
}
export default ComicGrid;