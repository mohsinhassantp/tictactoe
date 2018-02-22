"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.msg = "";
        this.nCnt = 0;
        //public appList;
        this.appList = [{
                "ID": "0",
                "state": "0"
            },
            {
                "ID": "1",
                "state": "0"
            },
            {
                "ID": "2",
                "state": "0"
            },
            {
                "ID": "3",
                "state": "0"
            },
            {
                "ID": "4",
                "state": "0"
            },
            {
                "ID": "5",
                "state": "0"
            },
            {
                "ID": "6",
                "state": "0"
            },
            {
                "ID": "7",
                "state": "0"
            },
            {
                "ID": "8",
                "state": "0"
            }];
    }
    AppComponent.prototype.clickMe = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        this.nCnt = this.nCnt + 1;
        this.msg = "Clicked: " + this.nCnt;
        console.log(value);
        this.appList[value]['state'] = 1;
        if (this.nCnt == 1) {
            if (this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            else {
                this.appList[0]['state'] = 2;
            }
        }
        else if (this.nCnt == 2) {
            //checking first column techniques
            if (value == 0) {
                if (this.appList[1]['state'] == 1) {
                    this.appList[2]['state'] = 2;
                }
                else if (this.appList[2]['state'] == 1) {
                    this.appList[1]['state'] = 2;
                }
                else if (this.appList[6]['state'] == 1) {
                    this.appList[3]['state'] = 2;
                }
                else if (this.appList[3]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[8]['state'] = 2;
                }
                else if (this.appList[8]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
            else if (value == 1) {
                //checking second column techniques
                if (this.appList[0]['state'] == 1) {
                    this.appList[2]['state'] = 2;
                }
                else if (this.appList[2]['state'] == 1) {
                    this.appList[0]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[7]['state'] = 2;
                }
                else if (this.appList[7]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
            else if (value == 2) {
                if (this.appList[0]['state'] == 1) {
                    this.appList[1]['state'] = 2;
                }
                else if (this.appList[1]['state'] == 1) {
                    this.appList[0]['state'] = 2;
                }
                else if (this.appList[5]['state'] == 1) {
                    this.appList[8]['state'] = 2;
                }
                else if (this.appList[8]['state'] == 1) {
                    this.appList[5]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
                else if (this.appList[6]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
            else if (value == 3) {
                if (this.appList[0]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
                else if (this.appList[6]['state'] == 1) {
                    this.appList[0]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[5]['state'] = 2;
                }
                else if (this.appList[5]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
            else if (value == 4) {
                if (this.appList[3]['state'] == 1) {
                    this.appList[5]['state'] = 2;
                }
                else if (this.appList[5]['state'] == 1) {
                    this.appList[3]['state'] = 2;
                }
                else if (this.appList[1]['state'] == 1) {
                    this.appList[7]['state'] = 2;
                }
                else if (this.appList[7]['state'] == 1) {
                    this.appList[1]['state'] = 2;
                }
                else if (this.appList[6]['state'] == 1) {
                    this.appList[0]['state'] = 2;
                }
                else if (this.appList[0]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
            }
            else if (value == 5) {
                if (this.appList[4]['state'] == 1) {
                    this.appList[3]['state'] = 2;
                }
                else if (this.appList[3]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
                else if (this.appList[8]['state'] == 1) {
                    this.appList[2]['state'] = 2;
                }
                else if (this.appList[2]['state'] == 1) {
                    this.appList[8]['state'] = 2;
                }
            }
            else if (value == 6) {
                if (this.appList[3]['state'] == 1) {
                    this.appList[0]['state'] = 2;
                }
                else if (this.appList[0]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
                else if (this.appList[7]['state'] == 1) {
                    this.appList[8]['state'] = 2;
                }
                else if (this.appList[8]['state'] == 1) {
                    this.appList[7]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[2]['state'] = 2;
                }
                else if (this.appList[2]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
            else if (value == 7) {
                if (this.appList[6]['state'] == 1) {
                    this.appList[8]['state'] = 2;
                }
                else if (this.appList[8]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[1]['state'] = 2;
                }
                else if (this.appList[1]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
            else if (value == 8) {
                if (this.appList[7]['state'] == 1) {
                    this.appList[6]['state'] = 2;
                }
                else if (this.appList[6]['state'] == 1) {
                    this.appList[7]['state'] = 2;
                }
                else if (this.appList[5]['state'] == 1) {
                    this.appList[2]['state'] = 2;
                }
                else if (this.appList[2]['state'] == 1) {
                    this.appList[5]['state'] = 2;
                }
                else if (this.appList[4]['state'] == 1) {
                    this.appList[0]['state'] = 2;
                }
                else if (this.appList[0]['state'] == 1) {
                    this.appList[4]['state'] = 2;
                }
            }
        }
        else if (this.nCnt >= 3) {
            if (this.appList[value]['state'] == 0) {
                this.appList[value]['state'] = 1;
            }
            //check win loss
            this.checkwinloss();
            //blocking possible user win
            if (this.appList[0]['state'] == 1 && this.appList[1]['state'] == 1 && this.appList[2]['state'] == 0) {
                this.appList[2]['state'] = 2;
            }
            else if (this.appList[0]['state'] == 1 && this.appList[2]['state'] == 1 && this.appList[1]['state'] == 0) {
                this.appList[1]['state'] = 2;
            }
            else if (this.appList[0]['state'] == 1 && this.appList[3]['state'] == 1 && this.appList[6]['state'] == 0) {
                this.appList[6]['state'] = 2;
            }
            else if (this.appList[0]['state'] == 1 && this.appList[6]['state'] == 1 && this.appList[3]['state'] == 0) {
                this.appList[3]['state'] = 2;
            }
            else if (this.appList[0]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[8]['state'] == 0) {
                this.appList[8]['state'] = 2;
            }
            else if (this.appList[0]['state'] == 1 && this.appList[8]['state'] == 1 && this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            else if (this.appList[1]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[7]['state'] == 0) {
                this.appList[7]['state'] = 2;
            }
            else if (this.appList[1]['state'] == 1 && this.appList[7]['state'] == 1 && this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            else if (this.appList[1]['state'] == 1 && this.appList[0]['state'] == 1 && this.appList[2]['state'] == 0) {
                this.appList[2]['state'] = 2;
            }
            else if (this.appList[1]['state'] == 1 && this.appList[2]['state'] == 1 && this.appList[0]['state'] == 0) {
                this.appList[0]['state'] = 2;
            }
            //checking for 2
            if (this.appList[2]['state'] == 1 && this.appList[1]['state'] == 1 && this.appList[0]['state'] == 0) {
                this.appList[0]['state'] = 2;
            }
            else if (this.appList[2]['state'] == 1 && this.appList[0]['state'] == 1 && this.appList[1]['state'] == 0) {
                this.appList[1]['state'] = 2;
            }
            else if (this.appList[2]['state'] == 1 && this.appList[5]['state'] == 1 && this.appList[8]['state'] == 0) {
                this.appList[8]['state'] = 2;
            }
            else if (this.appList[2]['state'] == 1 && this.appList[8]['state'] == 1 && this.appList[5]['state'] == 0) {
                this.appList[5]['state'] = 2;
            }
            else if (this.appList[2]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[6]['state'] == 0) {
                this.appList[6]['state'] = 2;
            }
            else if (this.appList[2]['state'] == 1 && this.appList[6]['state'] == 1 && this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            //check for 3
            if (this.appList[3]['state'] == 1 && this.appList[0]['state'] == 1 && this.appList[6]['state'] == 0) {
                this.appList[6]['state'] = 2;
            }
            else if (this.appList[3]['state'] == 1 && this.appList[6]['state'] == 1 && this.appList[0]['state'] == 0) {
                this.appList[0]['state'] = 2;
            }
            else if (this.appList[3]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[5]['state'] == 0) {
                this.appList[5]['state'] = 2;
            }
            else if (this.appList[3]['state'] == 1 && this.appList[5]['state'] == 1 && this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            //check for 4
            if (this.appList[4]['state'] == 1 && this.appList[1]['state'] == 1 && this.appList[3]['state'] == 0) {
                this.appList[3]['state'] = 2;
            }
            else if (this.appList[4]['state'] == 1 && this.appList[3]['state'] == 1 && this.appList[1]['state'] == 0) {
                this.appList[1]['state'] = 2;
            }
            else if (this.appList[4]['state'] == 1 && this.appList[5]['state'] == 1 && this.appList[3]['state'] == 0) {
                this.appList[3]['state'] = 2;
            }
            else if (this.appList[4]['state'] == 1 && this.appList[3]['state'] == 1 && this.appList[5]['state'] == 0) {
                this.appList[5]['state'] = 2;
            }
            else if (this.appList[4]['state'] == 1 && this.appList[2]['state'] == 1 && this.appList[6]['state'] == 0) {
                this.appList[6]['state'] = 2;
            }
            else if (this.appList[4]['state'] == 1 && this.appList[6]['state'] == 1 && this.appList[2]['state'] == 0) {
                this.appList[2]['state'] = 2;
            }
            //check for 5
            if (this.appList[5]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[3]['state'] == 0) {
                this.appList[3]['state'] = 2;
            }
            else if (this.appList[5]['state'] == 1 && this.appList[3]['state'] == 1 && this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            else if (this.appList[5]['state'] == 1 && this.appList[2]['state'] == 1 && this.appList[8]['state'] == 0) {
                this.appList[8]['state'] = 2;
            }
            else if (this.appList[5]['state'] == 1 && this.appList[8]['state'] == 1 && this.appList[2]['state'] == 0) {
                this.appList[2]['state'] = 2;
            }
            //check for 6
            if (this.appList[6]['state'] == 1 && this.appList[7]['state'] == 1 && this.appList[8]['state'] == 0) {
                this.appList[8]['state'] = 2;
            }
            else if (this.appList[6]['state'] == 1 && this.appList[8]['state'] == 1 && this.appList[7]['state'] == 0) {
                this.appList[7]['state'] = 2;
            }
            else if (this.appList[6]['state'] == 1 && this.appList[3]['state'] == 1 && this.appList[0]['state'] == 0) {
                this.appList[0]['state'] = 2;
            }
            else if (this.appList[6]['state'] == 1 && this.appList[0]['state'] == 1 && this.appList[3]['state'] == 0) {
                this.appList[3]['state'] = 2;
            }
            else if (this.appList[6]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[2]['state'] == 0) {
                this.appList[2]['state'] = 2;
            }
            else if (this.appList[6]['state'] == 1 && this.appList[2]['state'] == 1 && this.appList[4]['state'] == 0) {
                this.appList[4]['state'] = 2;
            }
            this.checkwinloss();
        }
    };
    AppComponent.prototype.checkwinloss = function () {
        var flag = 0;
        if (this.appList[0]['state'] == 1 && this.appList[1]['state'] == 1 && this.appList[2]['state'] == 1) {
            alert("You Win Bingooooo...");
            //this.msg = "You Win Bingooooo..." ;
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[0]['state'] == 1 && this.appList[3]['state'] == 1 && this.appList[6]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[0]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[8]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[1]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[7]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[2]['state'] == 1 && this.appList[5]['state'] == 1 && this.appList[8]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[2]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[6]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[3]['state'] == 1 && this.appList[4]['state'] == 1 && this.appList[5]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[6]['state'] == 1 && this.appList[7]['state'] == 1 && this.appList[8]['state'] == 1) {
            alert("You Win Bingooooo...");
            this.msg = "You Win Bingooooo...";
            flag = 1;
            this.nCnt = 0;
        }
        //check computer win
        if (this.appList[0]['state'] == 2 && this.appList[1]['state'] == 2 && this.appList[2]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[0]['state'] == 2 && this.appList[3]['state'] == 2 && this.appList[6]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[0]['state'] == 2 && this.appList[4]['state'] == 2 && this.appList[8]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[1]['state'] == 2 && this.appList[4]['state'] == 2 && this.appList[7]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[2]['state'] == 2 && this.appList[5]['state'] == 2 && this.appList[8]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[2]['state'] == 2 && this.appList[4]['state'] == 2 && this.appList[6]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[3]['state'] == 2 && this.appList[4]['state'] == 2 && this.appList[5]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        else if (this.appList[6]['state'] == 2 && this.appList[7]['state'] == 2 && this.appList[8]['state'] == 2) {
            alert("Computer Win You Lost...Awww");
            this.msg = "Computer Win You Lost...Awww";
            flag = 1;
            this.nCnt = 0;
        }
        if (flag == 1) {
            for (var item in this.appList) {
                this.appList[item]['state'] = 0;
                console.log(item); // 0,1,2
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map