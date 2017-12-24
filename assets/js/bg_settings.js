   // assign variables
   var url1 = ['assets/img/1.jpeg', 'assets/img/2.png','assets/img/3.jpeg','assets/img/4.jpeg'];
   var html_bg = [];
   for (var i = 0; i < url1.length; i++) {
      console.log(html_bg);
      var html_bg = html_bg +  `<li id=${url1[i]}><img src="${url1[i]}" alt=""/></img></li>`;
   }

   //storage
   var url_bg = localStorage.getItem('sha');
   $('body').css('background-image', `url(${url_bg})`);

   // bg options and bg change
   $("ol").html(html_bg);
   $('ol li').click(function () {
      $('body').css('background-image', `url(${url_bg})`);
      localStorage.setItem("sha", this.id);
      console.log(localStorage.getItem("sha"));
      var url_bg = localStorage.getItem('sha');
      $('body').css('background-image', `url(${url_bg})`);
   });
