# com-chilipeppr-elem-flashmsg
This element shows a flash message at the top of the browser.

![alt text](screenshot.png "Screenshot")

## ChiliPeppr Element / Flash Messsage

All ChiliPeppr widgets/elements are defined using cpdefine() which is a method
that mimics require.js. Each defined object must have a unique ID so it does
not conflict with other ChiliPeppr widgets.

| Item                  | Value           |
| -------------         | ------------- | 
| ID                    | com-chilipeppr-elem-flashmsg |
| Name                  | Element / Flash Messsage |
| Description           | This element shows a flash message at the top of the browser. |
| chilipeppr.load() URL | http://raw.githubusercontent.com/rixnco/element-flash/master/auto-generated-widget.html |
| Edit URL              | http://ide.c9.io/undefined/undefined |
| Github URL            | http://github.com/rixnco/element-flash |
| Test URL              | https://preview.c9users.io/undefined/undefined/widget.html |

## Example Code for chilipeppr.load() Statement

You can use the code below as a starting point for instantiating this widget 
inside a workspace or from another widget. The key is that you need to load 
your widget inlined into a div so the DOM can parse your HTML, CSS, and 
Javascript. Then you use cprequire() to find your widget's Javascript and get 
back the instance of it.

```javascript
// Inject new div to contain widget or use an existing div with an ID
$("body").append('<' + 'div id="myDivElemFlashmsg"><' + '/div>');

chilipeppr.load(
  "#myDivElemFlashmsg",
  "http://raw.githubusercontent.com/rixnco/element-flash/master/auto-generated-widget.html",
  function() {
    // Callback after widget loaded into #myDivElemFlashmsg
    // Now use require.js to get reference to instantiated widget
    cprequire(
      ["inline:com-chilipeppr-elem-flashmsg"], // the id you gave your widget
      function(myObjElemFlashmsg) {
        // Callback that is passed reference to the newly loaded widget
        console.log("Element / Flash Messsage just got loaded.", myObjElemFlashmsg);
        myObjElemFlashmsg.init();
      }
    );
  }
);

```

## Publish

This widget/element publishes the following signals. These signals are owned by this widget/element and are published to all objects inside the ChiliPeppr environment that listen to them via the 
chilipeppr.subscribe(signal, callback) method. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-pub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Subscribe

This widget/element subscribes to the following signals. These signals are owned by this widget/element. Other objects inside the ChiliPeppr environment can publish to these signals via the chilipeppr.publish(signal, data) method. 
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-sub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Publish

This widget/element publishes to the following signals that are owned by other objects. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignpub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Subscribe

This widget/element publishes to the following signals that are owned by other objects.
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignsub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Methods / Properties

The table below shows, in order, the methods and properties inside the widget/element.

  <table id="com-chilipeppr-elem-methodsprops" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Method / Property</th>
              <th>Type</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>id</td><td>string</td><td>"com-chilipeppr-elem-flashmsg"</td></tr><tr valign="top"><td>url</td><td>string</td><td>"http://fiddle.jshell.net/jlauer/qp7Em/show/light/"</td></tr><tr valign="top"><td>fiddleurl</td><td>string</td><td>"http://jsfiddle.net/jlauer/qp7Em/"</td></tr><tr valign="top"><td>name</td><td>string</td><td>"Element / Flash Messsage"</td></tr><tr valign="top"><td>desc</td><td>string</td><td>"This element shows a flash message at the top of the browser."</td></tr><tr valign="top"><td>publish</td><td>object</td><td>Please see docs above.</td></tr><tr valign="top"><td>subscribe</td><td>string</td><td>"/com-chilipeppr-elem-flashmsg/flashmsg"</td></tr><tr valign="top"><td>queue</td><td>object</td><td></td></tr><tr valign="top"><td>init</td><td>function</td><td>function () </td></tr><tr valign="top"><td>showQueue</td><td>function</td><td>function(title, body, delay, allowImmediateDismiss) </td></tr><tr valign="top"><td>isShowing</td><td>boolean</td><td></td></tr><tr valign="top"><td>allowImmediateDismiss</td><td>boolean</td><td></td></tr><tr valign="top"><td>title</td><td>object</td><td></td></tr><tr valign="top"><td>body</td><td>object</td><td></td></tr><tr valign="top"><td>delay</td><td>object</td><td></td></tr><tr valign="top"><td>playNext</td><td>function</td><td>function() </td></tr><tr valign="top"><td>timeoutPtr</td><td>object</td><td></td></tr><tr valign="top"><td>show</td><td>function</td><td>function (title, body, delay, allowImmediateDismiss) </td></tr><tr valign="top"><td>hide</td><td>function</td><td>function () </td></tr>
      </tbody>
  </table>


## About ChiliPeppr

[ChiliPeppr](http://chilipeppr.com) is a hardware fiddle, meaning it is a 
website that lets you easily
create a workspace to fiddle with your hardware from software. ChiliPeppr provides
a [Serial Port JSON Server](https://github.com/johnlauer/serial-port-json-server) 
that you run locally on your computer, or remotely on another computer, to connect to 
the serial port of your hardware like an Arduino or other microcontroller.

You then create a workspace at ChiliPeppr.com that connects to your hardware 
by starting from scratch or forking somebody else's
workspace that is close to what you are after. Then you write widgets in
Javascript that interact with your hardware by forking the base template 
widget or forking another widget that
is similar to what you are trying to build.

ChiliPeppr is massively capable such that the workspaces for 
[TinyG](http://chilipeppr.com/tinyg) and [Grbl](http://chilipeppr.com/grbl) CNC 
controllers have become full-fledged CNC machine management software used by
tens of thousands.

ChiliPeppr has inspired many people in the hardware/software world to use the
browser and Javascript as the foundation for interacting with hardware. The
Arduino team in Italy caught wind of ChiliPeppr and now
ChiliPeppr's Serial Port JSON Server is the basis for the 
[Arduino's new web IDE](https://create.arduino.cc/). If the Arduino team is excited about building on top
of ChiliPeppr, what
will you build on top of it?

