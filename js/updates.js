const timeline = [
    {
        year: '2021',
        items: [
            {
                datetime: '2021-06-12',
                day: '12',
                month: 'June',
                title: 'Website goes live!',
                content: 'Finished working on the website and finally published it on the web.'  
            },
            {
                datetime: '2021-06-05',
                day: '5',
                month: 'June',
                title: 'Started building this website',
                content: 'Finally, I began building this website to share my project with everyone around the world.'                
            }
        ]
    }
].reverse();

for(var i = 0; i < timeline.length; i++){
    let appcont = "";
    appcont += '<div class="timeline__group"><span class="timeline__year time" aria-hidden="true">' + timeline[i].year + '</span><div class="timeline__cards">';
    for(var j = 0; j < timeline[i].items.length; j++){
        appcont += '<div class="timeline__card card"><header class="card__header"><time class="time" datetime="'+ timeline[i].items[j].datetime +'"><span class="time__day">'+ timeline[i].items[j].day + '</span><span class="time__month">' + timeline[i].items[j].month + '</span></time><h3 class="card__title r-title">' + timeline[i].items[j].title + '</h3></header><div class="card__content"><p>' + timeline[i].items[j].content + '</p></div></div>';
    }
    appcont += '</div></div>';
    $(".timeline").append(appcont);
}