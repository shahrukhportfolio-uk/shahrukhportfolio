
function sendMessage(){
	(function(){
	emailjs.init("_GykDLP-v3c0AmXo1"); // Account Public Key
	})();
	var serviceID = "service_oxx2qm7"; // Email Service ID
	var templateID = "template_ex2if5f"; // Email Template ID
	var params = {
	sendername: document.querySelector("#name").value,
	senderemail: document.querySelector("#email").value, 
	subject: document.querySelector("#subject").value,
	message: document.querySelector("#message").value
	};
	emailjs.send(serviceID, templateID, params)
	.then( res => {
		alert('Thank you, ' + params['sendername'] + '! Your message has been send.');
	})
	.catch();
	}
