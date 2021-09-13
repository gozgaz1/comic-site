import React, { useState } from 'react';
import UploadModal from './UploadModal.jsx';
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
                        filePurpose: fType,
                        folderType: fType,
                        chapter: 0,
                        run: false,
                    }
                ]);
            } else {
                setFileArray(fileArray => [...fileArray, 
                    { file: null,
                        error: 'Please select an image of file (.png), (.jpeg) or (.gif).\nFound (.' + selectedFiles[i].type + ') type uploaded for file ' + selectedFiles[i].name + '.',
                        pageNo: 0,
                        filePurpose: fType,
                        folderType: fType,
                        chapter: 0,
                        run: false,
                    }
                ]);
            }
        }   
    }

    return <>
        <div className='multi-upload-form'>
            <label className='specialized-label'>
                <input type="file" onChange={changeHandler} multiple/>
                <span>+</span>
            </label>
        </div>
        <UploadModal fileArray={fileArray} setFileArray={setFileArray} />
    </>
}