var ch = { appie: {} };

ch.appie.init = function () {
	for(var key in panelSections) {
		var _section = sections[key];
		
		var liItem = document.createElement ('li');
		liItem.innerHTML = "<a onclick='ch.appie.goToSection(\""+key+"\")'>"+_section.title+"</a>";
		$('#panel_content').append(liItem);
		
	}

	$('#panel').panel();
	$('#panel').trigger('create');
	
	var ulItem = document.createElement ('ul');
	
	for(var key in navbarSections) {
		var _section = sections[key];
		
		var liItem = document.createElement ('li');
		
		liItem.innerHTML = "<a onclick='ch.appie.goToSection(\""+key+"\")'>"+_section.title+"</a>";
		
		$(ulItem).append(liItem);
	}
	
	$('#main_navbar').append(ulItem);
	$('#main_navbar').navbar({
	  defaults: true
	});
};

ch.appie.goToSection = function (sectionId) {
	var section = sections[sectionId];
/*	for(var key in list) {
		var item = document.createElement ('li');

		if(i++ > limit) { item.innerHTML = "... demasiados resultados, refine su b&uacute;squeda"; domItem.appendChild(item); break; }

		var entity = this.preProcessListItem(list[key]);
		
		entity.type = this.type;
		var itemHtml = this._listItemHtml;

		for(var field in entity) {
			if(typeof(entity[field]) == 'string'|| typeof(entity[field]) == 'number' ) { 
				itemHtml = 
				itemHtml.replace(new RegExp("@"+field.toUpperCase()+"@", "gi"), entities[this.type].formatField(field, entity[field]));    
			}
		}

		 
		item.innerHTML = itemHtml;
		
		domItem.appendChild (item);
	}

	$('#'+this.listId).listview('refresh');*/
	
	$('#page_list_title').html(section.title);
	
	$.mobile.changePage('#page_list_generic');
	$('#panel').panel('close');
};