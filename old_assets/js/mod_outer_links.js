function hasAnyOf(str, includes) {
    for (let i = 0; i < includes.length; i++) {
        const include = includes[i];
        if (str.includes(include)) {
            return true;
        }
    }
    return false;
}

let stayHerePlease = [
    'raphaelcote.com/en',
    'raphaelcote.com/fr',
]

window.onload = function () {
    var anchors = document.getElementsByTagName('a');
    var re = new RegExp(document.location.href, "g");
    for (var i = 0; i < anchors.length; i++) {
        if (!hasAnyOf(anchors[i].href, stayHerePlease)) {
            anchors[i].setAttribute('target', '_blank');
        }
    }
};
