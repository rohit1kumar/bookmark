const btnPush = document.querySelector('.btnPush');
// const boomark = chrome.bookmarks;
// add event listern
btnPush.addEventListener('click', async () => {
    // chrome.bookmarks.create(
    //     { 'parentId': '1', 'title': 'Extension bookmarks' },
    //     function (newFolder) {
    //         console.log("added folder: " + newFolder.title);
    //     },
    // );
    // chrome.bookmarks.create({
    //     'parentId': '556',
    //     'title': 'google',
    //     'url': 'https://www.google.com',
    // });
    async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.

        // let [tab] = await chrome.tabs.query(queryOptions);
        console.log(await chrome.tabs.query(queryOptions));
        // return tab;
    }
    getCurrentTab();
    // get all bookmark
    // chrome.bookmarks.getTree(
    //     (result) => {
    //         // console.log(result[0].children[0].children);
    //         // result[0].children[0].children.forEach((item) => {
    //         //     console.log(item.title);
    //         // });
    //         console.log(result);
    //     });
});
/*
id
:
"556"
index
:
28
parentId
:
"1" */