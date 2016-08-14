class Input {
	constructor(data) {
		if (data)
			this.populate(data);
	}

	populate(data) {
		if (data.id) this.id = data.id;
		if (data.cb) this.cb = data.cb;
	}

	setId(id) {
		this.id = id;
	}
	setCallback(cb) {
		this.cb = cb;
	}
}