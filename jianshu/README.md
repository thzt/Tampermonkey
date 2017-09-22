### close the comment

<br/>

#### background

[jianshu](www.jianshu.com) won't support to close all comments of articles again.

So I write two tampermonkey scripts to close the comments.

<br/>

#### use case

**(1) jianshu-individual.js**

It will check each article, if the comment is opened, then close it.

After closing the comment, it will kill the browser's tab.

<br/>

**(2) jianshu-index.js**

It will define a function to the **console** called `window.checkArticles`,

We can pass parameters to check some articles by given the region of `[from, to]`, such as, 

```
checkArticles(1, 10)
```

this command will open articles of index from `1` to `10`，（begin from `1`, not `0`）。