//DOMContentLoaded - it fires when initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
    // querySelector - it returns the element within the document that matches the specified selector
    var dropdown = document.querySelector('.dropdown');

    // return if no dropdown
    if (!dropdown) {
        return;
    }

    //addEventListener - attaches an event handler to the specified element.
    dropdown.addEventListener('click', function (event) {

        //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
        event.stopPropagation();

        //classList.toggle - it toggles between adding and removing a class name from an element
        dropdown.classList.toggle('is-active');
    });
});

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.extend(window.dayjs_plugin_utc);