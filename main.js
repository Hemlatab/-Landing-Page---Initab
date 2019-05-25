let redditJson = `[
    {"title": "The revolutionary project management tool is here and it\'s visual. Start Your Free Trial Now", "postedBy":"u/jfadev", "redditScore":"99", "link":""},
    {"title": "[UPDATE] React-Formik-UI v3 released. Improved styling, Dropzone, and PhoneInput components", "postedBy":"u/kaithotz", "redditScore":"78", "link":"Link To Comments"},
    {"title":"Turn your existing site into PWA with this JS library", "postedBy":"u/jfadev", "redditScore":"99", "link":""},
    {"title":"GitHub - eldinious/network-avatar-picker: NPM module which returns a user's social network without the", "postedBy":"u/jfadev", "redditScore":"99", "link":""}]`;
            
let reddit =JSON.parse(redditJson);

let html='';
let newsFeed = document.getElementById('newsFeed');

reddit.forEach(redditNews => {
    html += `<div class="reddit-feed"><p class="para-1">${redditNews.title}</p>`;
    html+=`<p class="posted-by">Posted by:<span class="reddit-user"> ${redditNews.postedBy}</span></p>`;
    html+=`<p class="reddit-score">Reddit Score: ${redditNews.redditScore}</p>`;
    html+=`<p><a class="reddit-link" href="#">${redditNews.link}</a></p></div>`;
    newsFeed.innerHTML= html;
    console.log(redditNews.title);

});

let jsHistoryJson = `[{ "icon":"images/medium.ico", "title":"What the heck is a Callback? - codeburst", "time":"2 days"},
                    { "icon":"images/mozilla.png", "title":"Javascript - MDN", "time":"2 days"},
                    { "icon":"images/mozilla.png", "title":"Number Prototype", "time":"2 days"},
                    { "icon":"images/mozilla.png", "title":"Number Prototype. Prototype Fixed?", "time":"2 days"},
                    { "icon":"images/mozilla.png", "title":"Number?", "time":"2 days"},
                    { "icon":"images/mozilla.png", "title":"Maths?", "time":"2 days"}]`
let jsHistory=JSON.parse(jsHistoryJson);
console.log(jsHistory);
let jsHtml="";
let htmlHistory=document.getElementById('jsHistory');
jsHistory.forEach(function(history){
jsHtml +=`<p><span class="history-icon"><img src=${history.icon}></span><span class="history-title">${history.title}</span><span class="history-days">${history.time}</span></p>`;
htmlHistory.innerHTML= jsHtml;
});

let github =`[{
    "repo": "Repo:zeit/next.js","issue":"Issue #5354", "content":"Server-side only method to ensure server-only code is never sent to the browser"},
    {"repo": "Repo: zeit.next.js","issue":"Issue #4194", "content":"Context provided in _app.js can't be consumed in pages in SSR"}]`

    let githubIssues=JSON.parse(github);
    let githubContainer= document.getElementById('githubIssues');
   
    let issues = "";
    
    githubIssues.forEach(function(github){
    issues+=`<div><p><span class="github-repo">${github.repo}</span></p><p><span class="github-issue">${github.issue}</span></p><p><span class="github-content">${github.content}</span></p></div>`        
    githubContainer.innerHTML=issues;
    })
    /** Script for current time */
    let hours =document.getElementById('hours');
    let minutes =document.getElementById('minutes');
    let date =document.getElementById('date');
    let year =document.getElementById('year');
    let day =document.getElementById('day');
    let months=['Jan','Feb','March','April','May','June','July','August','September','October','November','December'];
    let time = new Date();

    let minute = time.getMinutes();
    let hour = time.getHours();

    if(minute<10){
        minute ='0'+ minute;
    }

    if(hour<10){
        hour = '0' + hour;
    }
   
    hours.textContent = hour;
    minutes.textContent = minute;
    date.textContent = time.getDate();
    year.textContent = time.getFullYear();
    day.textContent = months[time.getMonth()];

