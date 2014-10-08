var adminurl="http://digitalmindsinc.co/eglapp11/admin/index.php/";
var apiServer ="http://digitalmindsinc.co/eglapp11/admin/index.php/";
var restservicemod = angular.module('restservicemod', [])
.factory('RestService',function($http)
{
    var demovar="hello";
    var myupload={};
    myupload.uploads=[];
	return {
		login:function(user,password){
            return $http.get(adminurl+"user/login?email="+user+"&password="+password,{});
        },
        authenticate: function(){
            var authenticate=$.jStorage.get('authenticate');
            if(authenticate)
            {
                return authenticate;
            }
            else
            {
                return false;
            }
        },
        getmap: function(data){
            return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+data+"&key=AIzaSyAj0OXepKIgjTlZiPe_ZVYTDjL8rYpobgQ",{});
        },
        deleteevent: function(id){
            return $http.get(adminurl+"event/delete?id="+id,{});
            
        },
        getuploads: function(upload){
            return myupload.uploads;
        },
        setuploads: function(upload){
             myupload.uploads=upload;
        },
        makeeventlive: function (data) {
            return $http.get(adminurl+"event/makeeventlive",{params: {id:data}});
        },
        getiplatlongjson: function(data){
            return $http.get(adminurl+"user/getlocationip?ip="+data,{});
        },
        update: function (data) {
            return $http({
                url: adminurl+'event/update',
                method: "POST",
               data: {'id':data.id,
                      'title':data.title,
                      'locationlat':data.locationlat,
                      'locationlon':data.locationlon,
                      'venue':data.venue,
                      'location':data.location,
                      'startdate':data.startdate,
                      'enddate':data.enddate,
                      'description':data.description,
                      'organizer':data.organizer,
                      'listingtype':data.listingtype,
                      'showremainingticket':data.showremainingticket,
                      'logo':data.logo,
                      'category':data.category,
                      'topic':data.topic,
                      'starttime':data.starttime,
                      'endtime':data.endtime,
                      'ticketname':data.ticketname,
                      'ticketqty':data.ticketqty,
                      'ticketprice':data.ticketprice,
                      'ticketpricetype':data.ticketpricetype,
                      'email':data.email,
                      'publicemail':data.publicemail,
                      'state':data.state,
                      'pin':data.pin,
                      'street':data.street,
                      'city':data.city,
                      'above18':data.above18,
                      'sponsorship':data.sponsorship}
            });
        },
        saveorganizer: function (data) {
            return $http.get(adminurl+"user/update",{params:data});
        },
        upcomingevents: function (data) {
            return $http.get(adminurl+"event/upcomingevents?ipcity="+data,{});
        },
        getipjson: function(data){
            return $http.get("http://jsonip.com?callback=",{});
        },
        findoneuser: function (data) {
            return $http.get(adminurl+"user/findone",{params: {id:data}});
        },
        getemail: function(uid,eid){
            return $http.get(adminurl+"event/getemail?uid="+uid+"&eid="+eid,{});
            
        },
        getemails: function(id){
            return $http.get(adminurl+"event/getemails?id="+id,{});
            
        },
        saveemails: function(data){
            return $http.get(adminurl+"event/saveemails",{params:data});
            
        },
        logout: function () {
            $.jStorage.flush();
            return $http.get(adminurl+"user/logout",{});
        },
        findcategoryevent: function (id) {
            return $http.get(adminurl+"category/findalleventbycategory",{params: {category:id}});
        },
        find: function (data) {
            return $http.get(adminurl+"event/showalleventsbyuserid",{params: {id:data}});
        },
        getemail: function(uid,eid){
            return $http.get(adminurl+"event/getemail?uid="+uid+"&eid="+eid,{});
            
        },
        deleteall: function(uid,eid){
            return $http.get(adminurl+"event/deleteall?uid="+uid+"&eid="+eid,{});
            
        },
        deleteemail: function(id){
            return $http.get(adminurl+"event/deleteemail?id="+id,{});
            
        },
        sendoneemail: function(data){
            return $http.get(adminurl+"event/sendoneemail?email="+data,{});
            
        },
        deleteselected: function(id){
            return $http.get(adminurl+"event/deleteselected?ids="+id,{});
            
        },
        sendselected: function(id){
            return $http.get(adminurl+"event/sendselected?ids="+id,{});
            
        },
        validatesponsor: function(user,event){
            return $http.get(adminurl+"event/validatesponsor?user="+user+"&event="+event,{});
            
        },
        savesponsor: function(form){
            return $http.get(adminurl+"sponsor/create",{params:form});
        },
        getsponsorevent: function(category,topic){
            return $http.get(adminurl+"event/getsponsorevent?category="+category+"&topic="+topic,{});
            
        },
        findone: function (data) {
            return $http.get(adminurl+"event/findone?id="+data,{});
        },
        getuserticket: function (user) {
            return $http.get(adminurl+"order/viewalleventsbookedbyuser?user="+user,{});
        },
        printticket: function (id,eid) {
            return $http.get(adminurl+"order/viewticket?user="+id+"&event="+eid,{});
        },
        savedevents: function (uid,id) {
            return $http.get(adminurl+"event/savedevents?user="+uid+"&event="+id,{});
        },
        getsavedevents: function (uid) {
            return $http.get(adminurl+"event/getsavedevents?user="+uid,{});
        },
        createevent: function (data) {
            return $http({
                url: adminurl+'event/create',
                method: "POST",
               data: {'title':data.title,
                      'locationlat':data.locationlat,
                      'locationlon':data.locationlon,
                      'venue':data.venue,
                      'location':data.location,
                      'startdate':data.startdate,
                      'enddate':data.enddate,
                      'description':data.description,
                      'organizer':data.organizer,
                      'listingtype':data.listingtype,
                      'showremainingticket':data.showremainingticket,
                      'logo':data.logo,
                      'category':data.category,
                      'topic':data.topic,
                      'starttime':data.starttime,
                      'endtime':data.endtime,
                      'ticketname':data.ticketname,
                      'ticketqty':data.ticketqty,
                      'ticketprice':data.ticketprice,
                      'ticketpricetype':data.ticketpricetype,
                      'email':data.email,
                      'publicemail':data.publicemail,
                      'state':data.state,
                      'pin':data.pin,
                      'street':data.street,
                      'city':data.city,
                      'above18':data.above18,
                      'sponsorship':data.sponsorship}
            });
        },
        saveticket: function (user,event,ticketid,ticketquantity) {
            return $http.get(adminurl+"order/create?user="+user+"&event="+event+"&ticketid="+ticketid+"&ticketquantity="+ticketquantity,{});
        }
    }
});


restservicemod.factory('TopicService', function ($http) {


    return {
        getmydetails: function () {
            return $http.get(apiServer+"topic/find",{})
        },
        createevent: function (data) {
            return $http.get(adminurl+"event/create",{params:data});
        }
    }
});

restservicemod.factory('CategoryService', function ($http) {


    return {
        getmydetails: function () {
            return $http.get(apiServer+"category/find",{})
        },
        findone: function(data){
            return $http.get(adminurl+"category/findone?id="+data,{});
        }
    }
});


