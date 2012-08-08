console.log("content script loaded");
 var imges = [];
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

