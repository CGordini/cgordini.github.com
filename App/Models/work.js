var Work = (function () {
    function Work() {
        this.title = arguments[0] || "";
        this.place = arguments[1] || "";
        this.sMonth = arguments[2] || "";
        this.sYear = arguments[3] || undefined;
        this.eMonth = arguments[4] || "";
        this.eYear = arguments[5] || undefined;
		this.summary = arguments[6] || "";
        this.address = arguments[7] || "";
        this.city = arguments[8] || "";
        this.state = arguments[9] || "";
		this.time = arguments[10] || undefined;
    }

    return Work;
})();
