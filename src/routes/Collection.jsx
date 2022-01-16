import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import {getCollection} from "../data/collectionsData";
import axios from "axios";

const Collection = () => {
    const params = useParams();
    const [images, setImages] = useState(null);
    let collection = getCollection(params.collectionName);

    useEffect(() => {
        let shouldCancel = false;

        const createMappedImages = (data) => {
            let mappedImagesArray = [];
            data.forEach(url => {
                var img = new Image();
                img.src = url;
                img.onload = function() {
                    mappedImagesArray.push({
                        width: this.width,
                        height: this.height,
                        src: `${url}=w2048-h1024`
                    })
                }
            });
            return mappedImagesArray;
        }

        const getGooglePhotos = async () => {
            try {
                const response = await axios.get(`https://google-photos-album-demo2.glitch.me/${collection.albumId}`);

                if (!shouldCancel && response.data && response.data.length > 0) {
                    const mappedImages = createMappedImages(response.data);
                    setImages(mappedImages);
                }
            } catch (err) {
                console.error(err);
            }
        }
        getGooglePhotos();

        return () => shouldCancel = true;
    }, [])

    return (
        <div>
            <h2>{collection.name}</h2>
            <p>{collection.description}</p>
            <PhotoGallery images={images} />
        </div>
    )
}

export default Collection;
