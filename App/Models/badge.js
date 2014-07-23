var Badge = (function () {
    function Badge() {
        this.title = arguments[0] || "";
        this.link =  arguments[1] || "";
        this.image = arguments[2] || "";
    }

    return Badge;
})();
