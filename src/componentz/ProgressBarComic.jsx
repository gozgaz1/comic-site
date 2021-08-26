import React, { useEffect } from 'react';
import useStorageComic from '../stores/useStorageComic';
import { motion } from 'framer-motion';
import '../Styling/ProgressBar.css';

const ProgressBarComic = ({ file, setFile, filePurpose, pageNo, folderType, chapter }) => {
    const { url, progress } = useStorageComic(file, filePurpose, pageNo, folderType, chapter);
    console.log(progress, url);

    // to remove the progress bar after you finish uploading (ea. we receive the url from the upload)
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBarComic;