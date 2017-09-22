// ==UserScript==
// @name         jianshu-index
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.jianshu.com/u/*
// @grant        none
// ==/UserScript==

$(() => {
    
        // create a function to check article manually.
        // from: 1,2,3,...
        // to: 1,2,3,...
        // region: include "from" and "to".
        window.checkArticles = (from, to) => {
    
            // get all links in the page.
            const $links = $('li[id^=note-]>.content>.title');
            const count = to - from + 1;
    
            [...Array(count).keys()].forEach(index => {
                const totalIndex = from + index - 1;
                const $link = $links.eq(totalIndex);
    
                // if overflow
                if ($link.length === 0) {
                    return;
                }
    
                // open the links.
                $link[0].click();
                console.warn(`check (${totalIndex + 1}): ${$link.html()}`);
            });
        };
    });