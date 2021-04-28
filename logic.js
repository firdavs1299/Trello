function spliter(str) {
	let array=str.split(' ');
	return array;
}
// function alphacheck(str) {
// 	let newstr;
// 	for (let i=0; i<str.length; i++) {
// 		if()
// 	}
// }

function myfunction(str, ptr) {
	if(ptr=="start"){
			document.getElementById('iidi').style.display="block";
			document.getElementById('iid').style.display="none";
			str=str.toLowerCase();
		let array = spliter(str);
		let tracks = [];
		for(let i=0; i<=array.length; i++) {
			tracks[i]="so'zlar/"+array[i]+'.mp3';
		}
		let player = document.getElementById('player');
		let current = 0;
		player.src = tracks[0];
		player.onended = function() {
				current++;
				if (current >= tracks.length)
				{
					current = 0;

				}
				
				player.src = tracks[current];
				player.play();
		}
	}
	else {
		document.getElementById('iid').style.display="block";
		document.getElementById('iidi').style.display="none";
		let track;
		track="p.mp3";
		let player = document.getElementById('player');
		player.src = track;
		player.play();
	}


}


// function play(str){
// 	let music = document.getElementById("music");
// 		music.innerHTML = '<embed src="'+str+'.mp3" type="audio/mp3"><noembed><bgsound="'+str+'.mp3"></noembed>';
// }