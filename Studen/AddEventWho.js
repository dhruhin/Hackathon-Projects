/*
 * JS for AddEventWho generated by Tiggzi
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
j_146_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel13': 'j_150',
        'mobilelabel14': 'j_151',
        'mobiletextinput16': 'j_152',
        'mobilelabel12': 'j_153',
        'mobiletoggle2': 'j_154',
        'mobilebutton8': 'j_155',
        'mobilebutton6': 'j_156',
        'mobilebutton7': 'j_157',
        'mobilebutton36': 'j_158',
        'mobilebutton38': 'j_159',
        'mobilebutton40': 'j_160'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_146';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_146_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_146';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_FD8D_onLoad = j_146_onLoad = function() {
        screen_FD8D_elementsExtraJS();
        j_146_windowEvents();
        screen_FD8D_elementsEvents();
    }
    // screen window events
    screen_FD8D_windowEvents = j_146_windowEvents = function() {
        $('#j_146').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#j_146').bind({
            swiperight: function() {
                Tiggr.navigateTo('AddEventHow', {
                    transition: 'slide',
                    reverse: false
                });
            },
        });
    }
    // screen elements extra js
    screen_FD8D_elementsExtraJS = j_146_elementsExtraJS = function() {
        // screen (screen-FD8D) extra code
        /* mobiletoggle2 */
        $("#j_154").parent().find("a.ui-slider-handle").attr("tabindex", "1");
        $("#j_154").val("on").slider('refresh');
    }
    // screen elements handler
    screen_FD8D_elementsEvents = j_146_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_149 [name="mobiletextinput16"]').die().live({
            input: function() {
                setVar_('emails', 'j_152', 'text', '', this);
            },
        });
        $('#j_149 [name="mobilebutton36"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('AddEventWhen', {
                        reverse: false
                    });
                }
            },
        });
        $('#j_149 [name="mobilebutton38"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Home', {
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_146").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_146_beforeshow();
    });
    if (runBeforeShow) {
        j_146_beforeshow();
    } else {
        j_146_onLoad();
    }
}
$("#j_146").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_146_js();
});