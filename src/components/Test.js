const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

export function Test() {
	return new Promise((resolve) => {
		// wait for facebook sdk to initialize before starting the react app
		window.fbAsyncInit = function () {
			window.FB.init({
				appId: facebookAppId,
				cookie: true,
				xfbml: true,
				version: 'v8.0',
			});

			// auto authenticate with the api if already logged in with facebook
			window.FB.getLoginStatus(({ authResponse }) => {
				if (authResponse) {
				} else {
					resolve();
				}
			});
		};
		// load facebook sdk script
		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	});
}

export function Login() {
	window.FB.getLoginStatus(function (response) {
		if (!response.authResponse) {
			console.log('User Not Logged In');
			window.FB.login(
				function (response) {
					// handle the response
				},
				{ scope: 'public_profile,email' },
			);
		} else {
			console.log('UserLoggedIn');
			const userAuthResp = response.authResponse;

			return userAuthResp, console.log(userAuthResp);
		}
	});
}
