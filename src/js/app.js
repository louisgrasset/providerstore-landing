const mouseTracker = () => {
    let trackerHideTimeout;
    let tracker = document.createElement('div');
    tracker.classList = 'mouse-tracker';
    document.body.appendChild(tracker);
    tracker = document.querySelector('.mouse-tracker');
    const tags = [
        'A', 'BUTTON'
    ];
    const classes = [
        'collection-links--link'
    ];

    document.addEventListener('click', () => {
        tracker.classList.add('is-clicked');
        setTimeout(() => {
            tracker.classList.remove('is-clicked');
        }, 100);
    });

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            clearTimeout(trackerHideTimeout);
            tracker.classList.remove('is-hidden');
            if (tags.includes(e.target.tagName) ||
                tags.includes(e.target.parentElement.tagName) ||
                classes.includes(e.target.classList[0])) {
                setMouseTrackerCoordinates(e, tracker, true);
                tracker.classList.add('is-triggered');
            } else {
                setMouseTrackerCoordinates(e, tracker, false);
                tracker.classList.remove('is-triggered');
            }
            trackerHideTimeout = setTimeout(() => {
                tracker.classList.add('is-hidden');
            }, 5000);
        });
    });
};

const setMouseTrackerCoordinates = (event, tracker, isTriggered) => {
    tracker.style.left = event.clientX - (isTriggered ? 25 : 10) + 'px';
    tracker.style.top = event.clientY - (isTriggered ? 25 : 10) + 'px';
};


const registerMenu = (element) => {
    let root = document.querySelector(element);
    if (root) {
        let imagesWrapper = root.querySelector('.collection-images');
        let links = root.querySelectorAll('.collection-links--link');
        links.forEach((link, key) => {
            link.addEventListener('mouseenter', () => {
                let id = link.getAttribute('data-id');
                let image = imagesWrapper.querySelector(`[data-id="${id}"]`);
                image.classList.add('is-focused');
            });

            link.addEventListener('mouseleave', () => {
                let id = link.getAttribute('data-id');
                let image = imagesWrapper.querySelector(`[data-id="${id}"]`);
                image.classList.remove('is-focused');
            });
        });
    } else {
        console.error('Root element not found');
    }
};

const init = () => {
    document.querySelector('#root').classList.add('is-ready');
    registerMenu('.menu#menu');
    mouseTracker();
};

document.addEventListener('DOMContentLoaded', init);
