function loadData(){
  jQuery.ajax( {
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1377128560.1677ed0.3cbc51058d3448be81bf01626ad230e9&callback=?',
      type: 'GET',
      data: { link: '' },
      success: function( response ) {
        console.log(success);
          // response
      }
  } );
}
