import { useState, useEffect } from 'react';
import { firebaseDb } from '../firebase/firebase';

const useFirestoreComic = (collection) => {
  // overview is a true/false value used to indicate if the comic's supposed to return only the front page of each chapter
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = firebaseDb.collection(collection)
      .where('pageNo', '==', 0) //this ensures the very first page of each chapter is the cover page
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });
      
    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);
  return { docs };
}

export default useFirestoreComic;