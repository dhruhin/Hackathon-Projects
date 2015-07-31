/*
 * JS for whowhowho generated by Tiggzi
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
j_163_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel16': 'j_167',
        'mobilelabel21': 'j_168',
        'mobiletextinput11': 'j_169',
        'mobilelabel28': 'j_170',
        'mobiletoggle4': 'j_171',
        'mobilespacer10': 'j_172',
        'mobilegrid4': 'j_173',
        'mobilegridcell34': 'j_174',
        'mobilebutton19': 'j_175',
        'mobilegridcell35': 'j_176',
        'mobilebutton24': 'j_177',
        'mobilegridcell64': 'j_178',
        'mobilebutton16': 'j_179'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_163';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_163_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_163';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_30E1_onLoad = j_163_onLoad = function() {
        screen_30E1_elementsExtraJS();
        j_163_windowEvents();
        screen_30E1_elementsEvents();
    }
    // screen window events
    screen_30E1_windowEvents = j_163_windowEvents = function() {
        $('#j_163').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_30E1_elementsExtraJS = j_163_elementsExtraJS = function() {
        // screen (screen-30E1) extra code
        /* mobiletoggle4 */
        $("#j_171").parent().find("a.ui-slider-handle").attr("tabindex", "1");
        $("#j_171").val("on").slider('refresh');
    }
    // screen elements handler
    screen_30E1_elementsEvents = j_163_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_166 [name="mobiletextinput11"]').die().live({
            input: function() {
                setVar_('emails', 'j_169', 'text', '', this);
            },
        });
        $('#j_166 [name="mobilebutton19"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('whenwhenwhen', {
                        transition: 'fade',
                        reverse: false
                    });
                }
            },
        });
        $('#j_166 [name="mobilebutton24"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Home', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        });
        $('#j_166 [name="mobilebutton16"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('FinishedCreating', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_163").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_163_beforeshow();
    });
    if (runBeforeShow) {
        j_163_beforeshow();
    } else {
        j_163_onLoad();
    }
}
$("#j_163").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_163_js();
});