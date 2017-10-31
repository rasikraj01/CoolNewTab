 // var mail = document.getElementById('mail');

function get_mails() {
	var mail = new Array;
	var mail_str = localStorage.getItem('mailz');
	if (mail_str !== null) {
        mail = JSON.parse(mail_str); 
    }
    return mail;
}

function add(e) {
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
        show();
	}
	return false;
	
}

function remove() {
	var id = this.getAttribute('id');
	var mails = get_mails();

	mails.splice(id, 1);
	localStorage.setItem('mailz', JSON.stringify(mails));

	show();

	return  false;
}

function show() {
	var mails = get_mails();
	var ul;
	ul = `<ul id="mail_list">`
	for (var i = 1; i < mails.length; i++) {
		ul += `<li><a href="${mails[i][0]}">${mails[i][1]}</a><button class="mails_rm" id="${i}">X</button>`
	}
	ul += `</ul>`
	document.getElementById('mail').innerHTML = ul;

	var buttons = document.getElementsByClassName('mails_rm');
	for (var i = 1; i < buttons.length; i++) {
		buttons[i].addEventListener('click', remove);
	};
}

document.getElementById('add_mail').addEventListener('click',add);

show();







