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
                    tempDoc = documents.slice().sort((a,b) => {return a.pageNo < b.pageNo ? -1 : a.pageNo > b.pageNo ? 1 : 0});
                    tempDoc.forEach(doc => doc.className = 'comic-thumbnail');
                    tempDoc[0].className = 'comic-thumbnail current-page';
                }                
                setFullChapter(tempDoc);
            });
        // console.log('check chapter ', currentChapter);
    }, [currentChapter]);

    return (
        <>
        <div className="img-grid">
            {docs && docs.map(doc => (
            <motion.div className="img-wrap" key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}s
                onClick={() => {setCurrentChapter(doc.chapter); setModalOpen(true);}}
            >
                <motion.img src={doc.url} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                />
            </motion.div>
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