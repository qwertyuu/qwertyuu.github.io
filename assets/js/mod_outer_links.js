window.onload = function () {
    var anchors = document.getElementsByTagName('a');
    var re = new RegExp(document.location.href, "g");
    for (var i = 0; i < anchors.length; i++) {
        if (!(anchors[i].href.match(re) && anchors[i].href.includes('#'))) {
            anchors[i].setAttribute('target', '_blank');
        }
    }
};
