### zhihu

#### 1. pull button

In the main page or the activities page of 'zhihu'，the data is load lazily.

Therefore we have to mannually scroll down the scroller to find more information.

This `pull` script is used to pull data automatically.

<br/>

Use case:

(1) When the `P` button in the corner panel is loaded, click the button, 

the script will automatically scroll down the page, with the button text modified to `Ping`.

(2) Click the `P` button again, the script will stop to fetch data, 

the button text is now `P` again. 