(function(){

	var counter = 0,
	duree = 3000,
	items = document.querySelectorAll('.slideshow figure'),
	items2 = document.querySelectorAll('.dots_commands a'),
	numItems = items.length;

	var showCurrent = function(){
		var itemToShow = Math.abs(counter%numItems);

		[].forEach.call( items, function(item){
			item.classList.remove('show');
		});

		[].forEach.call( items2, function(item){
			item.classList.remove('active');
		});

		items[itemToShow].classList.add('show');
		items2[itemToShow].classList.add('active');
	};

	document.querySelector('.next').onclick = function() {
		counter++;
		showCurrent();
	};

	document.querySelector('.prev').onclick = function() {
		if(counter == 0)
			counter = numItems;
		counter--;
		showCurrent();
	};

	[].forEach.call( items2, function(item){
		item.onclick = function() {
			counter = item.innerHTML -1;
			showCurrent();
		};
	});

	this.timer = setInterval(function(){
		counter++;
		showCurrent();
	},3000);

})();