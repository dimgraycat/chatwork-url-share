$(function() {
  var renderTimeLine = window.TimeLineView.prototype.renderTimeLine;
  window.TimeLineView.prototype.renderTimeLine = function (el) {
    renderTimeLine.apply(this, arguments);
    $(el).find('.chatwork-token-url.timelineLinkTrim').each(function() {
        var tag = $(this).parent();
        var url = $(this).attr('href');
        var f = $('<a></a>', {
            "href": 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
            "target": '_blank',
            "style": "margin-left: 5px;"
        }).append($("<i></i>", {
            "class": "fa fa-facebook-square",
            "aria-hidden": "true"
        }));
        var t = $('<a></a>', {
            "href": 'http://twitter.com/share?url=' + encodeURIComponent(url),
            "target": '_blank',
            "style": "margin-left: 5px;"
        }).append($("<i></i>", {
            "class": "fa fa-twitter-square",
            "aria-hidden": "true"}));
        $(tag).append(f);
        $(tag).append(t);
    });
  }
});
