const btnPush = document.querySelector('.btnPush');
// const boomark = chrome.bookmarks;
// add event listern
btnPush.addEventListener('click', () => {
    // get all bookmark
    chrome.bookmarks.getTree(
        (result) => {
            // console.log(result[0].children[0].children);
            // result[0].children[0].children.forEach((item) => {
            //     console.log(item.title);
            // });
            console.log(result);


        });
});