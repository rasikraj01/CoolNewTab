
console.log('TOP SITESSS');

// TOP SITES
chrome.topSites.get(function(MostVisitedURL) 
	{for (var i = 0; i < MostVisitedURL.length; i++) {
		console.log(MostVisitedURL[i].title);
		console.log(MostVisitedURL[i].url);
	}
	});

// chrome.bookmarks.getTree(function (string){
// 	console.log(string);
// 	});


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
 chrome.bookmarks.getChildren('2', function(bookmark) {

console.log('BOOKMARKS')

 	for (var i = 0; i < bookmark.length; i++) {
 		console.log(bookmark[i].title);
 		console.log(bookmark[i].url);
 	}
 });
  chrome.bookmarks.getChildren('1', function(bookmark) {

console.log('BOOKMARKS main')

 	for (var i = 0; i < bookmark.length; i++) {
 		console.log(bookmark[i].title);
 		console.log(bookmark[i].url);

 	}
 });
 