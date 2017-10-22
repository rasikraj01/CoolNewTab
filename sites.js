
console.log('working ...');

// TOP SITES
chrome.topSites.get(function(MostVisitedURL) 
	{for (var i = 0; i < MostVisitedURL.length; i++) {
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