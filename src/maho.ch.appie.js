var ch = { appie: {} };

ch.appie.init = function () {
	for(var key in panelSections) {
		var _section = sections[key];
		
		var liItem = document.createElement ('li');
		liItem.innerHTML = "<a>"+_section.title+"</a>";
		$('#panel_content').append(liItem);
		
	}

	$('#panel').panel();
	$('#panel').trigger('create');
	
	var ulItem = document.createElement ('ul');
	
	for(var key in navbarSections) {
		var _section = sections[key];
		
		var liItem = document.createElement ('li');
		
		
		liItem.innerHTML = "<a href='#some'>"+_section.title+"</a>";
		
		$(ulItem).append(liItem);
	}
	
	$('#main_navbar').append(ulItem);
	$('#main_navbar').navbar({
	  defaults: true
	});
};