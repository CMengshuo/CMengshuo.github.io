
jQuery(document).ready(function($){
// master
// 	$("#showBattleProject").click(function() {
//   	$("#unity_battle_details").addClass("is-active");
// 	});
//
// 	$("#showInventoryExtension").click(function() {
//   	$("#inventory_extension_details").addClass("is-active");
// 	});
//
// 	$("#showInventoryProject").click(function() {
//   	$("#unity_items_details").addClass("is-active");
// 	});
//
// 	$("#showOgreProject").click(function() {
//   	$("#webcam_ml").addClass("is-active");
// 	});
//
// 	$("#showInkMan").click(function() {
//   	$("#ink_man_demo").addClass("is-active");
// 	});
//
// 	$("#showNanoShock").click(function() {
//   	$("#nano_shock_demo").addClass("is-active");
// 	});
//
// 	$("#close-battle-video").click(function() {
//    	$("#unity_battle_details").removeClass("is-active");
// 		stopVideo('#unity_battle_details');
// 	});
//
// 	$("#close-inventory-video").click(function() {
//    	$("#unity_items_details").removeClass("is-active");
// 		stopVideo('#unity_items_details');
// 	});
//
// 	$("#close-inventory-extension-video").click(function() {
//    	$("#inventory_extension_details").removeClass("is-active");
// 		stopVideo('#inventory_extension_details');
// 	});
//
// 	$("#close-inkman-video").click(function() {
//    	$("#ink_man_demo").removeClass("is-active");
// 		stopVideo('#ink_man_demo');
// 	});
//
// 	$("#close-nanoshock-video").click(function() {
//    	$("#nano_shock_demo").removeClass("is-active");
// 		stopVideo('#nano_shock_demo');
// 	});
//
// 	$("#close-ogre-video").click(function() {
//    	$("#webcam_ml").removeClass("is-active");
// 		stopVideo('#webcam_ml');
// 	});
//
	$('.smooth-goto').on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800);
    return false;
	});
//
// 	$(".modal-background").click(function() {
//    	$(".modal").removeClass("is-active");
// 		StopAllVideos();
// 	});
//
// 	// loadCharacter("me_avatar");
// 	// loadIcon("job","job_beijing");
// 	// loadIcon("webcam","webcam_ml");
// 	// loadIcon("unity_battle_project","unity_battle_details");
// 	// loadIcon("unity_items_project","unity_items_details");
// 	// loadIcon("monster","mobile_games");
});
//
// function StopAllVideos(){
// 	stopVideo("#webcam_ml");
// 	stopVideo("#ink_man_demo");
// 	stopVideo("#nano_shock_demo");
// 	stopVideo("#unity_items_details");
// 	stopVideo("#unity_battle_details");
// 	stopVideo("#inventory_extension_details");
// }

// function loadIcon(str,url_str){
// 	var renderer = new PIXI.CanvasRenderer(420, 420, { transparent:true });
// 	var div = document.getElementById(str);
// 	div.appendChild(renderer.view);

// 	renderer.view.style.position = 'relative';
// 	renderer.view.style.width = '15vmax';
// 	renderer.view.style.height = '15vmax';
// 	renderer.view.style.left = '50%';
// 	renderer.view.style.top = '50%';
// 	renderer.view.style.transform = 'translate(-50%,-50%)';

// 	var stage = new PIXI.Container();
// 	PIXI.loader.add(str, 'data/' + str + '.json')
// 	.load(function (loader, resources) {
// 	    var sprite = new PIXI.spine.Spine(resources[str].spineData);

// 	    stage.addChild(sprite);
// 	    sprite.state.setAnimationByName(0, 'idle', true, 0);
// 	    sprite.state.addAnimationByName(1, 'shake', true, 0);
// 	    sprite.x = 210;
// 	    sprite.y = 240;
// 	    animate();

// 	    function animate() {
// 	        requestAnimationFrame(animate);
// 	        renderer.render(stage);
// 	    }

// 	    sprite.interactive = true;
// 	    sprite.buttonMode = true;
// 	    sprite.defaultCursor = "pointer";

// 	    sprite.mousedown = function(data){
// 	        $('#' + url_str).addClass('is-active');
// 	    }

// 	    sprite.tap = function(data){
// 	        sprite.state.setAnimationByName(0, 'craycray', true, 0);
// 	        sprite.state.setAnimationByName(1, 'shake', true).timeScale = 10;
// 	        $('#' + url_str).addClass('is-active')
// 	    }

// 	    sprite.mouseover = function(data) {
// 	        sprite.state.setAnimationByName(0, 'craycray', true, 0);
// 	        sprite.state.setAnimationByName(1, 'shake', true).timeScale = 10;
// 	    }

// 	    sprite.mouseout = function(data) {
// 	        sprite.state.setAnimationByName(0, 'idle', true, 0);
// 	        sprite.state.setAnimationByName(1, 'shake', true);
// 	    }
// 	});
// }

// function loadCharacter(str){
// 		var renderer = new PIXI.CanvasRenderer(256, 256, { transparent: true });

// 		renderer.view.style.position = 'relative';
// 		renderer.view.style.width = '32vmin';
// 		renderer.view.style.height = '32vmin';
// 		renderer.view.style.left = '50%';
// 		renderer.view.style.top = '50%';
// 		renderer.view.style.transform = 'translate( -50%, -50%)';

// 		var div = document.getElementById(str);
// 		div.appendChild(renderer.view);
// 		var stage = new PIXI.Container();
// 		PIXI.loader.add('spineCharacter', 'data/me.json')
// 		.load(function (loader, resources) {
// 		    var sprite = new PIXI.spine.Spine(resources.spineCharacter.spineData);

// 		    stage.addChild(sprite);
// 		    sprite.state.setAnimationByName(0, 'idle', true, 0);
// 		    sprite.x = 128;
// 		    sprite.y = 128;
// 		    animate();

// 		    function animate() {
// 		        requestAnimationFrame(animate);
// 		        renderer.render(stage);
// 		    }

// 		    sprite.interactive = true;
// 		    sprite.buttonMode = true;
// 		    sprite.defaultCursor = "pointer";

// 			sprite.mouseover = function(data) {
// 	        sprite.state.setAnimationByName(0, 'craycray', true, 0);
// 	    }

// 	    sprite.mouseout = function(data) {
// 	        sprite.state.setAnimationByName(0, 'idle', true, 0);
// 	    }

// 	    sprite.mousedown = function(data){
// 	        sprite.state.addAnimationByName(1, 'dropstuff', false, 0);
// 	    }

// 	    sprite.tap = function(data){
// 	    	sprite.state.setAnimationByName(0, 'craycray', false, 0);
// 	    	sprite.state.addAnimationByName(1, 'dropstuff', false, 0);
// 	    	sprite.state.addAnimationByName(0, 'idle', true, 0);
// 	    }
// 	});
// }
//
// function stopVideo (name) {
// 	/*$('iframe').contents().find('video').each(function ()
//         {
//             this.currentTime = 0;
//             this.pause();
//     });*/
//     $(name + " iframe").attr("src", $(name + " iframe").attr("src"));
// };
