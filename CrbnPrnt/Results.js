/*
 * JS for Results generated by Tiggzi
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
j_0_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage3': 'j_4',
        'mobilelabel74': 'j_5',
        'mobilelabel86': 'j_6',
        'tra1': 'j_7',
        'mobilelabel87': 'j_8',
        'ele1': 'j_9',
        'mobilelabel88': 'j_10',
        'res1': 'j_11',
        'mobilelabel75': 'j_12',
        'mobilecheckboxgroup6': 'j_13',
        'mobilecheckbox28': 'j_14',
        'mobilecheckbox29': 'j_15',
        'mobilecheckbox30': 'j_16',
        'mobilecheckbox34': 'j_17',
        'mobilecheckbox35': 'j_18',
        'mobilenavbar4': 'j_20',
        'surveybutton': 'j_21',
        'resultsbutton': 'j_22',
        'historybutton': 'j_23'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_0';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_0_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_0';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_121C_onLoad = j_0_onLoad = function() {
        screen_121C_elementsExtraJS();
        j_0_windowEvents();
        screen_121C_elementsEvents();
    }
    // screen window events
    screen_121C_windowEvents = j_0_windowEvents = function() {
        $('#j_0').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#j_0').bind({
            pageshow: function() {
                setText('j_9', localStorage.getItem('EE'));
                setText('j_11', localStorage.getItem('RR'));
                setText('j_7', localStorage.getItem('TT'));
            },
        });
    }
    // screen elements extra js
    screen_121C_elementsExtraJS = j_0_elementsExtraJS = function() {
        // screen (screen-121C) extra code
    }
    // screen elements handler
    screen_121C_elementsEvents = j_0_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_19 [name="surveybutton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Survey', {
                        reverse: false
                    });
                }
            },
        });
        $('#j_19 [name="historybutton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Graph', {
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_0").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_0_beforeshow();
    });
    if (runBeforeShow) {
        j_0_beforeshow();
    } else {
        j_0_onLoad();
    }
}
$("#j_0").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_0_js();
});