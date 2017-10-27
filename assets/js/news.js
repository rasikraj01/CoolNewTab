var url = ' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=da63afd1f6814247aeb5a840097824e4';

axios.get(url)
  .then(function (res) {
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