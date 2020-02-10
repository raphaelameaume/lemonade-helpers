# lemonade-helpers

### noop()
Empty function

### now()
Return performance.now if available, Date.now otherwise

### offBlur = onBlur(element, fn, [options])
Attach a `blur` listener to `element`. Return a function to detach the listener.

### offFocus = onFocus(element, fn, [options])
Attach a `focus` listener to `element`. Return a function to detach the listener.

### offChange = onChange(element, fn, [options])
Attach a `change` listener to `element`. Return a function to detach the listener.

### offClick = onClick(element, fn, [options])
Attach a `click` listener to `element`. Return a function to detach the listener.

### offMouseDown = onMouseDown(element, fn)
Attach a `mousedown` listener to `element`. Return a function to detach the listener.

### offMouseMove = onMouseMove(element, fn)
Attach a `mousemove` listener to `element`. Return a function to detach the listener.

### offMouseEnter = onMouseEnter(element, fn)
Attach a `mouseenter` listener to `element`. Return a function to detach the listener.

### onTouchStart(element, fn)
Attach a `touchstart` listener to `element`. Return a function to detach the listener.

### onTouchMove(element, fn)
Attach a `touchmove` listener to `element`. Return a function to detach the listener.

### onTouchEnd(element, fn)
Attach a `touchend` listener to `element`. Return a function to detach the listener.

### offPointerDown = onPointerDown(element, fn)
Attach `mousedown` and `touchstart` listeners to `element`. Return a function to detach the listeners.

### onPointerMove(element, fn)
Attach `mousemove` and `touchmove` listeners to `element`. Return a function to detach the listeners.

### onPointerUp(element, fn)
Attach `mouseup` and `touchend` listeners to `element`. Return a function to detach the listeners.

### offKeyDown = onKeyDown([element], fn, [options])
Attach a `keydown` listener to `element`. If only a function is provided, the listener will be attached to `document`.
Return a function to detach the listener.

### offKeyPress = onKeyPress(element, fn, [options])
Attach a `keypress` listener to `element`. If only a function is provided, the listener will be attached to `document`.
Return a function to detach the listener.

### offKeyUp = onKeyUp(element, fn, [options])
Attach a `keyup` listener to `element`. If only a function is provided, the listener will be attached to `document`.
Return a function to detach the listener.

### offRaf = onRAF(fn)
Subscribe `fn` on `requestAnimationFrame`. Return a function to cancel the subscription.

### offWindowResize = onWindowResize(fn)
Attach a `resize` listener to `window` if non-existent.
Subscribe `fn` on window resize. Return a function to cancel the subscription.

### offSwipeHorizontal = onSwipeHorizontal(element, fn, [options]) (Touch-only)
Attach `touchstart`, `touchmove` and `touchend` to `element` and trigger `fn` when finger moves more than options.delta on the `x` axis (default to 30px). Return a function to detach the listeners.

### offSwipeVertical = onSwipeVertical(element, fn, [options]) (Touch-only)
Attach `touchstart`, `touchmove` and `touchend` to `element` and trigger `fn` when finger moves more than options.delta on the `y` axis (default to 30px). Return a function to detach the listeners.

### offDragDrop = onDragDrop(element, fn, [options])
Trigger `fn` when element is `mousedown` or `touchstart` and when `options.outsideElement` is `mousemove` or `touchmove` 
Return a function to detach all the listeners created.
- `element`: the DOM element to attached `mousedown` and `touchstart` events
- `fn`: A callback function
- `options.outsideElement`: the DOM element to attached `mousemove` and `touchstart` events. Default to `document`.

### offKonami = onKonami(fn)
Attach `keydown` listener to `document` and trigger `fn` when consecutive keys match the Konami Code.
Return a function to detach the listener.

### preventEventIfNoKey(event)
Avoid event.preventDefault is the event was triggered while `CMD`, `Alt`, `Shift`, `Ctrl` was pressed.
Useful to prevent click on links while keeping the default behaviour (opening in a new tab) if a key is pressed simultaneously.

### style(element, property, value)
Shorthand for `element.style[property] = value`. Improve readability while styling different elements at the same time.

### styles(element, props)
Assign multiple property/value pairs at the same time.
```js
styles(element, {
    transform: `translate3d(${x}px, ${y}px, 0)',
    opacity, 
})
```
