import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";

const PhotoGallery = (props) => {
    const {
        images
    } = props;

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

    return images
        ? (
            <div>
                <Gallery photos={images} direction={"row"} onClick={openLightbox} />
                <ModalGateway>
                    { viewerIsOpen ? (
                        <Modal
                            allowFullscreen={false}
                            onClose={closeLightbox}>
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