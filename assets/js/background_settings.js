   // assign variables
   var url = ['assets/imgd/1.jpg', 'assats/img/2.jpg','assdets/img/3.jpg','asdsets/img/4.jpg'];
   var html = [];
   for (var i = 0; i < url.length; i++) {
      console.log(html);
      var html = html +  `<li id=${url[i]}><img src="${url[i]}" alt=""/></img></li>`;
   }

   //storage
   localStorage.setItem("sha", null);

   var url_bg = localStorage.getItem('sha');
   $('body').css('background', `url(${url_bg})`);

   // bg options and bg change
   $("ul").html(html);
   $('li').click(function () {
      $('body').css('background', `url(${url_bg})`);
      localStorage.setItem("sha", this.id);
      console.log(localStorage.getItem("sha"));
      var url_bg = localStorage.getItem('sha');
      $('body').css('background', `url(${url_bg})`);
   });
