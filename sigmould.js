
var SigWidgetBase = {
	
};



var MainController = {

		drawView : function(view, data){
			
		},
		
		
		node_selected : function(event, data){
			
			// When a new node has been selected, a view should be chosen depending on node type
			
			
		}
		
};


function initJsonData(){
	return JSON.parse('[{"data":"System"},{"data":"Management"},{"data":"Application"}]');
}

function log(bleh){
	$("#log").append(bleh);
}

function initSigmould(){

		$(
			function() {

			    $( "#tabs" ).tabs();
				
			    $("div.builder-west-side").bind("loaded.jstree", function (event, data) { log("loaded"); }).jstree(
				{
			        "core" : { 
					"initially_open" : [ "root" ] 
					},
				"json_data" : {
						"data" : initJsonData()
					},
				"ui" : {
					"select_limit" : 1,
					"selected_parent_close" : "select_parent"
				},
			    "plugins" : [ "themes", "json_data", "ui" ]

			    });

			}
			
			
		);
		
		// Binding events
		$("div.builder-west-side").bind("select_node.jstree", function (event, data) { log("selected"); });
	
}







