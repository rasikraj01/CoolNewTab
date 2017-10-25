var url = ' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=da63afd1f6814247aeb5a840097824e4';

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    		console.log(data[2])
  	
    document.getElementById('news').innerHTML = `${data}`;
    });
  