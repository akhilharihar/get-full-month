module.exports = function () {
    Object.defineProperty(Date.prototype, 'getFullMonth', {
        value: function (short_form = false) {
            let currentMonth = this.getMonth(),
                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            if (short_form) {
                return months[currentMonth].slice(0, 3) + '.';
            } else {
                return months[currentMonth];
            }
        },
    });
}