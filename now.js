const now = function() {
    return (performance && performance.now) ?
    function now() { 
        return performance.now();
    } : Date.now;
}();

export { now };