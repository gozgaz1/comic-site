import React, { useState } from 'react';
import ProgressBarComic from '../componentz/ProgressBarComic';
import '../Styling/UploadForm.css';

export default function UploadMultiFormComic({fType}) {
    // we allow multiple uploads
    // we prefer this to be the a popup
    /* The ability to upload multiple AND edit their information is a MUST.
        For each of the file being presented for upload, you should b able to edit the information before uploading.
        A confirmation button is needed at the very end. This will only be available IF any of the file is erroneous.
        We might need a 2nd component to allow edit of information.
    */
    const [fileArray, setFileArray] = useState([{
        file: null,
        error: '',
    }]);

    const types = ['image/png', 'image/jpeg', 'image/gif'];

    const changeHandler = (e) => {
        let selectedFiles = e.target.files; // this is the list of files being uploaded
        for (let i = 0; i < selectedFiles.length; i++){
            if (selectedFiles[i] && types.includes(selectedFiles[i].type)) {
                setFileArray(fileArray => [...fileArray, 
                    { file: selectedFiles[i], error: ''}
                ]);
            } else {
                setFileArray(fileArray => [...fileArray, 
                    { file: null, error: 'Please select an image of file (.png), (.jpeg) or (.gif).\nFound (.' + selectedFiles[i].type + ') type uploaded for file ' + selectedFiles[i].name + '.'}
                ]);
            }
        }
        
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} multiple/>
                <span>+</span>
            </label>
            <div className='output'>
                { fileArray.length > 0  && fileArray.map(f => {
                    return (f && f.file) ? <div>{f.file.name}</div> : <div className='error'>{f.error}</div>
                })}
                {/* file && <ProgressBarComic file={file} setFile={setFile} filePurpose={fType} pageNo={pageNo} folderType={fType} chapter={chapter}/>*/}
            </div>
        </form>
    )
}