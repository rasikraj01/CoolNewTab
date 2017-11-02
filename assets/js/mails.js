 // var mail = document.getElementById('mail');

function get_mails() {
	var mail = new Array;
	var mail_str = localStorage.getItem('mailz');
	if (mail_str !== null) {
        mail = JSON.parse(mail_str); 
    }
    return mail;
}

function mails_add(e) {
	e.preventDefault();
	var url = document.getElementById('url').value;
	var name = document.getElementById('name').value;
	console.log(`ye waala abhi add hua hai ==> name: ${name} url : ${url}`)

	if (url !== "" && name !== "") {
		var mails = get_mails();
		mails.push([url, name]);
        localStorage.setItem('mailz', JSON.stringify(mails));
        document.getElementById('url').value =  "";
        document.getElementById('name').value =  "";
        mails_show();
	}
	return false;
	
}

function mails_remove() {
	var id = this.getAttribute('id');
	var mails = get_mails();

	mails.splice(id, 1);
	localStorage.setItem('mailz', JSON.stringify(mails));

	mails_show();

	return  false;
}

function mails_show() {
	var mails = get_mails();
	var ul;
	ul = `<ul id="mail_list">`
	for (var i = 1; i < mails.length; i++) {
		ul += `<li></i><a href="${mails[i][0]}">${mails[i][1]}</a>
		<button class="mails_rm" id="${i}"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>`
	}
	ul += `</ul>`
	document.getElementById('mail').innerHTML = ul;

	var buttons = document.getElementsByClassName('mails_rm');
	for (var i = 1; i < buttons.length; i++) {
		buttons[i].addEventListener('click', mails_remove);
	};
}

document.getElementById('add_mail').addEventListener('click',mails_add);

mails_show();

document.getElementById('add_mail_form').style.display = "none";
$('.mails_rm').css('display','none');

function show_add_button() {
	var settings = document.getElementById('add_mail_form').style.display ;
	if (settings === "none") {
		document.getElementById('add_mail_form').style.display = 'block';	
		$('.mails_rm').css('display','block');

	}
	else if(settings === "block"){
		document.getElementById('add_mail_form').style.display = 'none';
		$('.mails_rm').css('display','none');

	}
	
	//document.getElementsByClassName('mails_rm').className += 'disspp';
}

document.getElementById('mail_settings').addEventListener('click',show_add_button);




