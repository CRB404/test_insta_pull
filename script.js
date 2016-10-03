function loadJSONcall() {
  $.getJSON(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=1377128560.1677ed0.3cbc51058d3448be81bf01626ad230e9&callback=?',
        function(data) {
          var instaData = data;
          console.log(instaData);
          console.log("instaData ________________________");
          var Images = data.data.slice(0);
          console.log(Images);
          console.log("lastImg ________________________");


          for (var i=0; i<6; i++)
            for (var name in Images[i]) {
                console.log("parent: "+name);
                console.log("child: "+lastImg[i][name]);

            }



        }
    );

}
