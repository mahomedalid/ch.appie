var panelSections = {
	favs:{}, 
	food:{}, 
	myphotos:{}, 
	notifications:{},
	lodging:{}, 
	tours:{}, 
	services:{}, 
	shopping:{}, 
	logout:{},
};

var navbarSections = {
	favs:{}, food:{}, myphotos:{}
};

var feedConfigParams = {
	'GOOGLE_PLACES_API_KEY' : ''
};

var sections = {
	favs : {
		title: 'MIS FAVORITOS',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	},
	
	food : {
		title: 'ALIMENTOS Y BEBIDAS',
		icon: '',
		//feed_url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=20.8813351,-103.8440796&radius=500&types=food&key=AIzaSyD8fnG3deK4byAezClxVUk5uVKx-g9PBqw',
		feed_url: 'feed.maps.food.js',
		feed_type: 'json',
		template: 'places_1',
		action: '',
	}, 
	
	myphotos : {
		title: 'MIS FOTOS',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	}, 
	
	notifications : {
		title: 'NOTIFICACIONES',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	}, 
	
	lodging : {
		title: 'HOSPEDAJE',
		icon: '',
		feed_url: 'feed.maps.lodging.js',
		feed_type: 'json',
		template: 'places_1',
		action: '',
	}, 
	
	tours : {
		title: 'TOURS',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	}, 
	
	shopping : {
		title: 'COMPRAS',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	}, 
	
	services : {
		title: 'SERVICIOS',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	}, 
	
	logout : {
		title: 'CERRAR SESI&Oacute;N',
		icon: '',
		feed_url: '',
		feed_type: '',
		template: '',
		action: '',
	}, 
};

var templates = {
	places_1 : "<img src='@ICON@' /><h2>@NAME@</h2><p><strong>Direcci&oacute;n:</strong> @VICINITY@</p>",
};

var actions = {
	add_to_favorites: "",
	open_in_webview: "",
	open_in_map:"",
};