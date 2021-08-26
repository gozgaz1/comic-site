import React, { useState } from 'react';
import ProgressBarComic from '../componentz/ProgressBarComic';
import '../Styling/UploadForm.css';

export default function UploadFormComic({fType, pageNo, chapter}) {
    const [file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/gif'];

    const changeHandler = (e) => {
        let selectedFile = e.target.files[0]; // this is the first file of list of files being uploaded
        // console.log(selectedFile);
        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image of file (.png), (.jpeg) or (.gif)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className='output'>
                { error && <div className='error'>{error}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBarComic file={file} setFile={setFile} filePurpose={fType} pageNo={pageNo} folderType={fType} chapter={chapter}/>}
            </div>
        </form>
    )
}