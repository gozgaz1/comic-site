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

    // this is the array of files being uploaded, each file should be an object of multiple properties
    const [fileArray, setFileArray] = useState([]);

    /* Sample of a file object being uploaded. Either it contains a file or an error.
    {
        file: null,
        error: '',
        pageNo: 0,
        filePurpose: 'comics',
        folderType: '',
        chapter: 0,
    }
    */

    const types = ['image/png', 'image/jpeg', 'image/gif'];

    const changeHandler = (e) => {
        let selectedFiles = e.target.files; // this is the list of files being uploaded
        for (let i = 0; i < selectedFiles.length; i++){
            if (selectedFiles[i] && types.includes(selectedFiles[i].type)) {
                setFileArray(fileArray => [...fileArray, 
                    { file: selectedFiles[i],
                        error: '',
                        pageNo: 0,
                        filePurpose: 'comics',
                        folderType: '',
                        chapter: 0,
                    }
                ]);
            } else {
                setFileArray(fileArray => [...fileArray, 
                    { file: null,
                        error: 'Please select an image of file (.png), (.jpeg) or (.gif).\nFound (.' + selectedFiles[i].type + ') type uploaded for file ' + selectedFiles[i].name + '.',
                        pageNo: 0,
                        filePurpose: 'comics',
                        folderType: '',
                        chapter: 0,
                    }
                ]);
            }
        }
        
    }

    const handlePageSelect = (e, index) => {
        let tempFileArray = fileArray;
        tempFileArray[index].pageNo = e.target.value;
        setFileArray(tempFileArray);
    }

    const handleChapterSelect = (e,index) => {
        let tempFileArray = fileArray;
        tempFileArray[index].chapter = e.target.value;
        setFileArray(tempFileArray);
    }

    const editFileUpload = (index) => {
        return (fileArray[index] && fileArray[index].file) ? <div className='file-success'>
            <label>{fileArray[index].file.name}</label>
            <label>Page No.<input type='number' value={fileArray[index].pageNo} onChange={e => {handlePageSelect(e, index);}}/></label>
            <label>Chapter No.<input type='number' value={fileArray[index].chapter} onChange={e => {handleChapterSelect(e, index)}}/>.</label>
        </div> : <div className='file-error'>{fileArray[index].error}</div>
    }

    return (
        <div className='multi-upload-form'>
            <label className='specialized-label'>
                <input type="file" onChange={changeHandler} multiple/>
                <span>+</span>
            </label>
            { fileArray.length > 0 && 
                <div className='output-upload'>
                    { fileArray.map((f, index) => {
                        return editFileUpload(index);
                    })}
                    {/* file && <ProgressBarComic file={file} setFile={setFile} filePurpose={fType} pageNo={pageNo} folderType={fType} chapter={chapter}/>*/}
                </div>
            }
        </div>
    )
}