// FOR FUTURE REFERENCE


// function get_news_sources() {
//   var news_source ;
//   var news_source_str = localStorage.getItem('newz');
//   if (news_source_str !== null) {
//         news_source = JSON.parse(news_source_str); 
//     }
//     return news_source;
// }
  // var arr = [['ABC News (AU)', 'abc-news-au'],
  //   ['Al Jazeera English', 'al-jazeera-english'],
  //   ['Ars Technica', 'ars-technica'],
  //   ['Associated Press','associated-press'],
  //   ['BBC News','bbc-news'],
  //   ['BBC Sport','bbc-sport'],
  //   ['Bild','blid'],
  //   ['Bloomberg','bloomberg'],
  //   ['Breitbart News','breitbart-news'],    
  //   ['Business Insider','business-insider'],
  //   ['Business Insider (UK)','business-insider-uk'],
  //   ['Buzzfeed','buzzfeed'],
  //   ['CNBC','cnbc'],
  //   ['CNN','cnn'],
  //   ['Daily Mail','daily-mail'],
  //   ['Der Tagesspiegel','der-tagesspiegel'],
  //   ['Die Zeit','die-zeit'],
  //   ['Engadget','engadget'],
  //   ['Entertainment Weekly','entertainment-weekly'],
  //   ['ESPN','espn'],
  //   ['ESPN Cric Info','espn-cric-info'],
  //   ['Financial Times','financial-times'],
  //   ['Focus','focus'],
  //   ['Football Italia','football-italia'],
  //   ['Fortune','fortune'],
  //   ['FourFourTwo','four-four-two'],
  //   ['Fox Sports','fox-sports'],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
  //   ['',''],
    
  //   ]
//check bloomberg bbc sports




// var slt = document.getElementById('news_list');
// for (var i = 0; i < arr.length; i++) {
//     slt.innerHTML += `<option value="${arr[i][1]}">${arr[i][0]}</option>`
// }



// $('#news_list').change(  () => {
//     console.log(slt.options[slt.selectedIndex].value)


// var src = slt.options[slt.selectedIndex].value;
// var url = `https://newsapi.org/v1/articles?source=${src}&sortBy=latest&apiKey=da63afd1f6814247aeb5a840097824e4`;

// axios.get(url)
//   .then(function (res) {
//     console.log('test')
//     for (var i = 0; i < res.data.articles.length; i++) {
//     document.getElementById('news').innerHTML += `
//       <a href="${res.data.articles[i].url}">
//         <li><span>${res.data.articles[i].title} </span>
//       <div class="desp">${res.data.articles[i].description}</div></li></a>`;
//     }
//     //console.log(res.data.articles);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


// });







// FOR NOW



var url = `https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=da63afd1f6814247aeb5a840097824e4`;

axios.get(url)
  .then(function (res) {
    console.log('test')
    for (var i = 0; i < res.data.articles.length; i++) {
    document.getElementById('news').innerHTML += `
      <a href="${res.data.articles[i].url}">
        <li><span>${res.data.articles[i].title} </span>
      <div class="desp">${res.data.articles[i].description}</div></li></a>`;
    }
    //console.log(res.data.articles);
  })
  .catch(function (err) {
    console.log(err);
  });

