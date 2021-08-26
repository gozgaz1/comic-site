
import React, { useState} from 'react';
import { motion }  from 'framer-motion';
import ComicReaderModal from './ComicReaderModal';

const ComicContainer = (props) => {
    /*
    ComicGrid should ONLY SHOW thumbnails that are the first page of each chapter (page 0). Click on one will open up ComicReader to read the full comic.
    Loadtime is not a concern of phase 1.
    */

    const [modalOpen, setModalOpen] = useState(false);


    return (
        <>
        <div className="img-grid">
            {props.docs && props.docs.map(doc => (
            <motion.div className="img-wrap" key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}s
                onClick={async() => {await props.changeFullChapter(doc.chapter); setModalOpen(true);}}//; setModalOpen(true);}}
            >
                <motion.img src={doc.url} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                />
            </motion.div>
            ))}
        </div>
        {modalOpen && <ComicReaderModal fullChapterDoc={props.fullChapterDoc} modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
        </>
    )
}

export default ComicContainer;