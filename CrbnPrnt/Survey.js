/*
 * JS for Survey generated by Tiggzi
 *
 * Created on: Monday, April 15, 2013, 05:37:07 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggzi.env = "bundle";
Tiggzi.getProjectGUID = function() {
    return '45d66a9c-4dcc-4df4-9bc6-0d38590e8129';
}
Tiggzi.getTargetPlatform = function() {
    return '0';
}

function navigateTo(outcome, useAjax) {
    Tiggzi.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggzi.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggzi.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Tiggzi.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
var StackMobDatabaseSettings1 = {
    "stackMobPublicKey": "dc66e11c-d4b7-40a3-8511-53ebfda982df"
}
var StackMobDatabaseSettings4 = {
    "stackMobPublicKey": "dc66e11c-d4b7-40a3-8511-53ebfda982df"
}
var StackMobDatabaseSettings6 = {
    "stackMobPublicKey": "dc66e11c-d4b7-40a3-8511-53ebfda982df"
}
var StackMobDatabaseSettings5 = {
    "stackMobPublicKey": ""
}
var StackMobDatabaseSettings2 = {
    "stackMobPublicKey": ""
}
var StackMobDatabaseSettings3 = {
    "stackMobPublicKey": "dc66e11c-d4b7-40a3-8511-53ebfda982df"
}
var StackMobDatabaseSettings = {
    "stackMobPublicKey": "dc66e11c-d4b7-40a3-8511-53ebfda982df"
}
/*************************
 *      SERVICES          *
 *************************/
var StackMobSurveyPost = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/survey',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': StackMobDatabaseSettings4
});
var StackMobGet = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/dprof/',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StackMobDatabaseSettings1
});
var StackMobSurveyGet = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/survey',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StackMobDatabaseSettings6
});
var StackMobPut = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/dprof/',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
});
var StackMobDatabase1 = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/dprof',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': StackMobDatabaseSettings5
});
var StackMobGetCity = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/dprof',
    'dataType': 'json',
    'type': 'get',
});
var StackMobPost = new Tiggr.RestService({
    'url': 'https://api.mob1.stackmob.com/dprof/',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': StackMobDatabaseSettings
});
createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Tiggzi.AppPages = [{
    "name": "Results",
    "location": "Results.html"
}, {
    "name": "Survey",
    "location": "Survey.html"
}, {
    "name": "Survey12",
    "location": "Survey12.html"
}, {
    "name": "Survey11",
    "location": "Survey11.html"
}, {
    "name": "Graph",
    "location": "Graph.html"
}, {
    "name": "Survey1",
    "location": "Survey1.html"
}, {
    "name": "Info",
    "location": "Info.html"
}];
j_61_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton23': 'j_64',
        'mobilelabel3': 'j_66',
        'mobileradiogroup5': 'j_67',
        'mobileradiobutton14': 'j_68',
        'mobileradiobutton26': 'j_69',
        'mobilelabel4': 'j_70',
        'miles': 'j_71',
        'mobilelabel5': 'j_72',
        'mobileradiogroup16': 'j_73',
        'mobileradiobutton41': 'j_74',
        'mobileradiobutton42': 'j_75',
        'mobileradiobutton43': 'j_76',
        'mobilelabel7': 'j_77',
        'tv': 'j_78',
        'mobilelabel35': 'j_79',
        'mobileradiogroup20': 'j_80',
        'mobileradiobutton48': 'j_81',
        'mobileradiobutton49': 'j_82',
        'mobilelabel38': 'j_83',
        'mobileradiogroup18': 'j_84',
        'mobileradiobutton48': 'j_85',
        'mobileradiobutton49': 'j_86',
        'mobilebutton20': 'j_87',
        'mobilenavbar5': 'j_89',
        'mobilenavbaritem13': 'j_90',
        'resultsbutton': 'j_91',
        'historybutton': 'j_92'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_61';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    postsurvey = new Tiggr.DataSource(StackMobSurveyPost, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_61");
        },
        'onSuccess': function(data) {
            Tiggr.navigateTo('Results', {
                reverse: false
            });
            Tiggr.navigateTo('Results', {
                reverse: false
            });
        },
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['rsrcs'],
            'ID': '___local_storage___',
            'ATTR': 'RRR'
        }, {
            'PATH': ['createddate'],
            'ID': '___local_storage___',
            'ATTR': 'datecreated'
        }, {
            'PATH': ['avgs'],
            'ID': '___local_storage___',
            'ATTR': 'points'
        }, {
            'PATH': ['elctrcty'],
            'ID': '___local_storage___',
            'ATTR': 'EEE'
        }, {
            'PATH': ['trsnptn'],
            'ID': '___local_storage___',
            'ATTR': 'TTT'
        }],
        'requestMapping': [{
            'PATH': ['X-StackMob-API-Key'],
            'HEADER': true,
            'ATTR': '{stackMobPublicKey}'
        }, {
            'PATH': ['Accept'],
            'HEADER': true,
            'ATTR': 'application/vnd.stackmob+json; version=0'
        }, {
            'PATH': ['rsrcs'],
            'ID': 'mobileradiogroup5',
            'ATTR': 'value'
        }, {
            'PATH': ['milesdriven'],
            'ID': '___local_storage___',
            'ATTR': 'milesdriven'
        }]
    });
    datasources.push(postsurvey);
    getsurvey = new Tiggr.DataSource(StackMobSurveyGet, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_61");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['X-StackMob-API-Key'],
            'HEADER': true,
            'ATTR': '{stackMobPublicKey}'
        }, {
            'PATH': ['Accept'],
            'HEADER': true,
            'ATTR': 'application/vnd.stackmob+json; version=0'
        }]
    });
    datasources.push(getsurvey);
    restservice11 = new Tiggr.DataSource(StackMobDatabase1, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_61");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['X-StackMob-API-Key'],
            'HEADER': true,
            'ATTR': '{stackMobPublicKey}'
        }, {
            'PATH': ['Accept'],
            'HEADER': true,
            'ATTR': 'application/vnd.stackmob+json; version=0'
        }]
    });
    datasources.push(restservice11);
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_61_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_61';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_91A6_onLoad = j_61_onLoad = function() {
        screen_91A6_elementsExtraJS();
        localStorage["firstname"] = "First";
        localStorage["lastname"] = "Last";
        j_61_windowEvents();
        screen_91A6_elementsEvents();
    }
    // screen window events
    screen_91A6_windowEvents = j_61_windowEvents = function() {
        $('#j_61').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_91A6_elementsExtraJS = j_61_elementsExtraJS = function() {
        // screen (screen-91A6) extra code
    }
    // screen elements handler
    screen_91A6_elementsEvents = j_61_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_63 [name="mobilebutton23"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Info', {
                        transition: 'flip',
                        reverse: false
                    });
                    if (localStorage["userid"] == null) {
                        console.log("hi");
                        updatevisible = false;
                        tiggr("submit").visible = true;
                    } else {
                        console.log("high");
                        updatevisible = true;
                        submitvisible = false;
                    };
                }
            },
        });
        $('#j_65 [name="mobilebutton20"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    try {
                        postsurvey.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                    var d = new Date();
                    var date = d.getDate();
                    var year = d.getFullYear();
                    var month = d.getMonth() + 1;
                    var mdy = "" + month + date + year;
                    console.log(mdy);
                    var transport = 100,
                        electric = 200,
                        resources = 100;
                    var drive = $('input[name="mobileradiogroup1"]:checked').val();
                    if (drive == "Item 1") transport += 30;
                    transport -= (Tiggzi("miles").val());
                    localStorage["TTT"] = transport / 130 * 100;
                    if (localStorage["TTT"] > 0) localStorage["TTT"] = 0;
                    var drive2 = $('input[name="mobileradiogroup2"]:checked').val();
                    if (drive2 == "Item 1") electric += 100;
                    else if (drive2 == "Item 2") electric += 50;
                    var drive3 = $('input[name="mobileradiogroup3"]:checked').val();
                    if (drive3 == "Item 1") electric -= 100;
                    electric -= (Tiggzi("tv").val()) * 25;
                    localStorage["EEE"] = electric / 450 * 100;
                    if (localStorage["EEE"] > 0) localStorage["EEE"] = 0;
                    var drive4 = $('input[name="mobileradiogroup4"]:checked').val();
                    if (drive4 == "Item 1") resources += 100;
                    var drive5 = $('input[name="mobileradiogroup3"]:checked').val();
                    if (drive5 == "Item 1") resources -= 50;
                    localStorage["RRR"] = resources / 200 * 100;
                    if (localStorage["RRR"] > 0) localStorage["RRR"] = 0;
                    console.log(localStorage["TTT"]);
                    var r = localStorage["RRR"];
                    var t = localStorage["TTT"];
                    var e = localStorage["EEE"];
                    var rt, tt, et;
                    console.log("hi");
                    if (r == null) rt = "Please do the survey to get your results.";
                    else if (r < 40) rt = "You seem to be using a lot of resources. Let's try and improve that. Did you know that if the entire world lived in a similar manner, we would need 5 planets to provide the needed resources..Doing things like recycling bottles and paper are small steps that can make a huge difference. Some other small things you can do is to take shorter showers every once in awhile. Lets try and conserve resources to improve the community’s environment.";
                    else if (r >= 40 && r <= 70) rt = "Your resource usage is pretty good. That doesn't mean that you shouldn't try to further improve. Remember to try and do small things like take faster showers and recycling every once in a while. Take it one step at a time.";
                    else if (r >= 70) rt = "You are really responsible with your resources! Good job! Now, lets take the next step by encouraging others to do the same. Share the message and get other people to start lookinig at their usage. Together, everyone can make the community a greener place.";
                    if (t == null) tt = "Please do the survey to get your results.";
                    else if (t < 40) tt = "Your transportation could use some work. There are a lot of easy ways to lower your usage. For example, why not try carpooling with some friends or try biking more often? This is especially important if you have a gas guzzler, so lets take some simple steps to make our community more environmentally friendly.";
                    else if (t >= 40 && t <= 70) tt = "Your transportation usage isn't that bad! However, there is always more you can do. Doing small things like carpooling more often and biking around can make a huge difference.";
                    else if (t > 70) tt = "Wow! Your transportation usage is great! A good next step is to start sharing. Lets share the message with everyone, so they too can start logging information and make the community greener.";
                    if (e == null) et = "Please do the survey to get your results.";
                    else if (e < 40) et = "You are using a lot of electricity. Lets try and improve our usage. Small steps can make a big difference, so try using fluorescent light bulbs. Another small thing that causes a lot of electricity to be used is that people always forget to unplug their electronics. In fact, appliances that are off, but are plugged in, can still use electricity. So remember to unplug electronics when you are not using them. These small changes can help us all be more green.";
                    else if (e >= 40 && e <= 70) et = "Your electricity usage is pretty good. Lets try and make an even better improvement by remembering to do small things like unplugging electric devices at night and remembering to turn unused lights off.";
                    else if (e > 70) et = "Amazing! You are being very responsible with your electricity usage. Now, lets try to teach everyone else to do the same. Share the information you learn from this app and encourage others to take a stand and help make the world more environmentally friendly.";
                    console.log(et);
                    console.log(rt);
                    console.log(tt);
                    localStorage["TT"] = tt;
                    localStorage["EE"] = et;
                    localStorage["RR"] = rt;
                }
            },
        });
        $('#j_88 [name="resultsbutton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Results', {
                        reverse: false
                    });
                }
            },
        });
        $('#j_88 [name="historybutton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Graph', {
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_61").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_61_beforeshow();
    });
    if (runBeforeShow) {
        j_61_beforeshow();
    } else {
        j_61_onLoad();
    }
}
$("#j_61").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_61_js();
});