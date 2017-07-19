export let pad = (n , width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

export let getDoubleDigitTimeFromTimer = (timer) => {
  return  pad(Math.floor(this.props.timer/60),2)}:{pad(this.props.timer%60,2);
};

export let deepCopyArray = (arr) => {
  let out = [];
	for (let i = 0, len = arr.length; i < len; i++) {
		let item = arr[i];
		let obj = {};
		for (var k in item) {
			obj[k] = item[k];
		}
		out.push(obj);
	}
    return out;
};

export let setCardValues = (cards,properties) => {
  return cards.map(card => {
        return Object.assign(card,obj)    
    });
};
