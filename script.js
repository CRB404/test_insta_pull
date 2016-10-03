function loadJSONcall() {
  $.getJSON(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=1377128560.1677ed0.3cbc51058d3448be81bf01626ad230e9&callback=?',
        function(data) {
          var instaData = data;
          console.log(instaData);
          console.log("________________________");
          var imgPath = data.data.slice(0);
          console.log(imgPath);
          console.log("________________________");

        }
    );

}
