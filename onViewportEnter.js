export function onViewportEnter($node, fn, { root = null, threshold = 0, rootMargin = "0px 0px 0px 0px" } = {}) {
    let observer = new IntersectionObserver((entries) => {
        
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].intersectionRatio > 0 || entries[i].isIntersecting) {
                fn();
            }
        }
    }, { root, threshold, rootMargin });

    observer.observe($node);

    return () => {
        observer.unobserve($node);
        observer = null;
    };
};