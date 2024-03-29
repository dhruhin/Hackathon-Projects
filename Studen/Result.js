/*
 * JS for Result generated by Tiggzi
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
j_137_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton3': 'j_141'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_137';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    _getToken = new Tiggr.DataSource(GetToken, {
        'onComplete': function(jqXHR, textStatus) {
            var vars = jqXHR.responseText.split("&");
            var access_token = vars[0].split("=")[1];
            localStorage.setItem('access_token', access_token);
            $t.refreshScreenFormElements("j_137");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['client_id'],
            'ATTR': '115291361945505'
        }, {
            'PATH': ['redirect_uri'],
            'ATTR': 'http://tiggzi.com/view/46d01e13-5e39-4d93-81d0-c3d4c5617e10/mob-Result.html'
        }, {
            'PATH': ['client_secret'],
            'ATTR': '4ddf9347fe888fb7d6a92deb0c3ba47f'
        }, {
            'PATH': ['code'],
            'ID': '___local_storage___',
            'ATTR': 'code'
        }]
    });
    datasources.push(_getToken);
    _getData = new Tiggr.DataSource(GetData, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_137");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['access_token'],
            'ID': '___local_storage___',
            'ATTR': 'access_token'
        }]
    });
    datasources.push(_getData);
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_137_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_137';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_18D5_onLoad = j_137_onLoad = function() {
        screen_18D5_elementsExtraJS();
        try {
            _getData.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };
        j_137_windowEvents();
        screen_18D5_elementsEvents();
    }
    // screen window events
    screen_18D5_windowEvents = j_137_windowEvents = function() {
        $('#j_137').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_18D5_elementsExtraJS = j_137_elementsExtraJS = function() {
        // screen (screen-18D5) extra code
    }
    // screen elements handler
    screen_18D5_elementsEvents = j_137_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
    }
    $("#j_137").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_137_beforeshow();
    });
    if (runBeforeShow) {
        j_137_beforeshow();
    } else {
        j_137_onLoad();
    }
}
$("#j_137").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_137_js();
});