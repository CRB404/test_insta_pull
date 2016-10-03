function loadJSONcall() {
  $.getJSON(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=1377128560.1677ed0.3cbc51058d3448be81bf01626ad230e9&callback=?',
        function(data) {
          var instaData = data;
          console.log(instaData);
          console.log("instaData ________________________");
          var lastImg = data.data.slice(0);
          console.log(lastImg);
          console.log("lastImg ________________________");


          for (var i=0; i<lastImg.length; i++)
            for (var name in lastImg[i]) {
                console.log("0: "+name);
                console.log("images: "+lastImg[i][name].images);
                console.log("Target: "+lastImg[i][name].caption);
            }



        }
    );

}
