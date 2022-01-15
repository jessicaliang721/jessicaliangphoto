import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";

const PhotoGallery = (props) => {
    const {
        albumId
    } = props;

    const [images, setImages] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }

    useEffect(() => {
        let shouldCancel = false;

        const createMappedImages = (data) => {
            let mappedImagesArray = [];
            data.forEach(url => {
                var img = new Image();
                img.onload = function() {
                    mappedImagesArray.push({
                        width: this.width,
                        height: this.height,
                        src: `${url}=w2048-h1024`
                    })
                }
                img.src = url;
            });
            return mappedImagesArray;
        }

        const getGooglePhotos = async () => {
            try {
                const response = await axios.get(`https://google-photos-album-demo2.glitch.me/${albumId}`);

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

    return images
        ? (
            <div>
                <Gallery photos={images} direction={"column"} onClick={openLightbox} />
                <ModalGateway>
                    { viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={images}
                            />
                        </Modal>
                    ) : null }
                </ModalGateway>
            </div>
        )
        : null;
};

export default PhotoGallery;