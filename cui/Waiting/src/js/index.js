(function () {
	var Wait = function () {
        var _this = this;
        this.pageSunEl = document.getElementById('pageSun');
	}
	Wait.prototype.init = function () {
        var _this = this;
        var pb;
        var fp =  new AlloyTouch.FullPage("#fullpage",{
            animationEnd:function () {

            },
            leavePage: function (index) {
               // console.log("leave", index)

                if (index === 1) {
                    _this.hideTwoPage();
                }
            },
            beginToPage: function (index) {
                // console.log("to", index, _this);

                if (index === 1) {
                    _this.showTwoPage();
                }

                pb.to(index / (this.length-1));
            }
        });

        pb = new ProgressBar("#progress", fp.length-1)

	}
    Wait.prototype.showTwoPage = function () {
        this.pageSunEl.style.display = 'block'
    }
    Wait.prototype.hideTwoPage = function () {
        this.pageSunEl.style.display = 'none'
    }


	window.onload = function () {
		var wait = new Wait()
		wait.init();
		
	}
})()