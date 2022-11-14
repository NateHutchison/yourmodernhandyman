!function(){
    var strRatingOn = "<img src='//static-us-west-1.servicem8.com/versions/69492/images/icon_star_active.png'>";
    var strRatingOff = "<img src='//static-us-west-1.servicem8.com/versions/69492/images/icon_star_inactive.png'>";
    var arrSM8Feedback = [];
    
arrSM8Feedback.push({"rating":"5","message":"Nate is efficient and knowledgable.  He handled hanging 2 large mirrors very well.  I will call on him again and recommend Your Modern Handyman to family and fr","timestamp":1604523694,"readableTime":"11\/4\/2020"});
arrSM8Feedback.push({"rating":"5","message":"Nate was prompt, efficient, thoughtful, offered good advice and did excellent work.  I'll call him again!","timestamp":1604087644,"readableTime":"10\/30\/2020"});
arrSM8Feedback.push({"rating":"5","message":"Did an amazing job, will definitely hire again for my next TV Mount!","timestamp":1492823410,"readableTime":"04\/21\/2017"});

    var objHead = document.getElementsByTagName( "head" )[0];
    var objCSSElement = document.createElement("link");
    objCSSElement.setAttribute("rel", "stylesheet");
    objCSSElement.setAttribute("type", "text/css");
    objCSSElement.setAttribute("stylesheet", "css/widget.css");
    objHead.insertBefore( objCSSElement, objHead.firstChild );

    var strResult = '';
    for(var intIndex = 0; intIndex < arrSM8Feedback.length; intIndex++) {
        var objFeedback = arrSM8Feedback[intIndex];

        strResult += '<div class="servicem8-feedback-item">';
        for(var intRating=0; intRating < 5; intRating++) {
            if(objFeedback.rating > intRating) {
                strResult += strRatingOn;
            } else {
                strResult += strRatingOff;
            }
        }

        var strReadableTime = '';
        var dateFeedback = new Date(objFeedback.timestamp*1000);
        var intSecondsSinceFeedback = Math.floor((new Date() - dateFeedback) / 1000);
        if (intSecondsSinceFeedback > (7*86400)) {
            strReadableTime = dateFeedback.toLocaleDateString();
        } else if(intSecondsSinceFeedback > (24*3600)) {
            strReadableTime = Math.floor(intSecondsSinceFeedback / 86400) + ' days ago';
        } else {
            strReadableTime = Math.floor(intSecondsSinceFeedback / 3600) + ' hours ago';
        }

        strResult += '<div class="servicem8-feedback-item-time">' + strReadableTime + '</div>';
        strResult += '<p>' + objFeedback.message + '</p>';
        strResult += '</div>';
    }

     strResult += '<div class="servicem8-feedback-footer">Feedback by <a href="https://www.servicem8.com/?utm_source=feedback">ServiceM8</a></div>'; 

    var arrItems = document.getElementsByClassName( 'servicem8-feedback' );
    for(var intIndex = 0; intIndex < arrItems.length; intIndex++) {
        var objDiv = arrItems[intIndex];
        objDiv.innerHTML = strResult;
    }
}();