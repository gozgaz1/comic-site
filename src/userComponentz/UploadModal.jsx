import React, { useState, useEffect } from 'react';
import MultiProgressBarComic from '../componentz/MultiProgressBarComic';
import '../Styling/MultiUploadForm.css';

export default function UploadModal({fileArray, setFileArray}) {
    const [checkArray, setCheckArray] = useState(false);

    const resetSelection = () => {
        setCheckArray(false);
        setFileArray([]);
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

    const confirmUpload = () => {
        // set all of the data to start running, set run = true for all files aside from error
        let tempFileArray = fileArray;
        tempFileArray.map(f => {if (!f.error && !f.run) {f.run = true;} return f;});
        setFileArray(tempFileArray);
        setCheckArray(true);
        console.log(fileArray);
    }

    const editFileUpload = (index) => {
        if (fileArray[index] && !fileArray[index].run) {
            // if the object doesn't have run enabled, we just show the details before doing anything
            if (fileArray[index] && fileArray[index].file && !fileArray[index].error ) {
                return <div className='file-success'>
                    <label>{fileArray[index].file.name}</label>
                    <label>Page No.<input type='number' defaultValue={fileArray[index].pageNo} onChange={e => {handlePageSelect(e, index);}} min={0}/></label>
                    <label>Chapter No.<input type='number' defaultValue={fileArray[index].chapter} onChange={e => {handleChapterSelect(e, index)}} min={0}/></label>
                </div>;
            }
            else if (fileArray[index] && fileArray[index].error && !fileArray[index].file) {
                return <div className='file-error'>{fileArray[index].error}</div>;
            }
        }
        else {
            // if the object has run enable, we run it
            return fileArray[index] ? <MultiProgressBarComic 
                fileArray={fileArray}
                index={index}
                setFileArray={setFileArray}
            /> : null;
        }
    }

    useEffect(() => {
        //console.log(fileArray.every(element => element === null))
    }, [fileArray, checkArray]); // use this just so we can keep track of the fileArray, via the checkArray part

    return fileArray.length > 0 ?
        <div className='modal-output-backdrop'>
            <div className='modal-output-content'>
                <div className='modal-output-header'>
                    <h4 className='modal-output-title'>Upload File(s)</h4>
                    <button onClick={resetSelection}>X</button>
                </div>
                <div className='modal-output-body'>
                    { fileArray.map((f, index) => {
                        return editFileUpload(index);
                    })}
                </div>
                <div className='modal-output-footer'>
                    <button onClick={confirmUpload} disabled={fileArray.length < 1 || fileArray.every(element => element === null)}>Confirm</button>
                </div>
            </div>
        </div> : null
}