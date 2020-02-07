export const preventEventIfNoKey = (event) => {
    const withKey = event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (!withKey) {
        event.preventDefault();
    }
}