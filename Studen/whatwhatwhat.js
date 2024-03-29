/*
 * JS for whatwhatwhat generated by Tiggzi
 *
 * Created on: Monday, April 15, 2013, 05:30:39 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggzi.env = "bundle";
Tiggzi.getProjectGUID = function() {
    return '46d01e13-5e39-4d93-81d0-c3d4c5617e10';
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
/*************************
 *      SERVICES          *
 *************************/
var GetToken = new Tiggr.RestService({
    'url': 'https://graph.facebook.com/oauth/access_token',
    'dataType': 'json',
    'type': 'get',
});
var RESTService = new Tiggr.RestService({
    'url': 'http://study-api.herokuapp.com/api/notices',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});
var GetData = new Tiggr.RestService({
    'url': 'https://graph.facebook.com/me',
    'dataType': 'json',
    'type': 'get',
});
var Camera_service = new Tiggr.CameraService({});
createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Tiggzi.AppPages = [{
    "name": "AddEventWhat",
    "location": "AddEventWhat.html"
}, {
    "name": "AddEventWhen",
    "location": "AddEventWhen.html"
}, {
    "name": "FinishedCreating",
    "location": "FinishedCreating.html"
}, {
    "name": "AddEventHow",
    "location": "AddEventHow.html"
}, {
    "name": "Result",
    "location": "Result.html"
}, {
    "name": "whatwhatwhat",
    "location": "whatwhatwhat.html"
}, {
    "name": "AddEventWho",
    "location": "AddEventWho.html"
}, {
    "name": "whowhowho",
    "location": "whowhowho.html"
}, {
    "name": "howhowhow1",
    "location": "howhowhow1.html"
}, {
    "name": "Login",
    "location": "Login.html"
}, {
    "name": "whenwhenwhen",
    "location": "whenwhenwhen.html"
}, {
    "name": "Home",
    "location": "Home.html"
}];
j_115_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel36': 'j_119',
        'mobiletextinput18': 'j_120',
        'mobilespacer14': 'j_121',
        'mobilelabel39': 'j_122',
        'mobiletextinput21': 'j_123',
        'mobilespacer17': 'j_124',
        'mobilelabel42': 'j_125',
        'mobiletextarea16': 'j_126',
        'mobilespacer20': 'j_127',
        'mobilegrid6': 'j_128',
        'mobilegridcell82': 'j_129',
        'mobilebutton9': 'j_130',
        'mobilegridcell83': 'j_131',
        'mobilegridcell110': 'j_132',
        'mobilebutton50': 'j_133'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_115';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    restservice4 = new Tiggr.DataSource(RESTService, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_115");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['emails'],
            'ATTR': 'yeshram@gmail.com'
        }, {
            'PATH': ['title'],
            'ID': '___local_storage___',
            'ATTR': 'title'
        }, {
            'PATH': ['subject'],
            'ID': '___local_storage___',
            'ATTR': 'subject'
        }, {
            'PATH': ['description'],
            'ID': '___local_storage___',
            'ATTR': 'description'
        }, {
            'PATH': ['date'],
            'ATTR': '6/1/12'
        }, {
            'PATH': ['start_time'],
            'ATTR': '1:00'
        }, {
            'PATH': ['end_time'],
            'ATTR': '2:00'
        }, {
            'PATH': ['location'],
            'ATTR': '20875 Valley Green Dr'
        }, {
            'PATH': ['goal'],
            'ATTR': 'to finish ws'
        }, {
            'PATH': ['resources_needed'],
            'ATTR': 'chem textbook'
        }, {
            'PATH': ['resources_available'],
            'ATTR': 'laptop'
        }, {
            'PATH': ['agenda'],
            'ATTR': 'start by goin over ch 1'
        }]
    });
    datasources.push(restservice4);
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_115_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_115';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_40BE_onLoad = j_115_onLoad = function() {
        screen_40BE_elementsExtraJS();
        j_115_windowEvents();
        screen_40BE_elementsEvents();
    }
    // screen window events
    screen_40BE_windowEvents = j_115_windowEvents = function() {
        $('#j_115').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_40BE_elementsExtraJS = j_115_elementsExtraJS = function() {
        // screen (screen-40BE) extra code
    }
    // screen elements handler
    screen_40BE_elementsEvents = j_115_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_118 [name="mobiletextinput18"]').die().live({
            input: function() {
                setVar_('title', 'j_120', 'text', '', this);
            },
        });
        $('#j_118 [name="mobiletextinput21"]').die().live({
            input: function() {
                setVar_('subject', 'j_123', 'text', '', this);
            },
        });
        $('#j_118 [name="mobiletextarea16"]').die().live({
            input: function() {
                setVar_('description', 'j_126', 'text', '', this);
            },
        });
        $('#j_118 [name="mobilebutton9"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Home', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        });
        $('#j_118 [name="mobilebutton50"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('howhowhow1', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_115").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_115_beforeshow();
    });
    if (runBeforeShow) {
        j_115_beforeshow();
    } else {
        j_115_onLoad();
    }
}
$("#j_115").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_115_js();
});