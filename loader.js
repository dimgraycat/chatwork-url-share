var targets = ['js/url-share-button.js', "js/font_awesome.js"];
targets.forEach(function(js){
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', chrome.extension.getURL(js));
    document.documentElement.appendChild(scriptElement);
});
