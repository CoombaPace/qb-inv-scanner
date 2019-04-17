$(document).ready(function () {
console.log('this works');
var author = 
'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..hgDZ-L9509JpiZ2yuK--Qw.qAeKMpPx16PzdR9q503VYb6NwBlCiJ4I7kn_zOVjYW3PdWQT8vPfWgzKUfKCHKGWUvRAiKdYFL4o880WfZTMGQKlo3zS_OTdMm1oLSVSSeyGRHdtsnfcNHfISgrUXZIJRzV43IWf_9vQy-FOefA5sK19dfEKiBqRnl6qMTUtyOSu0ikkKDuaHhTAEorTDlF98MDqyqdECP1P0wq3da0UYQ_TzgxrxatTW39CZisLbiOaL3y63O5QiQdCxPx2CWdOORvHeiaeQwQKD9c6ItBXudx_h4GIzSrTYhg_8Uh_DjEfxD8atRWPMUkPiHTz26DG2YS5QTW-R-QPFL-qbPvRAB1vId4aoFqCL8WkojkOJQxg3yWuOmbVB1_mI_vZ-Rh3PQ0wUXagcaKzlspz5YSJBF4MMTwlGTTyrKNNYG_84Qd9P1ode-R41vtPEhJaXyxjti6cTkBLi3qxZAowyGVp0KPhbB6D-39b0hPhUxQ2zChPxO_NXACJAbxxZRqBMwCdbQ2WYqj6ENqpqzr-2vwjqr96nqm2yCzpdAYKdPksYijAlZqbMkHp8eumX6CK6IEHin43bVy9Fr8bwEfUca8Xqyvke4PF1_OI11ZHE9BDH30YJXbvvz26l4fvAT_OgSfoqWMwYsN28hmNLgYOGZyva54hgmIGFVCfbAo0adTeDWddw2g38fA1JMrWrXPUfyX0.XUJE7eobKl9Biif4fm25RQ';

$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://sandbox-quickbooks.api.intuit.com/v3/company/123146395308319/companyinfo/123146395308319',
    headers: {'authorization': author,
              'accept': 'application/json'},
    method: 'GET',
  }).then(function (response) {

    console.log('does it though?');
    var name = response.CompanyInfo.CompanyName;
    console.log(name);

    // // var dTitle = $('#dTitle').val();
    // $('#result').empty();
    // //console.log(name);
    // console.log("NAME IS : " + name)

    // var resultDiv = $('<div>');
    // $('#result').html(resultDiv);
    // var p = $('<p>').html(`<h1 class="box">${name}</h1>`);
    // resultDiv.append(p);
  });


//   var OAuthClient;
//   require(['intuit-oauth'], function (foo) {
//     OAuthClient = foo;
// });

//   // var OAuthClient = require('intuit-oauth');
 
//   var oauthClient = new OAuthClient({
//       clientId: 'Q0o6FngJfkaXqjYlp5l2LOxv5z9vHVDeGwe1nFYhSRUYytIKuV',
//       clientSecret: 'OiwDBPGeuJvVQ434vxxxJl4Wi95wTVk931NUttLZ',
//       environment: 'sandbox',
//       redirectUri: 'http://localhost:8080/oauth2redirect'
//   });

//   var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId],state:'testState'});  // can be an array of multiple scopes ex : {scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId]}
//   res.redirect(authUri);

//   // Parse the redirect URL for authCode and exchange them for tokens
// var parseRedirect = req.url;
 
// // Exchange the auth code retrieved from the **req.url** on the redirectUri
// oauthClient.createToken(parseRedirect)
//     .then(function(authResponse) {
//         console.log('The Token is  '+ JSON.stringify(authResponse.getJson()));
//     })
//     .catch(function(e) {
//         console.error("The error message is :"+e.originalMessage);
//         console.error(e.intuit_tid);
//     });

//     if(oauthClient.isAccessTokenValid()) {
//       console.log("The access_token is valid");
//   } 
   
//   if(!oauthClient.isAccessTokenValid()){
      
//       oauthClient.refresh()
//           .then(function(authResponse) {
//               console.log('Tokens refreshed : ' + JSON.stringify(authResponse.json()));
//           })
//           .catch(function(e) {
//               console.error("The error message is :"+e.originalMessage);
//               console.error(e.intuit_tid);
//           });
      
//   }

  // //Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAqmUpbmR_CpPZg4Fx6PsYnXdiEKJ52uek",
  //   authDomain: "inventory-cc9b8.firebaseapp.com",
  //   databaseURL: "https://inventory-cc9b8.firebaseio.com",
  //   projectId: "inventory-cc9b8",
  //   storageBucket: "inventory-cc9b8.appspot.com",
  //   messagingSenderId: "560743834764"
  // };
  // firebase.initializeApp(config);


  // var database = firebase.database();


  // const invDB = { //object to track uniqueIDs for each beer TODO update placeholder with beer type
  //   B0854141006410: '-LarLGv5K2cwCBNSFMfg',
  //   B0860000660402: '-LarLGv8o4ozan6yH0W7',
  //   B0853249004373: '-LarLGv9tfyPEicnD6Mw',
  //   B0859490002427: '-LarLGv9tfyPEicnD6Mx',
  //   B0856765007194: '-LarLGv9tfyPEicnD6My',
  //   B0011711276370: '-LarLGvA4iLxGlDv0f6F',
  //   B0709870876387: '-LarLGvA4iLxGlDv0f6G',
  //   B0635797791963: '-LarLGvBTjhbUoe-GwMd',
  //   B0853249004106: '-LarLGvBTjhbUoe-GwMe',
  //   B0851831000017: '-LarLGvBTjhbUoe-GwMf',
  // }
  // database.ref('/inventory/' + invDB.B0854141006410).update({ 'qty': 1234567 });
  var modal = document.querySelector("#modal");
  var closeButton = document.querySelector("#close");
  ///////////////Begin Quagga API call///////////////
  let dataValidation = false; //initialize dataValidation variable as false
  let addRemove;
  $('#play').hide(); //hides the video area upon script execution. TODO: This might be better as a default CSS property

  $('.startButton').on('click', function () { //When the start/barcode scan button is clicked
    console.log(this.id)
    if (this.id === 'add') {
      addRemove = true; //add button is clicked
    } else {
      addRemove = false; //remove buton is clicked
    }

    $('#play').show(); //shows the video area TODO: do we need to actually show this video feed?
    Quagga.init({ //initializes the library for configuration (config) and callback (err)
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#play')    // choose the div which contains the <video> tag
      },
      decoder: {
        readers: ["upc_reader"]/* other reader types: code_128_reader (default), ean_reader, ean_8_reader, code_39_reader, code_39_vin_reader, codabar_reader, upc_reader, upc_e_reader, i2of5_reader, 2of5_reader, code_93_reader */
      }
    }, function (err) {//error handling
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start(); //this method actually starts looking for the barcode in the video feed. Without Quagga.start(), it will never find a barcode!
    });
  });


  Quagga.onDetected(function abc(data) { //When a barcode is detected
    const readCode = 0 + data.codeResult.code;
    console.log(readCode); //this is the barcode output. I think the UPC code would be without the first and last digits, but I could be wrong
    if (readCode.length !== 12) {
      function toggleModal() {
        modal.classList.toggle("show-modal");
      }
      function windowOnClick(event) {
        if (event.target === modal) {
          toggleModal();
        }
      }
      closeButton.addEventListener('click', toggleModal);
      window.addEventListener('click', windowOnClick);
      //console.log('error, UPC code not read, please make sure code being scanned is a UPC type') //TODO: make this a modal alert box
      dataValidation = false;
    } else {
      console.log('UPC code read')
      dataValidation = true;
    }
    Quagga.stop(); //Stop quagga
    $('#play').hide(); //Hide the video area
    //TODO: for troubleshooting, remove for final and change readCode from let to const


    apiCall(readCode);

    updateInventory(readCode);
  })

  ///////////////End Quagga API///////////////
  var apiCall = function (readCode) {
    var upc = readCode;
    var getURL = `https://cors-anywhere.herokuapp.com/https://api.upcdatabase.org/product/${upc}/9C632CDFED6A28A6814FF46FB527C84D`;

    $.ajax({
      url: getURL,
      method: 'GET',
    }).then(function (response) {

      // console.log(response);
      // var result = response.data;
      var name = response.title;
      // var dTitle = $('#dTitle').val();
      $('#result').empty();
      //console.log(name);
      console.log("NAME IS : " + name)

      var resultDiv = $('<div>');
      $('#result').html(resultDiv);
      var p = $('<p>').html(`<h1 class="box">${name}</h1>`);
      resultDiv.append(p);
    });
  }



  var updateInventory = function (barcode) { //function to update quantity
    var dbKeyKey = 'B' + barcode; //the barcode with 'B' appended before, the key to the database key
    // console.log('dbKeyKey:' + dbKeyKey)
    var dbKey = invDB[dbKeyKey]; //the key to the database object
    // console.log('db key: ' + dbKey)
    // console.log('reference address: ' + '/inventory/' + dbKey)
    var currentQty; //initialize currentQty

    database.ref('/inventory/').on("child_added", function (snapshot) { //declare any event listener to pull data
      // console.log('snapshot start');
      // console.log('dbkey: ' + dbKey);
      if (snapshot.val().UPC == dbKeyKey) { //every database object will be looped through. we are only interested in the one that matches our UPC code

        console.log('before: ' + snapshot.val().qty);
        currentQty = snapshot.val().qty;

        // console.log(currentQty);
        if (addRemove) {
          database.ref('/inventory/' + dbKey).update({ 'qty': currentQty + 1 });
        } else {
          database.ref('/inventory/' + dbKey).update({ 'qty': currentQty - 1 });
        }
        // console.log('after: ' + snapshot.val().qty); // this console.log does not work because firebase updates are asynchronous
        // return currentQty;
      };

      updateHtml(currentQty);
    })
  }

  var updateHtml = function (currentQty) {
    if (addRemove) {
      $('#current').html(`<h1 class="box">Quanity: ${currentQty + 1}</h1>`);
    } else {
      $('#current').html(`<h1 class="box">Quanity: ${currentQty - 1}</h1>`);
    }
  }
});
