import { useState, useEffect } from "react";
import { firebaseStorage, firebaseDb, timestamp } from '../firebase/firebase'

const useStorageComic = (file, filePurpose, pageNo, folderType, chapter) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // reference:
        // ref() will get the name of the file for any file being uploaded, where the file should be saved
        const storageRef = firebaseStorage.ref(file.name);

        // this is the actual database
        // firebase call a database 'collection'
        // folderType.fType is the type of image we want to upload as and into a collection of the same name
        const collectionRef = firebaseDb.collection(folderType);

        // async, this will take the file and put it into the referenced location
        // will also listen to a 'state_change' with the [on] listener
        // we then get a 'snapshot' of the object
        storageRef.put(file).on('state_changed', (snap) => {
            // percentage of the upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);  // simple set progress to check for upload progress
        }, (err) => {       // if there's an error, we show it
            setError(err);
        }, async () => {    // asynchronously, we return the url of the image that's just uploaded
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt, filePurpose, pageNo, chapter });
            setUrl(url);
        });
    }, [file, filePurpose, pageNo, folderType, chapter]);

    return { progress, url, error }
    // the reason to return these url's is so we can later save them to the database THEN display them properly on the image site
}

export default useStorageComic;