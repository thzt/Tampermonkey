// ==UserScript==
// @name         jianshu-individual
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.jianshu.com/p/*
// @grant        none
// ==/UserScript==

$(() => {
    const $body = $('body');
    const recursion = (p0, fn) => fn(p0, p1 => recursion(p1, fn));

    // scroll to bottom
    const bodyHeight = $body[0].scrollHeight;
    $body.scrollTop(bodyHeight);

    // wait for the comment to be shown
    recursion(null, (_, next) => {
        const $commentContainer = $('#vue_comment');

        // 1. wait for the comment container to be loaded
        if ($commentContainer.length !== 0) {
            console.warn('the comment container is loading');
            setTimeout(next, 500);
            return;
        }

        console.warn('the comment container is loaded');

        // note:
        // The comment container and the open button are shown simultaneously.
        // However, the close button is not so.

        // 2. if the comment container is loaded, and the open button is shown,
        //    the comment must be already closed.
        const $openButton = $('.open-btn');
        const isClosed = $openButton.length !== 0;

        console.warn('the comment is already closed');
        if (isClosed) {
            console.warn('close the window');

            window.opener = null;
            window.open('', '_self');
            window.close();
            return;
        }

        // 3. wait the close button to be shown
        const $closeButton = $('.close-btn');
        const isShown = $closeButton.length !== 0;
        if (!isShown) {
            console.warn('the close button is loading');
            setTimeout(next, 500);
            return;
        }

        console.warn('the close button is loaded');

        const partialRequestUrl = location.href.replace(/\/p\//, '/notes/');
        const requestUrl = `${partialRequestUrl}/toggle_comment`;
        $.ajax({
            url: requestUrl,
            type: 'PUT',
            success: () => {
                console.warn('close the window');

                window.opener = null;
                window.open('', '_self');
                window.close();
            }
        });
    });
});