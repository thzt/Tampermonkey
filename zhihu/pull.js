// ==UserScript==
// @name         pull
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Add a "P" button to the corner panel so that we can pull data automatically.
// @author       thzt
// @match        https://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const recursion = (p0, fn) => fn(p0, p1 => recursion(p1, fn));
    const body = document.querySelector('.Entry-body');

    let querying = false;

    const button = document.createElement('button');
    button.setAttribute('class', 'Button CornerButton Button--plain');
    button.setAttribute('type', 'button');
    button.innerHTML = 'P';

    const div = document.createElement('div');
    div.setAttribute('class', 'CornerAnimayedFlex');
    div.addEventListener('click', () => {
        querying = !querying;
        if (!querying) {
            button.innerHTML = 'P';
            return;
        }

        button.innerHTML = 'Ping';
        recursion(null, (_, next) => {
            body.scrollTop = body.scrollHeight;
            if (!querying) {
                return;
            }
            setTimeout(next, 500);
        });
    });
    div.prepend(button);

    const panel = document.querySelector('.CornerButtons');
    panel.append(div);
})();