console.log("content script loaded");
function showImgSaveBtn(img) {
    var btn = $(img).next();
    if (btn && btn.html() == "save") {
        btn.show();
    }
    else {
        var offset = $(img).offset();
        var w = $(img).outerWidth(false);
        var h = $(img).outerHeight(false);
        $("<div/>").css({
            background: "orange",
            width: "40px",
            height: "20px",
            position: "absolute",
            top: offset.top + h - 20 + "px",
            left: offset.left + w + "px",
            cursor: "pointer",
            textAlign: "center"
        }).html('<a href="'+img.src+'" download>save</a>').hover(function (event) {
            $(this).show();
            $(img).css("border", "5px solid orange");
        },
                 function (event) {
                     $(this).hide();
                     $(img).css("border", "");
                 }).insertAfter($(img));
    }

}


function hideImgSaveBtn(img) {
    var btn = $(img).next();
    if (btn && btn.html() == "save") {
        btn.hide();
    }
}

function addborder(event) {
    $(this).css("border", "5px solid orange");
    showImgSaveBtn(this);
}
function removeborder(event) {
    if (!imges.contains(this)) {
        $(this).css("border", "");
    }
    hideImgSaveBtn(this);
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
function downLoadImg(imgurl) {
    var images_container = $('#image_saveBtn_images_container');
    if (!images_container[0]) {
        images_container = $('div').attr({ id: 'image_downloader_images_container' }).css({display:'none'});
    }
    images_container.appendTo($(document.body));

    var anchor = $("<a/>").attr({
        href: imgurl,
        download: ''
    });

    anchor.appendTo(images_container);

    anchor.click();

    images_container.remove();
}
