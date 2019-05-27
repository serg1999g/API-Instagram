let btn = document.querySelector('button'),
    clear = document.querySelector('#instafeed');


btn.addEventListener('click', function () {
    let userFeed = new Instafeed({
        get: 'user',
        limit: 4,
        userId: 2362015642,
        resolution: 'standard_resolution',
        accessToken: '2362015642.ebcd21b.444ca37536a24cef888d5cffe64181ba'
    });
    userFeed.run();
    clear.innerHTML = "";
});