export const createUser = (name, pass) => {
	const API_TOKEM = "https://developers.themoviedb.org/authentication/token/new?api_key=f45c79601c26a15cfef52a1a31e4da6e";
	let tokem = "";

	//Requerir tokem de la api
	fetch(API_TOKEM)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			tokem = data;
		});

	// //Validar tokem
	// const API_TOKEM_CONFIRM = `https://developers.themoviedb.org/authenticate/${tokem}?api_key=f45c79601c26a15cfef52a1a31e4da6e`;
	// fetch(API_TOKEM_CONFIRM)
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));
};
