//based on a pen by @Eliseo
var url = "https://api.minetools.eu/ping/20.97.8.161/25565";
 
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('<i class="fas fa-circle text-danger"></i>');
	$('#rest2').html('<b><span class="text-error">'+r.players.online+'</span></b> / ' +r.players.max);
   return false;
 } 
  $('#rest').html('<i class="fas fa-circle verde"></i>');  
  $('#rest2').html('<b><span class="text-success">'+r.players.online+'</span></b> / '+r.players.max );  
});

$.getJSON(upixel, function(e) {
    //data is the JSON string
 if(e.error){
    $('#epixel').html('<span class="text-danger">•</span></i>');
	$('#lpixel').html('No hay conexión' );  
	$('#pixel').html('');
   return false;
 } 
 
  $('#epixel').html('<span class="text-success">•</span>');  
  $('#pixel').html('<b><span>'+e.Players+'</span></b>' );  

     var  i, x = "";
	for (i in e.Playerlist) {
	$('#lpixel').html(x += e.Playerlist[i] + '<br>' );  
	}
	
});

$.getJSON(usur, function(u) {
    //data is the JSON string
 if(u.error){
    $('#esur').html('<span class="text-danger">•</span></i>');
	$('#lsur').html( 'No hay conexión' );  
	$('#sur').html('');
   return false;
 } 
 
	$('#sur').html('<b><span >'+u.Players+'</span></b>' );  
	$('#esur').html('<span class="text-success">•</span>');  
	
     var i, x = "";
	for (i in u.Playerlist) {
	$('#lsur').html(x += u.Playerlist[i] + '<br>' );  
	}
});

$.getJSON(ufactions, function(f) {
    //data is the JSON string
 if(f.error){
    $('#efactions').html('<span class="text-danger">•</span></i>');
	$('#lfactions').html('No hay conexión' );  
	$('#factions').html('');

   return false;
 } 
  $('#factions').html('<b><span>'+f.Players+'</span></b>' );  
  $('#efactions').html('<span class="text-success">•</span>');  
  
   var i, x = "";
	for (i in f.Playerlist) {
	$('#lfactions').html(x += f.Playerlist[i] + '<br>' );  
	}  

});

$.getJSON(uvanilla, function(t) {
    //data is the JSON string
 if(t.error){
    $('#evanilla').html('<span class="text-danger">•</span></i>');
	$('#lvanilla').html('No hay conexión' );  
	$('#vanilla').html('');

   return false;
 } 
  $('#vanilla').html('<b><span>'+t.Players+'</span></b>' );  
  $('#evanilla').html('<span class="text-success">•</span>');  
  
   var i, x = "";
	for (i in t.Playerlist) {
	$('#lvanilla').html(x += t.Playerlist[i] + '<br>' );  
	}  

});

$.getJSON(ubedwars, function(p) {
    //data is the JSON string
 if(p.error){
    $('#ebedwars').html('<span class="text-danger">•</span></i>');
	$('#lbedwars').html('No hay conexión' );  
	$('#bedwars').html('');

   return false;
 } 
  $('#bedwars').html('<b><span>'+p.Players+'</span></b>' );  
  $('#ebedwars').html('<span class="text-success">•</span>');  
  
   var i, x = "";
	for (i in p.Playerlist) {
	$('#lbedwars').html(x += p.Playerlist[i] + '<br>' );  
	}  

});

$.getJSON(usky, function(s) {
    //data is the JSON string
 if(s.error){
    $('#esky').html('<span class="text-danger">•</span></i>');
	$('#lsky').html('No hay conexión' ); 
	$('#sky').html('');
   return false;
 } 
 
  $('#esky').html('<span class="text-success">•</span>'); 
  $('#sky').html('<b><span>'+s.Players+'</span></b>' );  

  var i, x = "";
	for (i in s.Playerlist) {
	$('#lsky').html(x += s.Playerlist[i] + '<br>' );  
	}

});
