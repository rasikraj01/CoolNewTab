var url = ' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=da63afd1f6814247aeb5a840097824e4';

axios.get(url)
  .then(function (res) {
  	for (var i = 0; i < res.data.articles.length; i++) {
  	document.getElementById('news').innerHTML += `<li><a href="${res.data.articles[i].url}">${res.data.articles[i].title} : ${res.data.articles[i].author} </a> <br /> ${res.data.articles[i].description}</li>`;
  	}
    //console.log(res.data.articles);
  })
  .catch(function (err) {
    console.log(err);
  });