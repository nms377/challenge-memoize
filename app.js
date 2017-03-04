// function memoizeID(id){
// 	let lookUpTbl = [];

// 	if (id === 0){
// 		return 1;
// 	} else if(lookUpTbl.indexOf(id) !== -1){
// 		let value = lookUpTbl.indexOf(id);
// 		console.log('lookUpTblIndex', lookUpTbl[value]);
// 		return lookUpTbl[value];
// 	}else {
// 		let x = memoizeID(id-1)*id;
// 		lookUpTbl.push(x);
// 		console.log('lookUpTbl', lookUpTbl);
// 		return x;
// 	}

// 	console.log('what is this', lookUpTbl);

// }

// console.log('result', memoizeID(3));
// // console.log('result', memoizeID(4));
// // console.log('result', memoizeID(5));
// // console.log('result', memoizeID(7));

//	nakaz's review

function memoizeQuery(){
	var cache = {};
	//	get element
	//	if element exists in cache
	//	serve the value from cache
	//	else
	//	if element does not exist in cache
	//	save to the cache
	//	serve the element

	return function(sel){
		if (cache.hasOwnProperty(sel)){
			console.log('return cache')
			return cache[sel];
		}else {
			console.log('setting the cache');
			return cache[sel] = document.querySelectorAll(sel);
		}
	};
}

module.exports = memoizeID;