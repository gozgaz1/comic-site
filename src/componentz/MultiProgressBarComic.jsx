import React, { useEffect } from 'react';
import useStorageComic from '../stores/useStorageComic';
import { motion } from 'framer-motion';
import '../Styling/ProgressBar.css';

const MultiProgressBarComic = ({ fileArray, index, setFileArray }) => {
    const { url, progress } = useStorageComic(fileArray[index].file, fileArray[index].filePurpose, fileArray[index].pageNo, fileArray[index].folderType, fileArray[index].chapter);
    console.log(progress);
    // console.log(progress, url);

    // to remove the progress bar after you finish uploading (ea. we receive the url from the upload)
    useEffect(() => {
        if (url && fileArray[index].run) {
            let tempArray = [...fileArray];
            tempArray[index] = null;
            setFileArray(tempArray);
        }
    }, [url, fileArray, index, setFileArray]);

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%'}}
        ></motion.div>
    )
}

export default MultiProgressBarComic;