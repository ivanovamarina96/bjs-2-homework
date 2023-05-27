class AlarmClock {
	constructor() {
		this.alarmCollection = []; //коллекция будильников
		this.intervalId = null;
	}
	addClock(time, callback) { //добавить будильник
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.some(element => element.time === time) === true) {
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(index => index.time !== time)
	}




	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString('en-GB').slice(0, 5).toString();


	}

	start() {

		if (this.intervalId) {
			return
		}

		this.intervalId = setInterval(() => {
			const today = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(element => {
				if (element.time === today && element.canCall === true) {
					element.canCall = false;
					element.callback();

				}

			}), 1000
		})


	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach(element => {
			element.canCall = true;
		})
	}
	clearAlarms() {
		stop();
		this.alarmCollection = [];
	}
}