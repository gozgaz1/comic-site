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
        let tempDoc = [];
        if (documents.length > 0) {
            tempDoc = documents.slice().sort((a,b) => {return a.chapter< b.chapter ? -1 : a.chapter > b.chapter ? 1 : 0});
        }
        setDocs(tempDoc);
      });
      
    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);
  return { docs };
}

export default useFirestoreComic;