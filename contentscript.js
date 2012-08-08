console.log("content script loaded");

$("<div/>").attr({ id: "div_oprationpanel" })
        .css({
            border: "solid 1px green",
            padding: 5
        }).appendTo($(document.body));

$("<div/>").attr("id", "div_saveimg")
        .css({
            border: "solid 1px orange",
            width: 30,
            height: 15
        }).html("save").appendTo($("#div_oprationpanel"));

$("#div_oprationpanel").float({ position: "rm" });
$("#div_saveimg").hover(addBackgroundColor, removeBackgroundColor);
function addBackgroundColor(event) {
    $(this).css("backgroundColor", "orange");
}
function removeBackgroundColor(event) {
    $(this).css("backgroundColor", "");
}

var image_downloader = {
    download_images: function (images) {
        var images_container = document.getElementById('image_downloader_images_container');
        if (!images_container) {
            images_container = document.createElement('div');
            images_container.id = 'image_downloader_images_container';
            images_container.style.display = 'none';
        }
        document.body.appendChild(images_container);

        while (images_container.children.length > 0) {
            images_container.removeChild(images_container.children[images_container.children.length - 1])
        }

        for (var i in images) {
            var anchor = document.createElement('a');
            anchor.href = images[i];
            anchor.download = '';
            images_container.appendChild(anchor);
            anchor.click();
        }

        document.body.removeChild(images_container);
    }
}

$("#div_saveimg").bind("click", function (event) {
    for (var img in imges) {
        imgUrls.push(img.src);
    }
    image_downloader.download_images(JSON.stringify(imgUrls));
});

var imges = [];
var imgUrls = [];
imges.contains = function (arr) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == arr)
            return true;
    }
    return false;
}

function addborder(event) {
    $(this).css("border", "5px solid orange");
}
function removeborder(event) {
    if (!imges.contains(this)) {
        $(this).css("border", "");
    }
}
$("img").hover(addborder, removeborder);

$("img").bind("click", function (event) {
    if (!imges.contains(this)) {
        imges.push(this);
        $(this).css("border", "5px solid orange");
    }
    else {
        imges.splice($.inArray(this, imges), 1);
        $(this).css("border", "");
    }
});