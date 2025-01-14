
cpdefine("inline:com-chilipeppr-elem-flashmsg", ["chilipeppr_ready"], function () {
    //console.log("Inside of define for com-chilipeppr-elem-flashmsg");
    return {
        id: "com-chilipeppr-elem-flashmsg",
        url: "http://raw.githubusercontent.com/rixnco/element-flash/master/auto-generated-widget.html",
        fiddleurl: "http://jsfiddle.net/jlauer/qp7Em/",
        name: "Element / Flash Messsage",
        desc: "This element shows a flash message at the top of the browser.",
        publish: null,
        subscribe: "/com-chilipeppr-elem-flashmsg/flashmsg",
        queue: [],
        init: function () {
            console.log("flashmsg - init called");
            chilipeppr.subscribe(this.subscribe, this, this.showQueue.bind(this));
        },
        showQueue: function(title, body, delay, allowImmediateDismiss) {
            
            //debugger;
            console.log("flashmsg - just got a showQueue(). title:", title, "body:", body, "delay:", delay, "allowImmediateDismiss:", allowImmediateDismiss);
            
            // queue it
            this.queue.push({title: title, body: body, delay: delay, allowImmediateDismiss: allowImmediateDismiss});
            //console.log("just queued a flash msg. queue:", this.queue.length);
            
            this.playNext();
            
            /*
            if (this.isShowing) {
                // queue it
                
                // however, if the current flash msg is allowImmediateDismiss 
                // the dismiss it and immediately go to next queue item
                
                
                //console.log("msg showing. so queueing");
                this.queue.push({title: title, body: body, delay: delay, allowImmediateDismiss: allowImmediateDismiss});
            } else {
                // show immediately
                this.show.apply(this, arguments);
            }
            */
            
        },
        isShowing: false,
        allowImmediateDismiss: false,
        title: null,
        body: null,
        delay: null,
        playNext: function() {
            console.log("flashmsg - playNext(). queue:", this.queue.length);
            
            if (this.isShowing) {
                
                // see if dialog showing can get immediate cancel
                if (this.allowImmediateDismiss) {
                    //console.log("dialog is showing, but it allows immediate dismiss so we'll cancel it's timeout and hide it immediately().");
                    // we can cancel this dialog immediately
                    console.log("flashmsg - doing clearTimeout() on ptr:", this.timeoutPtr);
                    clearTimeout(this.timeoutPtr);
                    // now call the equivalent of the setTimeout immediately
                    // this also saves on stack
                    //setTimeout(this.hide.bind(this), 0);
                    this.hide();
                } else {
                    //console.log("dialog is showing, so exiting cuz when it hides it will call playNext().");
                    return;
                }
            }
            
            if (this.queue.length > 0) {
                // there's a msg in the queue. show it.
                var msg = this.queue.shift();
                
                // now see if there's a msg after this item
                // and if this item is immediately dismissable
                // cuz if it is, skip showing it cuz there are other
                // more important msgs to show
                if (this.queue.length > 0 && msg.allowImmediateDismiss) {
                    
                    // just dump this msg
                    console.log("flashmsg - dumping this msg:", msg);
                    
                    // dump the rest of the messages too if they are
                    // allowImmediateDismiss
                    while(this.queue.length > 0) {
                        msg = this.queue.shift();
                        if (msg.allowImmediateDismiss) {
                            // see if there is another msg, if there is
                            // dump this one (i.e. move to next loop
                            if (this.queue.length > 0) {
                                // there's another msg, so dump this one
                                console.log("flashmsg - dumping this msg:", msg);
                            } else {
                                // there's nothing else in queue, so we could
                                // show this
                                // since we're showing, we need to break the while
                                // loop
                                this.show(msg.title, msg.body, msg.delay, msg.allowImmediateDismiss);
                                console.log("flashmsg - breaking while loop");
                                break;
                            }
                            
                        } else {
                            // we have a real msg. show it and exit while
                            // cuz when this msg hides() the next queue item
                            // will get triggered
                            this.show(msg.title, msg.body, msg.delay, msg.allowImmediateDismiss);
                            console.log("flashmsg - breaking while loop");
                            break;
                        }
                    }

                } else {
                    console.log("flashmsg - showing this msg:", msg);
                    this.show(msg.title, msg.body, msg.delay, msg.allowImmediateDismiss);
                }
                
                // call ourself, but without stack
                //setTimeout(this.playNext.bind(this), 0);
            }
        },
        timeoutPtr: null, // pointer to cancel a timeout if needed
        show: function (title, body, delay, allowImmediateDismiss) {
            console.log("flashmsg - show(). title:", title, "body:", body, "delay:", delay, "allowImmediateDismiss:", allowImmediateDismiss);
            this.isShowing = true;
            this.allowImmediateDismiss = allowImmediateDismiss ? true : false;
            this.title = title;
            this.body = body;
            this.delay = 3000;
            if (delay) this.delay = delay;
            if (arguments.length == 1) {
                // they just want a body
                this.title = "";
                this.body = title;
            }
            $(".com-chilipeppr-elem-flashmsg").popover({
                animation: false,
                trigger: 'manual',
                title: this.title,
                content: this.body,
                container: ".com-chilipeppr-elem-flashmsg",
                delay: 0,
                html: true
            });
            $(".com-chilipeppr-elem-flashmsg").popover('show');
            //console.log(this);
            //console.log(this.delay);
            var that = this;
            this.timeoutPtr = setTimeout(function(){that.hide.apply(that,null)}, this.delay);
        },
        hide: function () {
            console.log("flashmsg - hiding flash msg");
            $(".com-chilipeppr-elem-flashmsg").popover('destroy');
            this.isShowing = false;
            //console.log(this);
            //console.log(this.queue);
            this.playNext();
        }
    };
});

// Test this element. This code is auto-removed by the chilipeppr.load()
cprequire_test(["inline:com-chilipeppr-elem-flashmsg"], function (fm) {
    console.log("test running of " + fm.id);
    //$("body").height("100%");
    //$("body").width("100%");
    $("body").css("background-color", "#eeeeee");
    //$(".com-chilipeppr-elem-flashmsg").height("200px");
    //$(".com-chilipeppr-elem-flashmsg").width("200px");
    fm.init();
    chilipeppr.publish(fm.subscribe, "title from pub no dismiss", "body from pub", 2000, true);
    chilipeppr.publish(fm.subscribe, "title2 from pub allow dismiss", "body2 from pub<br/>next line<br/>3rd line", 2000, true);
    chilipeppr.publish(fm.subscribe, "title3 from pub", "body3 from pub", 2000, true);
    chilipeppr.publish(fm.subscribe, "title4 from pub", "body4 from pub<br/>next line<br/>3rd line", 6000, true);
    //chilipeppr.publish(fm.subscribe, "", "body3 from pub");
    
    setTimeout(function () {
        chilipeppr.publish(fm.subscribe, "", "bodyXX from pub");
    }, 3000);

    //fm.show("hey there");
    /*
    setTimeout(function () {
        fm.hide();
        setTimeout(function () {
            fm.show("this is cool", "this is body");
        }, 1000);
    }, 1000);
    */

    //$(".com-chilipeppr-elem-flashmsg").popover('show');
    //console.log(fm);

} /*end_test*/ );
