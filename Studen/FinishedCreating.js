/*
 * JS for FinishedCreating generated by Tiggzi
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
j_37_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel28': 'j_41',
        'mobilespacer16': 'j_42',
        'mobilegrid9': 'j_43',
        'mobilegridcell49': 'j_44',
        'mobilelabel29': 'j_45',
        'mobilegridcell50': 'j_46',
        'mobilelabel30': 'j_47',
        'mobilegridcell51': 'j_48',
        'mobilelabel31': 'j_49',
        'mobilegridcell52': 'j_50',
        'mobilelabel35': 'j_51',
        'mobilegridcell53': 'j_52',
        'mobilelabel33': 'j_53',
        'mobilegridcell54': 'j_54',
        'mobilelabel36': 'j_55',
        'mobilegridcell55': 'j_56',
        'mobilelabel32': 'j_57',
        'mobilegridcell56': 'j_58',
        'mobilelabel37': 'j_59',
        'mobilegridcell57': 'j_60',
        'mobilelabel34': 'j_61',
        'mobilegridcell58': 'j_62',
        'mobilelabel38': 'j_63',
        'mobilegridcell59': 'j_64',
        'mobilelabel39': 'j_65',
        'mobilegridcell60': 'j_66',
        'mobilelabel40': 'j_67',
        'mobilegridcell61': 'j_68',
        'mobilelabel41': 'j_69',
        'mobilegridcell62': 'j_70',
        'mobilelabel42': 'j_71',
        'mobilegridcell63': 'j_72',
        'mobilelabel43': 'j_73',
        'mobilegridcell64': 'j_74',
        'mobilelabel46': 'j_75',
        'mobilegridcell67': 'j_76',
        'mobilelabel50': 'j_77',
        'mobilegridcell68': 'j_78',
        'mobilelabel51': 'j_79',
        'mobilegridcell69': 'j_80',
        'mobilelabel52': 'j_81',
        'mobilegridcell70': 'j_82',
        'mobilelabel53': 'j_83',
        'mobilegridcell173': 'j_84',
        'mobilespacer19': 'j_85',
        'mobilebutton38': 'j_86',
        'mobilegridcell174': 'j_87',
        'mobilespacer20': 'j_88',
        'mobilebutton39': 'j_89',
        'mobilebutton36': 'j_90'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_37';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    restservice10 = new Tiggr.DataSource(RESTService, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_37");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['emails'],
            'ID': '___local_storage___',
            'ATTR': 'emails'
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
            'ID': '___local_storage___',
            'ATTR': 'date'
        }, {
            'PATH': ['start_time'],
            'ID': '___local_storage___',
            'ATTR': 'start'
        }, {
            'PATH': ['location'],
            'ID': '___local_storage___',
            'ATTR': 'location'
        }, {
            'PATH': ['goal'],
            'ID': '___local_storage___',
            'ATTR': 'goal'
        }, {
            'PATH': ['resources_needed'],
            'ID': '___local_storage___',
            'ATTR': 'needs'
        }, {
            'PATH': ['resources_available'],
            'ID': '___local_storage___',
            'ATTR': 'available'
        }, {
            'PATH': ['agenda'],
            'ATTR': 'will do 1 ch each 30 minute period'
        }]
    });
    datasources.push(restservice10);
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_37_beforeshow = function() {
        Tiggzi.CurrentScreen = 'j_37';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_ECAE_onLoad = j_37_onLoad = function() {
        screen_ECAE_elementsExtraJS();
        setText('j_41', localStorage.getItem('title'));
        setText('j_47', localStorage.getItem('subject'));
        setText('j_51', localStorage.getItem('description'));
        setText('j_55', localStorage.getItem('goal'));
        setText('j_59', localStorage.getItem('needs'));
        setText('j_63', localStorage.getItem('available'));
        setText('j_67', localStorage.getItem('schedule'));
        setText('j_71', localStorage.getItem('date'));
        setText('j_75', localStorage.getItem('start'));
        setText('j_79', localStorage.getItem('location'));
        setText('j_83', localStorage.getItem('emails'));
        j_37_windowEvents();
        screen_ECAE_elementsEvents();
    }
    // screen window events
    screen_ECAE_windowEvents = j_37_windowEvents = function() {
        $('#j_37').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_ECAE_elementsExtraJS = j_37_elementsExtraJS = function() {
        // screen (screen-ECAE) extra code
    }
    // screen elements handler
    screen_ECAE_elementsEvents = j_37_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_40 [name="mobilebutton38"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('whowhowho', {
                        transition: 'fade',
                        reverse: false
                    });
                }
            },
        });
        $('#j_40 [name="mobilebutton39"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Home', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        });
        $('#j_40 [name="mobilebutton36"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    try {
                        restservice10.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                    Tiggr.navigateTo('Home', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_37").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_37_beforeshow();
    });
    if (runBeforeShow) {
        j_37_beforeshow();
    } else {
        j_37_onLoad();
    }
}
$("#j_37").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_37_js();
});