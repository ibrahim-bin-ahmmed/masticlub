AOS.init();
     // script.js
     document.addEventListener('DOMContentLoaded', () => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;
    
        function showLightbox(index) {
            lightbox.style.display = 'flex';
            lightboxImg.src = galleryItems[index].src;
            currentIndex = index;
        }
    
        function hideLightbox() {
            lightbox.style.display = 'none';
        }
    
        function showPrevImage() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
            lightboxImg.src = galleryItems[currentIndex].src;
        }
    
        function showNextImage() {
            currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
            lightboxImg.src = galleryItems[currentIndex].src;
        }
    
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                showLightbox(index);
            });
        });
    
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                hideLightbox();
            }
        });
    
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevImage();
        });
    
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    });