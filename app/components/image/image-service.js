import Image from "../../models/image.js";


// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Image() {
		return _state.image
	}

	getImage() {
		imgApi.get()
			.then(res => {
				let data = new Image(res.data)
				setState('image', data)
			})
	}
}
