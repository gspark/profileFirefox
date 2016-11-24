// ==UserScript==
/* :::::::: LaunchIE (cf. IE View) ::::::::::::::: */
// @description    用IE查看
// ==/UserScript==
var LaunchIE = {
	mSchemes: ["file", "ftp", "http", "https"],

	init: function()
	{
		this.mItem = document.createElement("menuitem");
		this.mItem.setAttribute("label", "\u7528IE\u67E5\u770B");
		this.mItem.setAttribute("accesskey", "E");
		this.mItem.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADmklEQVQ4jYWSa0ybZRiGn0idMVG3iW5BKAWpU7vROaZ4QA0LmVmMP1gWnJqIc1HjAA3g1pYh3ZeVzcEIrJAtQcjEloM0Qfw+oOsJCoy14yjjMBntSzdaGNBSaCmDVnwf/5EZf+z6fyV3rtwAjyCpiH3aowtP9F3fnhkkz0yt9m4J+IwQ8ulhYqkNBP83khleTJ4+dW9h+y9fqzR3zAPpa/MT4mDg+jb0G3lrXi6sfKYcji/UQqZbDRP/cXdmaWJFivb2o413pitHZh845nJpyLUNF37bTlvqvlrPr7l6P/6srgiSGR4AwMwVcG/KEZlNgt2KjjGJxR00zdqof/EgUgLoaDiA3C0znhldxk+MLrqv1DIfm996DdLSwlyX4dfN2a+eNZlP9syH+hYGMbgoRmoF7ClN+vvj6pvO95U3SWrDXw7J4HLoi/Y5urekZ0mQ19pGlJACAAAxedrUI7VjTpNrlAY9IqSdgP1lby1eMpk+QtQ+EZ6jiYzL138vYgy2Y1pH6FAToaJCgy0i5/dDAAAQr9DXXB0eWw0svoO0F3CybM8comkXYuXjDzfaX2RVplT2k8+Nsygu7pyLknBVAADwYUXn+PTsN5Q6AG81foafqoaouNA89TJjIrsYI3npjJEI5QYivtDlzGh30W+73Cgus67yZawVAAC4gZIVOvMk3qtOwCvjLrxAQvgTCeF5EsLz9hCes4ew0BZExeQ6ykcCeKLbjXvKbqxHS9khQL/ovYBLsLFUt5VW3Hbhj2MBmlhqmRfKDUQo1xOhXE/iCq6R2HwtiTndSqJlrSRa1kL4UtYeeaq5Ev5xP3txrR+wXp0bzB9ZwYwet/+NEqvpUQ/dZMMO1jn1Fl+6yuI63HKXfnfDs3G48bZnt6Kj/rnspgRIZniQoXnq+WzNa1FSri5Kxtr4UpZEStjJyFPNx8DfBT4vF3Y5nmnr2q+0rKab7uMPg/6N44ZpX2JZt0OQ10qEBVp7QnGH/Uudcym7z0/TOEeQL+V6IZnhwbIOvAAAO0+qdrx4umX0zXJLIJW7S09YvJjT78PcwRXMHvBhhtWLR3VOelA1/CCuQDsRnlX/CgAA+AygXlCDFAAgScK88La8qjv+nIEkXupxv1s9FEyuHacpNcOBA1V9ntcvdk7xZZx+a5YmdrOBWwcR7gYwu5SA94rBPlUEtftkPx+JkvxRFS1l/+RLWTtfyuqiJGzFjpzmDwCYxx5u+C/9UQMactxGcwAAAABJRU5ErkJggg==");
		document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", function() { LaunchIE.onPopupShowing(this); }, false);
	},

	onPopupShowing: function(aPopup)
	{
		aPopup.insertBefore(this.mItem, document.getElementById("context-sep-" + ((gContextMenu.onLink)?"open":"stop")));
		this.mItem.setAttribute("oncommand", "LaunchIE.launch(" + ((gContextMenu.onLink)?"gContextMenu.linkURI":"gBrowser.currentURI") + ");");
		this.mItem.hidden = !gContextMenu.onLink && (gContextMenu.isTextSelected || gContextMenu.onImage || gContextMenu.onTextInput);
		this.mItem.setAttribute("disabled", this.mItem.hidden || !this.isSupported((gContextMenu.onLink)?gContextMenu.linkURI:gBrowser.currentURI));
	},

	launch: function(aURI, aApp)
	{
		if (!this.isSupported(aURI))
		{
			throw new Error("LaunchIE: unsupported URI scheme '" + aURI.scheme + "'!");
		}
		
		var iexplore = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
		try
		{
			var regkey = Components.classes["@mozilla.org/windows-registry-key;1"].createInstance(Components.interfaces.nsIWindowsRegKey);
			regkey.open(Components.interfaces.nsIWindowsRegKey.ROOT_KEY_LOCAL_MACHINE, "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\" + (aApp || "IEXPLORE.EXE"), Components.interfaces.nsIWindowsRegKey.ACCESS_READ);
			iexplore.initWithPath(regkey.readStringValue(""));
			regkey.close();
		}
		catch (ex)
		{
			iexplore.initWithPath((Components.classes["@mozilla.org/process/environment;1"].getService(Components.interfaces.nsIEnvironment).get("PROGRAMFILES") || "C:\\Program Files") + "\\Internet Explorer\\iexplore.exe");
		}
		
		var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		process.init(iexplore);
		process.run(false, [aURI.spec], 1);
	},

	isSupported: function(aURI)
	{
		return this.mSchemes.indexOf(aURI.scheme) > -1;
	}
};

LaunchIE.init();
