$(function() {
  var renderTimeLine = window.TimeLineView.prototype.renderTimeLine;
  window.TimeLineView.prototype.renderTimeLine = function (el) {
    renderTimeLine.apply(this, arguments);
    $(el).find('.chatwork-token-url.timelineLinkTrim').each(function() {
        _this = this;
        var url = $(_this).attr('href');
        var ignoreList = [
            /https?.*chatwork\.com.*/,
            /https?.*github\.com.*/,
            /https?.*facebook\.com.*/,
            /https?.*google\.[com|co\.jp].*/,
            /https?.*yahoo\.[com|co\.jp].*/
        ];
        var ignore = false;
        $(ignoreList).each(function() {
            if (url.match(this)) {
                ignore = true;
                return false;
            }
        });
        if (!ignore) {
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
            $(_this).after(t).after(f);
        }
    });
  }
});
