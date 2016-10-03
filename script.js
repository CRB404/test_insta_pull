function loadData(){
  console.log("test")
  jQuery.ajax( {
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN',
      type: 'GET',
      data: { link: '' },
      success: function( response ) {
        console.log(success);
          // response
      }
  } );
}
