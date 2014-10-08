// Create a function to log the response from the Mandrill API
/*function log(obj) {
    console.log(obj);
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('Wflir9K2pGRYFFfr88rREg');

// create a variable for the API call parameters


function sendTheMail() {
// Send the email!
    var tags1=document.getElementById('tags1').value;
    var tags=document.getElementById('tags').value;
    var title=document.getElementById('title').value;
    var organiser=document.getElementById('organiser').value;
    var emailid=JSON.parse(tags);
    var publicemailid=JSON.parse(tags1);
    //$('#tags').t
    var params1 = {
    "message": {
        "from_email":"eglapp@eglapp.com",
        "to":publicemailid,
        "subject": "Invitation For New Event",
        "text":organiser+"'s new event  "+title+" check it out on eglapp.com you can login or signup with your id"
    }
};
    m.messages.send(params1, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
    
    var params = {
    "message": {
        "from_email":"eglapp@eglapp.com",
        "to":emailid,
        "subject": "Invitation For New Event",
        "text":organiser+"'s new event  "+title+" check it out on eglapp.com you can login or signup with your id"
    }
};
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}

function sendMail(email) {
    
    //var signinuser=JSON.stringify(email);
    var params = {
    "message": {
        "from_email":"eglapp@eglapp.com",
        "to":[{"email":email}],
        "subject": "Welcome to Eglap",
        "html":"<h2 align='center'><img src='http://digitalmindsinc.co/eglapp2/img/logo.jpg'></h2><br><font color='red'>Dear , "+email+"</font><br><br><p>Almost Done! Your Eglapp Account is Activated successfully</p><br><br><p>Cheers,</p><p>The Eglapp Team</p><p>Keep in Touch!!</p>"
    }
};
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}

function printDiv() {
             var divElements = document.getElementById('print').innerHTML;
            var oldPage = document.body.innerHTML;

            document.body.innerHTML ="<html><head><title>Booking</title> </head><body>"+divElements+"</body></html>" ;

            window.print();

            document.body.innerHTML = oldPage;

        }
*/
function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var lat = document.getElementById('lat').value;
        var lng = document.getElementById('lng').value;
        var map_options = {
          center: new google.maps.LatLng(lat,lng),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options);
                var marker = new google.maps.Marker({
              position: map_options.center,
              map: map,
              title: 'Zoom for details'
          });
       google.maps.event.addDomListener(window, 'load', initialize);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    