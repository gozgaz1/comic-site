import React, { useEffect } from 'react';
import useStorage from '../stores/useStorage';
import { motion } from 'framer-motion';
import '../Styling/ProgressBar.css';

const ProgressBar = ({ file, setFile, filePurpose, pageNo, folderType }) => {
    const { url, progress } = useStorage(file, filePurpose.fType, pageNo, folderType.fType);
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

export default ProgressBar;