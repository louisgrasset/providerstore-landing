const registerMenu = (element) => {
    let root = document.querySelector(element);
    if (root) {
        let imagesWrapper = root.querySelector('.collection-images');
        let linksWrapper = root.querySelector('.collection-links');
        let links = root.querySelectorAll('.collection-links--link');
        let images = root.querySelectorAll('.collection-images--image');
        links.forEach((link, key) => {
            link.addEventListener('mouseenter', () => {
                let id = link.getAttribute('data-id');
                let image = imagesWrapper.querySelector(`[data-id="${id}"]`);
                let isLoosingFocusImage = document.querySelector('.is-loosing-focus');
                image.classList.add('is-focused');
                if (isLoosingFocusImage) {
                    isLoosingFocusImage.classList.remove('is-loosing-focus');
                }
            });

            link.addEventListener('mouseleave', () => {
                let id = link.getAttribute('data-id');
                let image = imagesWrapper.querySelector(`[data-id="${id}"]`);
                image.classList.add('is-loosing-focus');
                image.classList.remove('is-focused');

            });
        });
    } else {
        console.error('Root element not found');
    }
};

const init = () => {
    registerMenu('.menu#menu');
};

document.addEventListener('DOMContentLoaded', init);
