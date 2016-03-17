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
	/*
	for(var key in navbarSections) {
		var _section = sections[key];
		
		var liItem = document.createElement ('li');
		
		liItem.innerHTML = "<a onclick='ch.appie.goToSection(\""+key+"\")'>"+_section.title+"</a>";
		
		$(ulItem).append(liItem);
	}*/
	
	$('#main_navbar').append(ulItem);
	$('#main_navbar').navbar({
	  defaults: true
	});
};

ch.appie.goToSection = function (sectionId) {
	var section = sections[sectionId];
	
	$('#main_list').html('');
	
	ch.appie.getFeed(sectionId, jQuery.proxy(ch.appie.renderFeed, {sectionId:sectionId, section:section}));
	
	$('#page_list_title').html(section.title);
	
	$.mobile.changePage('#page_list_generic');
	$('#panel').panel('close');
};

ch.appie.renderFeed = function (feedResults)
{
	console.log(feedResults);
	var results = feedResults["results"];
	
	var template = this.section.template;
	
	console.log(results);
	for(var key in results) {
		var item = document.createElement ('li');
		item.setAttribute('data-icon', 'location');

		//TODO: preProcessing
		
		var itemHtml = templates[template];

		if(itemHtml) {
			for(var field in results[key]) {
				if(typeof(results[key][field]) == 'string'|| typeof(results[key][field]) == 'number' ) { 
					//TODO: Format field
					itemHtml = 
					itemHtml.replace(new RegExp("@"+field.toUpperCase()+"@", "gi"), results[key][field]);
				}
			}
		} else {
			itemHtml = JSON.stringify(results[key]);
		}
		 
		item.innerHTML = "<a href=''>" + itemHtml + "</a>";
	
		document.getElementById('main_list').appendChild(item);
	}

	$('#main_list').listview('refresh');
};

ch.appie.getFeed = function (sectionId, callback) 
{
	var section = sections[sectionId];
	ch.appie.getJSONFeed(section, callback);
};

ch.appie.getJSONFeed = function (section, callback)
{
	var feed_url = section.feed_url;
	for(var _key in feedConfigParams) {
		feed_url = feed_url.replace(new RegExp("@"+_key.toUpperCase()+"@", "gi"), feedConfigParams[_key]);
	}
	
	var error = function (response) {
		console.log(response);
	};
	
	$.ajax({url:feed_url, dataType: 'json', success : callback, timeout : 60000, error : error });
};