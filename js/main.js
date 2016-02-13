var arrayOfPossOpt = [];

var arrayofPossImg = [
<<<<<<< HEAD
"img/img1.jpg",
=======
"img/img1.JPG",
>>>>>>> 7100965c22d7ede6804800d71f8fcedfe3369dfc
"img/img2.JPG",
"img/img3.JPG",
"img/img4.JPG",
"img/img5.JPG",
"img/img6.JPG",
"img/img7.JPG",
"img/img8.JPG",
"img/img9.JPG",
"img/img10.JPG",
"img/img11.JPG",
"img/img12.jpg",
"img/img13.jpg",
"img/img14.jpg",
"img/img15.jpg",
"img/img16.JPG",
"img/img17.JPG",
"img/img18.JPG",
"img/img19.JPG",
"img/img20.JPG",
"img/img21.JPG",
"img/img22.JPG",
"img/img23.jpg",
"img/img24.jpg",
"img/img25.jpg",
"img/img26.jpg",
"img/img27.jpg",
"img/img28.jpg"
];

var arrayOfBGC = [
"8D6A9F",
"EF798A",
"0FA3B1",
"49306B",
"EC4E20",
"2D728F",
"C4BBAF",
"972D07",
"CF9893"
];

var arrayOfOPBGC = [

];

var arrayOfBGCCounter = 0;

var onePunchActive = false;

var timesAsked = 0;

var valentines;

var PossibleOption = function( insideText ){
	this.insideText = insideText; 
};

var onEnterBtn = function(){
	if( document.getElementById( "enterPossOptText" ).value === "" ){
		return false;
	}

	else{
		var newListItem = document.createElement( "li" );
		var insideText = document.getElementById( "enterPossOptText" ).value;
		var newTextNode = document.createTextNode( insideText );

		//change li color
		newListItem.style.backgroundColor = "#" + arrayOfBGC[ arrayOfBGCCounter ];
		arrayOfBGCCounter += 1;

		if( arrayOfBGCCounter > ( arrayOfBGC.length - 1 ) ){
			arrayOfBGCCounter = 0;
		}

		//create div element with class col-md-4
		var newDiv = document.createElement( "div" );
		newDiv.className += "col-md-3 col-sm-4 col-xs-6";

		//create img element and set src and make it uniform
		var newImg = document.createElement( "img" );
		//set src op if opactive else get random img
		if( onePunchActive === true ){
			newImg.src = "img/op.png"

			if( valentines === true ){
				newImg.src = "img/ppval.png"
			}
		}
		else{
			newImg.src = getRandomImg();
		}
		
		$( newImg ).addClass( "img-responsive" );

		//add to arrayOfPossOpt
		arrayOfPossOpt.push( insideText );

		//add text to li
		newListItem.appendChild( newTextNode );

		//add li to div
		newDiv.appendChild( newListItem );

		//add img to div
		newDiv.appendChild( newImg );
		
		newDiv.onclick = function(){ 
			
			//delete from array
			var posOfLIToDelete = arrayOfPossOpt.indexOf( insideText ); 
			arrayOfPossOpt.splice( posOfLIToDelete, 1 );
			
			//delete from DOM
			$( this ).fadeOut( function(){

				document.getElementById( "possOptList" ).removeChild( this );
			});	
		};

		document.getElementById( "possOptList" ).appendChild( newDiv );
	}
	
}; 

var getRandomImg = function(){
	
	var chosenNum = Math.round( Math.random() * ( arrayofPossImg.length - 1 ) );
	return arrayofPossImg[ chosenNum ];
};

var onChoose = function(){
	
	if( arrayOfPossOpt.length > 0 ){

		if( onePunchActive === true && timesAsked < 3 ){
			timesAsked = timesAsked + 1;
			punchModals();
			$( "#suggestModal" ).modal( "show" );
		}

		else{

			if( onePunchActive === true && timesAsked >= 3 ){
				activateCowardMode();
			}

			var totalPossOpt = arrayOfPossOpt.length - 1;
			var theMath = Math.round( Math.random() * totalPossOpt );
			var theChosenOne = arrayOfPossOpt[ theMath ];

			document.getElementById( "suggestText" ).textContent = theChosenOne;

			$( "#suggestModal" ).modal( "show" );
		}
	}
};

var punchModals = function(){
	
	$( ".modal-header img" ).attr( "src", "img/ppp.png" );
	$( ".modal-header h4" ).text( "there's only one real option:" );
	$( ".modal-body h2" ).text( "fight" );
};

var activateCowardMode = function(){
	$( ".modal-header img" ).attr( "src", "img/coward2.jpg" );
	$( ".modal-header h4" ).text( "have it your way, coward!" );
};

var onRetry = function(){
	$( "#suggestModal" ).modal( "hide" );
	
	setTimeout( onChoose, 600 );
};

//pause or play background music
var onBgmBtn = function(){

	if( document.getElementById( "bgmPlayer" ).paused === true ){
		document.getElementById( "bgmPlayer" ).play();
	}
	else{
		document.getElementById( "bgmPlayer" ).pause();
	}
};

//ONE PUNNCHHHHHHHHH!!!!!!
var onHeroForFun = function( e ){
	
	e.preventDefault();

	onePunchActive = true;
	
	//hide doc and change music
	$( "#hideGif" ).hide();
	$( "html, body, .container-fluid" ).addClass( "opFlash" );
	updateAudioSrc( "sounds/onepunchtheme.ogg", "sounds/onepunchtheme.mp3" );



	setTimeout( function(){
		$( "html, body, .container-fluid" ).removeClass( "opFlash" );
		$( "#opSwitchGif" ).removeClass( "hidden" );
	}, 2700 );

	setTimeout( function(){
		
		$( "#opSwitchGif" ).addClass( "hidden" );
		$( "#hideGif" ).show();

	}, 10000 );
	
	if( $( "head link[href='css/onepunch.css']" ).length === 0 ){
		var linkTag = document.createElement( "link" );
		linkTag.setAttribute( "rel", "stylesheet" );
		linkTag.setAttribute( "type", "text/css" );
		linkTag.setAttribute( "href", "css/onepunch.css" );
		$( "head" ).append( linkTag );
	}

	punchTitles();
	punchPics();
};

var punchTitles =function(){
	
	$( ".jumbotron .text-primary" ).text( "One Punch Man" );
	$( ".jumbotron h5" ).text( "If the heroes run and hide, who will stay and fight?" );
	$( ".enter-poss-text-sect label" ).text( "enter possible option:" );
	$( ".enter-poss-text-sect input[type=button]" ).attr( "value", "enter" );
};

var punchPics = function(){
	$( ".col-xs-6 img" ).attr( "src", "img/op.png" );
	
	if( valentines === true ){		
		$( ".col-xs-6 img" ).attr( "src", "img/ppval.png" );
	}
};

//update music file on page change
var updateAudioSrc = function( ogg, mp3 ){
	document.getElementById( "oggSrc" ).src = ogg;
	document.getElementById( "mp3Src" ).src = mp3;
	document.getElementById( "bgmPlayer" ).load();
};

//Valentines Day
var onValentine = function(){
	
	var dateToday = new Date();

	var month = dateToday.getMonth() + 1;
	var day = dateToday.getDate();

	if( month === 2 && day === 14 ){
		
		var headTitle = $( ".jumbotron .text-primary" );

		valentines = true;
		
		$( "div.jumbotron" ).addClass( "valentine" );
		headTitle.text( "Happy Valentine's~" );
		$( "#bgmBtn" ).on( "click", onHeroForFun );

	}
};

window.addEventListener( "load", onValentine );
document.getElementById( "enterPossOptBtn" ).addEventListener( "click", onEnterBtn );
document.getElementById( "chooseBtn" ).addEventListener( "click", onChoose );
document.getElementById( "bgmBtn" ).addEventListener( "click", onBgmBtn );
document.getElementById( "retry" ).addEventListener( "click", onRetry );
document.getElementById( "onePunch" ).addEventListener( "click", onHeroForFun );
