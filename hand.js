
			function handleSubmit(event) {
				event.preventDefault(); // Prevent the default form submission
		
				// Initialize EmailJS with your user ID
				emailjs.init("6687pi6kQmnJecx6G"); // Replace with your EmailJS user ID
		
				// Prepare the email parameters
				var serviceID = "service_340e56g"; // Replace with your EmailJS service ID
				var templateID = "template_o5r5wrj"; // Replace with your EmailJS template ID
				var params = {
					sendername: document.getElementById('fname').value + ' ' + document.getElementById('lname').value,
					senderemail: document.getElementById('email').value,
					subject: document.getElementById('subject').value,
					message: document.getElementById('message').value
				};
		
				// Send email using EmailJS
				emailjs.send(serviceID, templateID, params)
					.then(function(response) {
						console.log('SUCCESS!', response.status, response.text);
						alert('Thank you, ' + params.sendername + '! Your message has been sent.');
						resetForm();
					}, function(error) {
						console.log('FAILED...', error);
						alert('Oops! Something went wrong. Please try again.');
					});
			}
		
			function resetForm() {
				document.getElementById('myForm').reset();
			}