var movie = JSON.parse(movies);


$(document).ready(function(){
for (var i = 0; i < movie.length; i++) {
    $("#content").append(
    	`<div class="col-lg-5" id="box${movie[i].ID}">
			  <div class="column">
			  	${movie[i].img}
			  </div>
			  <div class="column">
			  	<p class="title">${movie[i].title}</p>
			  	<p class="description">${movie[i].description}</p>
			  	<div class="ratingBox">
			  		<div id="like">
			  			Like
			  		</div>
					<div id="btn">
		  				<button id="clickme"><img src="img/like.png"></button
		  			</div>
		  			<div class="rating">
		  			</div>
			  	</div>
			  </div>
			</div>`
			);
	}


	var counter = $("button");
    var newValue = $(".rating");

    for (let i = 0; i < movie.length; i++) {

        $(counter[i]).on('click', function() {
            ++movie[i].likes;
            $(newValue[i]).text(movie[i].likes);
        });
    }


});





