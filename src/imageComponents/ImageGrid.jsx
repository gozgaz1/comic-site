import React, { useState } from 'react';
import useFirestore from '../stores/useFirestore';
import '../Styling/ImageGrid.css';
import { motion }  from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    // console.log(docs);

    const ImageComponent = ({doc}) => {
        const [loaded, setLoaded] = useState(false);
        return (
            <>
            <motion.div
                className="img-wrap"
                key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}s
                onClick={() => setSelectedImg(doc.url)}
            >
                <img 
                    src={doc.url}
                    className={`image-${
                        loaded ? 'visible' :  'hidden'
                    }`}
                    alt="uploaded pic" 
                    onLoad={() => setLoaded(true)}
                />      
                { !loaded &&
                    <span className="loader"/>
                }
            </motion.div>
        </>
        )
    }

    return <div className="img-grid">
            {docs && docs.map(doc => (
                <ImageComponent doc={doc} key={doc.id}/>
            ))}
        </div>
}
export default ImageGrid;