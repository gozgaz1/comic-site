import React, { useState, useEffect } from 'react';
import useFirestoreComic from '../stores/useFirestoreComic';
import '../Styling/ImageGrid.css';
import { firebaseDb } from '../firebase/firebase';
import { motion }  from 'framer-motion';
import ComicReaderModal from './ComicReaderModal';

const ComicGrid = () => {
    // This is simply an encapsulator of other components. The MAIN component is ComicContainer.
    // This is where the current chapter is loaded.
    /*
    ComicGrid should ONLY SHOW thumbnails that are the first page of each chapter (page 0). Click on one will open up ComicReader to read the full comic.
    Loadtime is not a concern of phase 1.
    From here, you only need to open the modal.
    */

          
    const [fullChapter, setFullChapter] = useState([]);        // This is the array of pages that is the full chapter being selected by user.

    const [currentChapter, setCurrentChapter] = useState(-1);   // This is the value of the current page

    const { docs } = useFirestoreComic('comics');

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        firebaseDb.collection('comics')
            .where('chapter', '==', currentChapter)
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
                });
                let tempDoc = [];
                if (documents.length > 0) {
                    tempDoc = documents.slice().sort((a,b) => {return +a.pageNo < +b.pageNo ? -1 : +a.pageNo > +b.pageNo ? 1 : 0});
                    tempDoc.forEach(doc => doc.className = 'comic-thumbnail');
                    tempDoc[0].className = 'comic-thumbnail current-page';
                }                
                setFullChapter(tempDoc);
            });
        // console.log('check chapter ', currentChapter);
    }, [currentChapter]);

    const ComicArray = ({doc}) => {
        const [loaded, setLoaded] = useState(false);
        return (
            <motion.div className="img-wrap" key={doc.id+'_'+doc.chapter} title={'Read Chapter ' + doc.chapter}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => {setCurrentChapter(doc.chapter); setModalOpen(true);}}
            >
                <img
                    src={doc.url}
                    onLoad={()=>{setLoaded(true)}}
                    alt="uploaded pic"/>
                {loaded && 
                    <div className="chapter-overlay">
                        {doc.chapter}
                    </div>
                }
            </motion.div>
        )
    }

    console.log(fullChapter);
    return (
        <>
        <div className="img-grid">
            {docs && docs.length < 1 && <h2>Nothing here yet.</h2>}
            {docs && docs.length > 0 && docs.map(doc => (
            <ComicArray doc={doc} key={doc.id}/>
            ))}
        </div>
        {modalOpen && fullChapter.length > 0 && <ComicReaderModal
            fullChapterDoc={fullChapter}
            setCurrentChapter={setCurrentChapter}
            setFullChapter={setFullChapter}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            />}
        </>
    )
}

export default ComicGrid;