console.log("content script loaded");
//$("img").css("border", "5px solid orange");
function addborder(event) {
    $(this).css("border", "5px solid orange");
}
function removeborder(event) {
    $(this).css("border", "");
}
$("img").hover(addborder, removeborder);