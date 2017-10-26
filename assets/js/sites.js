
console.log('working ...');

// TOP SITES

function ProtocolHato(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}


chrome.topSites.get(function(MostVisitedURL) 
	{for (var i = 0; i < 9; i++) {
		var binaProtocol = ProtocolHato(MostVisitedURL[i].url);
		//var favicon = "chrome://favicon/" +  binaProtocol;
		var favicon =  "chrome://favicon/" + MostVisitedURL[i].url;
		document.getElementById('topsites').innerHTML += `<li><img src="${favicon}"><a href="${MostVisitedURL[i].url}">${MostVisitedURL[i].title}</a></li>`;
	}
	});


// printBookmarks('0');
// function printBookmarks(id) {
//  chrome.bookmarks.getChildren(id, function(children) {
//     children.forEach(function(bookmark) { 
//       console.log(bookmark.title);
//       console.log(bookmark.url);
//       printBookmarks(bookmark.id);
//     });
//  });
// }

// BOOKMARKS

  chrome.bookmarks.getChildren('1', function(bookmark) {
 	for (var i = 0; i < bookmark.length; i++) {

		 var binaProtocol = ProtocolHato(bookmark[i].url);
		// var favicon = "https://www.google.com/s2/favicons?domain=" +  binaProtocol;
		// console.log(bookmark[i].url)
        
        var favicon =  "chrome://favicon/" + bookmark[i].url; 	
    document.getElementById('bookmarks').innerHTML += `<li>  <a href="${bookmark[i].url}"> <img src="${favicon}"> ${bookmark[i].title}</a></li>`;
 	}
 });
  
 chrome.bookmarks.getChildren('2', function(bookmark) {

    var lt = bookmark.length - 1;
    
    for (var i = lt; i > 0; i--) {
        
		var binaProtocol = ProtocolHato(bookmark[i].url);
		//var favicon = "https://www.google.com/s2/favicons?domain=" +  binaProtocol;
        var favicon =  "chrome://favicon/" + bookmark[i].url;    
 
 		 	document.getElementById('bookmarks2').innerHTML += `  <a href="${bookmark[i].url}"><li> <div class="favi"><img src="${favicon}"></div><div class="title">${bookmark[i].title}<div></li> </a>`;

 	}
 });


