
console.log('working ...');

// TOP SITES
chrome.topSites.get(function(MostVisitedURL) 
	{for (var i = 0; i < MostVisitedURL.length; i++) {
		var favicon = "chrome://favicon/" + MostVisitedURL[i].url ;
		document.getElementById('topsites').innerHTML += `<li> hi : <a href="${MostVisitedURL[i].url}">${MostVisitedURL[i].title}</a></li>`;
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
 	document.getElementById('bookmarks').innerHTML += `<li> hi : <a href="${bookmark[i].url}">${bookmark[i].title}</a></li>`;
 	}
 });
  
 chrome.bookmarks.getChildren('2', function(bookmark) {

 	for (var i = 0; i < bookmark.length; i++) {
 		 	document.getElementById('bookmarks2').innerHTML += `<li> hi : <a href="${bookmark[i].url}">${bookmark[i].title}</a></li>`;

 	}
 });





// var _showTopSites= function (d) {
// 		var arrObj= JSON.parse(chromeLocalStorage.getItem("removedSites"));
// 		var i=0;
// 		var counter=0;

// 		for(var k=0;k<4;k++) {
// 			document.querySelector("#top .row"+parseInt(k)).innerHTML="";
// 		}

// 		while(counter<12 && d[i]) {
// 			var top = document.querySelector("#top .row"+parseInt(counter/3));
// 			if(counter%3==0) {
// 				var topSiteHTML="";
// 				top.innerHTML="";
// 			}
// 			if(arrObj.indexOf(d[i].url)<0) {
// 				counter++;
// 				var tmp = document.createElement ('a');
// 				tmp.href = d[i].url;
// 				var arr = tmp.hostname.split(".");

// 				var logoUrl = "chrome://favicon/"+tmp.href;
// 				// var logoUrl = "https://www.google.com/s2/favicons?domain=http://"+tmp.hostname;

// 				var favIco= "<img class='favico' src='"+logoUrl+"'/>";

// 				topSiteHTML+="<a href='" +d[i].url+ "'class='animate-up top-site ripplelink btn btn-default top-site-animate'><span class='ink'></span>"+favIco+"<span class='favico-text'>"+d[i].title+"</span><span class='close hidden' data-link='"+d[i].url+"'></span></a>";

// 			}
// 			i++;
// 			if(counter%3==0 || !d[i] || counter==12) {
// 				top.innerHTML=topSiteHTML;
// 			}


// 		}

// 		setTimeout(function(){_colorAdapt();},100);

// 	};


// function test() {
// 		//Get Top Sites of Chrome
// 	chrome.topSites.get(_showTopSites);
// 	}
// test();
