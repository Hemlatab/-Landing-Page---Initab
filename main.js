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

let jsHistoryJson = `[{ "icon":"", "title":"", "time":""}, ]`
let jsHistoryJson=JSON.parse(jsHistoryJson);
let jsHtml="";
let htmlHistory=document.getElementById('jsHistory');