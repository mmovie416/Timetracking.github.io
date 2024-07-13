$.getJSON('data.json',function(data1){
	// console.log(data1[0].timeframes.daily.current);
	
	
	for(let i = 0 ;i<data1.length;i++){
		let a = data1[i].timeframes;	
		if(i===0){
				$('#dailybtn').on('click',function(){
					if($('#workId').html('') && $('#workPrevious').html('') ){
						$('#workId').append(`
							<h1>${a.daily.current} hrs</h1>
					`	)

						$('#workPrevious').append(`
							<span>Yesterday - ${a.daily.previous} hrs </span>
						`)
					}
					
				})

				$('#weeklybtn').on('click',function(){
					if($('#workId').html('') && $('#workPrevious').html('') ){
						$('#workId').append(`
							<h1>${a.weekly.current} hrs</h1>
					`	)

						$('#workPrevious').append(`
							<span>Last week -  ${a.weekly.previous} hrs </span>
						`)
					}
					
					
				})

				$('#monthlybtn').on('click',function(){
					if($('#workId').html('') && $('#workPrevious').html('') ){
						$('#workId').append(`
							<h1>${a.monthly.current} hrs</h1>
					`	)

						$('#workPrevious').append(`
							<span>Last month - ${a.monthly.previous} hrs </span>
						`)
					}		
					
				})
		}else if(i===1){
			$('#dailybtn').on('click',function(){
				if($('#playId').html('') && $('#playPrevious').html('') ){
					$('#playId').append(`
						<h1>${a.daily.current} hrs</h1>
				`	)

					$('#playPrevious').append(`
						<span>Yesterday -  ${a.daily.previous} hrs </span>
					`)
				}
				
			})

			$('#weeklybtn').on('click',function(){
				if($('#playId').html('') && $('#playPrevious').html('') ){
					$('#playId').append(`
						<h1>${a.weekly.current} hrs</h1>
				`	)

					$('#playPrevious').append(`
						<span>Last week -  ${a.weekly.previous} hrs </span>
					`)
				}
				
				
			})

			$('#monthlybtn').on('click',function(){
				if($('#playId').html('') && $('#playPrevious').html('') ){
					$('#playId').append(`
						<h1>${a.monthly.current} hrs</h1>
				`	)

					$('#playPrevious').append(`
						<span>Last month - ${a.monthly.previous} hrs </span>
					`)
				}
				
				
			})

		}else if(i===2){
			$('#dailybtn').on('click',function(){
				if($('#studyId').html('') && $('#studyPrevious').html('') ){
					$('#studyId').append(`
						<h1>${a.daily.current} hrs</h1>
				`	)

					$('#studyPrevious').append(`
						<span>Yesterday -  ${a.daily.previous} hrs </span>
					`)
				}
				
			})

			$('#weeklybtn').on('click',function(){
				if($('#studyId').html('') && $('#studyPrevious').html('') ){
					$('#studyId').append(`
						<h1>${a.weekly.current} hrs</h1>
				`	)

					$('#studyPrevious').append(`
						<span>Last week -  ${a.weekly.previous} hrs </span>
					`)
				}
				
				
			})

			$('#monthlybtn').on('click',function(){
				if($('#studyId').html('') && $('#studyPrevious').html('') ){
					$('#studyId').append(`
						<h1>${a.monthly.current} hrs</h1>
				`	)

					$('#studyPrevious').append(`
						<span>Last month - ${a.monthly.previous} hrs </span>
					`)
				}
				
				
			})
		}else if(i===3){
				$('#dailybtn').on('click',function(){
				if($('#exerciseId').html('') && $('#exercisePrevious').html('') ){
					$('#exerciseId').append(`
						<h1>${a.daily.current} hrs</h1>
				`	)

					$('#exercisePrevious').append(`
						<span>Yesterday -  ${a.daily.previous} hrs </span>
					`)
				}
				
			})

			$('#weeklybtn').on('click',function(){
				if($('#exerciseId').html('') && $('#exercisePrevious').html('') ){
					$('#exerciseId').append(`
						<h1>${a.weekly.current} hrs</h1>
				`	)

					$('#exercisePrevious').append(`
						<span>Last week -  ${a.weekly.previous} hrs </span>
					`)
				}
				
				
			})

			$('#monthlybtn').on('click',function(){
				if($('#exerciseId').html('') && $('#exercisePrevious').html('') ){
					$('#exerciseId').append(`
						<h1>${a.monthly.current} hrs</h1>
				`	)

					$('#exercisePrevious').append(`
						<span>Last month - ${a.monthly.previous} hrs </span>
					`)
				}
				
				
			})
		}else if(i===4){
			$('#dailybtn').on('click',function(){
				if($('#socialId').html('') && $('#socialPrevious').html('') ){
					$('#socialId').append(`
						<h1>${a.daily.current} hrs</h1>
				`	)

					$('#socialPrevious').append(`
						<span>Yesterday -  ${a.daily.previous} hrs </span>
					`)
				}
				
			})

			$('#weeklybtn').on('click',function(){
				if($('#socialId').html('') && $('#socialPrevious').html('') ){
					$('#socialId').append(`
						<h1>${a.weekly.current} hrs</h1>
				`	)

					$('#socialPrevious').append(`
						<span>Last week -  ${a.weekly.previous} hrs </span>
					`)
				}
				
				
			})

			$('#monthlybtn').on('click',function(){
				if($('#socialId').html('') && $('#socialPrevious').html('') ){
					$('#socialId').append(`
						<h1>${a.monthly.current} hrs</h1>
				`	)

					$('#socialPrevious').append(`
						<span>Last month - ${a.monthly.previous} hrs </span>
					`)
				}
				
				
			})
		}else if(i===5){
			$('#dailybtn').on('click',function(){
				if($('#selfId').html('') && $('#selfPrevious').html('') ){
					$('#selfId').append(`
						<h1>${a.daily.current} hrs</h1>
				`	)

					$('#selfPrevious').append(`
						<span>Yesterday -  ${a.daily.previous} hrs </span>
					`)
				}
				
			})

			$('#weeklybtn').on('click',function(){
				if($('#selfId').html('') && $('#selfPrevious').html('') ){
					$('#selfId').append(`
						<h1>${a.weekly.current} hrs</h1>
				`	)

					$('#selfPrevious').append(`
						<span>Last week -  ${a.weekly.previous} hrs </span>
					`)
				}
				
				
			})

			$('#monthlybtn').on('click',function(){
				if($('#selfId').html('') && $('#selfPrevious').html('') ){
					$('#selfId').append(`
						<h1>${a.monthly.current} hrs</h1>
				`	)

					$('#selfPrevious').append(`
						<span>Last month - ${a.monthly.previous} hrs </span>
					`)
				}
				
				
			})
		}
	}

	

	
		
	
	
});