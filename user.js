// pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
// user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

//*=选项卡里的设置=*//
user_pref("browser.shell.checkDefaultBrowser", false);//启动时检查是否为默认浏览器
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("privacy.donottrackheader.enabled", true);//告诉网站不想被追踪

//*=缓存=*//
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 38400);
user_pref("browser.cache.disk.parent_directory", "Z:\\TEMP\\Firefox");

//*=硬件加速=*//
user_pref("layers.acceleration.disabled", true);//可用时开启硬件加速
user_pref("layers.acceleration.force-enabled", false);//强制启用硬件渲染（无视黑名单/白名单），最重要的设置！
user_pref("gfx.direct2d.disabled", true);//禁用字体硬件加速，开启后标题会模糊，字体显示不一致
// user_pref("gfx.font_rendering.cleartype.always_use_for_content", true);
// user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
// user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
// user_pref("gfx.font_rendering.cleartype_params.gamma", 1400);
// user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);
// user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
// user_pref("gfx.font_rendering.fallback.always_use_cmaps", true);
// user_pref("gfx.use_text_smoothing_setting", true);

//*=语言、字体设置=*//
user_pref("general.useragent.locale", "zh-CN");
user_pref("font.language.group", "zh-CN");
// user_pref("font.name.monospace.zh-CN", "SimSun-ExtB");
user_pref("font.name.sans-serif.zh-CN", "Microsoft YaHei UI");
// user_pref("font.name.serif.zh-CN", "SimSun-ExtB");
user_pref("font.language.group", "zh-CN");
user_pref("font.size.variable.zh-CN", 18);
user_pref("font.minimum-size.zh-CN", 12);
user_pref("layout.spellcheckDefault", 0);//拼写检查
user_pref("intl.charset.default", "UTF-8");

//*=杂项=*//
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("middlemouse.paste", true);//中键粘贴剪贴板文本
user_pref("general.warnOnAboutConfig", false);//关闭AboutConfig警告
user_pref("browser.xul.error_pages.expert_bad_cert", true);//自动展开：此连接是不受信任的
user_pref("extensions.getAddons.cache.enabled", false); //扩展页面扩展不下载自动推荐内容
user_pref("media.peerconnection.enabled", false);//关闭WebRTC，因为webrtc的漏洞可以获取真实ip（FQ时不安全）
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("browser.urlbar.maxRichResults", 18);
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁用Firefox的thumbnails
user_pref("browser.zoom.full", false);//仅缩放文本
// user_pref("browser.sessionhistory.max_entries",32);
// user_pref("browser.history.maxStateObjectSize",65536);
// user_pref("places.history.expiration.transient_current_max_pages",10240);
// user_pref("places.history.expiration.max_pages", 5120);

//*=火狐启动=*//
user_pref("toolkit.telemetry.rejected", true); //禁用帮助改进firefox 弹窗
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("extensions.checkCompatibility", false); // 不根据版本检测扩展兼容性
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.startup.homepage", "about:newtab");
// 开启 Electrolysis e10s
user_pref("browser.tabs.remote.force-enable", true);
user_pref("dom.ipc.processCount", 4);

// 打开上次页面
user_pref("browser.startup.page", 3);

// user_pref("browser.displayedE10SNotice", 4); //与鼠标拖拽冲突
// user_pref("browser.displayedE10SPrompt.1", 5); // 多进程
// user_pref("browser.requestE10sFeedback", false); // 多进程反馈

//*=服务=*//
user_pref("loop.enabled", false);//开启Firefox Hello通讯功能？默认true
user_pref("browser.pocket.enabled", false);//pocket服务？
user_pref("browser.pocket.enabledLocales", "en-US de es-ES ja ja-JP-mac ru zh-CN");
user_pref("reader.parse-on-load.enabled", true);//开启阅读模式？默认false；FF38+
user_pref("reader.parse-on-load.force-enabled", true);
user_pref("reader.font_size", 3);

//*=书签=*//
user_pref("browser.bookmarks.max_backups", 1);//书签备份数
user_pref("browser.bookmarks.autoExportHTML", true);//书签生成html

//*=搜索=*//
user_pref("browser.search.defaultenginename", "Google");
user_pref("browser.search.hiddenOneOffs", "百度,DuckDuckGo,维基百科,亚马逊");
user_pref("browser.search.openintab", true);
user_pref("browser.search.redirectWindowsSearch", false);
// user_pref("browser.search.update", false);

//*=应答时间=*//
user_pref("security.dialog_enable_delay", 0); //扩展安装等待时间
user_pref("browser.urlbar.delay",0);//"自动补全"的延迟时间0

//*=标签页=*//
// user_pref("browser.showQuitWarning", true);
// user_pref("browser.warnOnQuit", true);
user_pref("browser.showQuitWarning", false);
user_pref("browser.warnOnQuit", false);
user_pref("browser.sessionstore.max_tabs_undo", 20);//最近撤销标签历史最大数
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.showSingleWindowModePrefs", true);

//*=动画=*//
user_pref("browser.tabs.animate", false);//标签滑动动画
user_pref("browser.download.animateNotifications", false);
user_pref("browser.panorama.animate_zoom",false);//标签页组 Panorama
user_pref("browser.fullscreen.animateUp",0);//关闭全屏时工具栏隐藏显示动画？

//*=平滑滚动参数=*//
user_pref("mousewheel.min_line_scroll_amount", 35);//一次滚动的幅度
user_pref("general.smoothScroll.durationToIntervalRatio",670);//默认200配合上一条670
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 500);
user_pref("mousewheel.acceleration.factor", 16);
user_pref("mousewheel.acceleration.start", 3);
user_pref("mousewheel.default.delta_multiplier_y", 160);

//*=下载=*//
user_pref("browser.download.useDownloadDir",false);//使用默认下载路径？总是询问下载位置
user_pref("browser.download.lastDir.savePerSite",true);
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*=插件相关=*//
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//直接用火狐禁用flash保护模式
user_pref("dom.ipc.plugins.enabled", false);
//*=插件相关=*/

//*=关闭自动更新类=*//
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("browser.search.update", false);
user_pref("app.update.disable_button.showUpdateHistory", false);
user_pref("lightweightThemes.update.enabled", false); //后台定期自动更新轻量主题建议，不使用轻量主题的朋友可以关闭。

//*=隐私相关=*//
user_pref("browser.polaris.enabled",false);//彻底关闭Tracking protection 跟踪保护
user_pref("privacy.trackingprotection.pbmode.enabled",false);//彻底关闭Tracking protection 跟踪保护
// user_pref("privacy.trackingprotection.pbmode.enabled", "true");//开启隐私模式下的跟踪保护
user_pref("browser.selfsupport.url","");//禁止心跳评价系统
user_pref("browser.search.geoip.url","");//禁止Firefox 地理位置服务
user_pref("geo.wifi.uri","");//禁止Firefox 地理位置服务
user_pref("browser.send_pings",false);//禁止Hyperlink Auditing/Beacon: Hyperlink Auditing 就是 ping 服务，Firefox 会把你点击过的链接及其时间发回给服务器，Hyperlink Beacon 是使用 navigator.sendBeacon()在你离开一个页面时将一些数据回传给服务器
user_pref("beacon.enabled",false);//禁止Hyperlink Auditing/Beacon
user_pref("browser.newtabpage.directory.ping", "");//禁止新标签页面的建议磁贴和增强磁贴

//关闭安全检测健康中心类
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", true);
user_pref("datareporting.healthreport.uploadEnabled", false);

//*=将 inoreader 添加为收取点=*//
// user_pref("browser.contentHandlers.types.0.uri", "http://www.inoreader.com/?add_feed=%s");
// user_pref("browser.contentHandlers.types.0.type", "application/vnd.mozilla.maybe.feed");
// user_pref("browser.contentHandlers.types.0.title", "Inoreader");

//*=将 Outlook 添加为 mailto 链接=*//
// user_pref("gecko.handlerService.schemes.mailto.4.name", "Outlook");
// user_pref("gecko.handlerService.schemes.mailto.4.uriTemplate", "https://mail.live.com/secure/start?action=compose&to=%s");

//*=将 Outlook 添加为分享服务=*//
// user_pref("social.manifest.outlook.com", "{\"author\":\"Outlook\",\"description\":\"Quickly send web pages to yourself and others with enhanced link previews and more.\",\"homepageURL\":\"http://mail.live.com\",\"icon32URL\":\"https://a.gfx.ms/OLFav.ico\",\"icon64URL\":\"https://a.gfx.ms/OLFav.ico\",\"iconURL\":\"https://a.gfx.ms/OLFav.ico\",\"name\":\"Outlook\",\"origin\":\"https://mail.live.com\",\"pageSize\":{\"share\":{\"height\":500,\"width\":500}},\"shareURL\":\"https://mail.live.com/secure/start?action=compose&SUBJECT=%{title}&BODY=%{body}\",\"version\":\"1.0\",\"postActivationURL\":\"https://activations.cdn.mozilla.net/en-US/activated/outlook.html\",\"updateDate\":1435929771924,\"installDate\":1435929771924}");

//*=固定标签页=*//
user_pref("browser.newtabpage.pinned", "[{\"url\":\"http://www.zhihu.com/explore\",\"title\":\"知乎\"},{\"url\":\"http://www.douban.com/\",\"title\":\"豆瓣\"},{\"url\":\"http://www.quora.com/\",\"title\":\"Quora\"},{\"url\":\"http://www.inoreader.com/\",\"title\":\"Inoreader\"},{\"url\":\"http://36kr.com/\",\"title\":\"36氪\"},{\"url\":\"http://www.huxiu.com/\",\"title\":\"虎嗅网\"},{\"url\":\"http://www.guokr.com/\",\"title\":\"果壳网\"},{\"url\":\"http://www.lofter.com/\",\"title\":\"LOFTER\"},{\"url\":\"http://www.luoo.net/\",\"title\":\"落网\"}]");

//*=扩展设置=*//
//foxyproxy
// user_pref("extensions.foxyproxy.autoconfig_url", "");
// user_pref("extensions.foxyproxy.cache.disk.enable", true);
// user_pref("extensions.foxyproxy.cache.disk_cache_ssl", true);
// user_pref("extensions.foxyproxy.cache.memory.enable", true);
// user_pref("extensions.foxyproxy.cache.offline.enable", false);
// user_pref("extensions.foxyproxy.cookieBehavior", 1);
// user_pref("extensions.foxyproxy.firstrun", false);
// user_pref("extensions.foxyproxy.firsttimeopeningoptionsdialog", false);
// user_pref("extensions.foxyproxy.ftp", "");
// user_pref("extensions.foxyproxy.ftp_port", 0);
// user_pref("extensions.foxyproxy.http", "");
// user_pref("extensions.foxyproxy.http_port", 0);
// user_pref("extensions.foxyproxy.last-version", "4.5.4");
// user_pref("extensions.foxyproxy.socks", "");
// user_pref("extensions.foxyproxy.socks_port", 0);
// user_pref("extensions.foxyproxy.socks_remote_dns", true);
// user_pref("extensions.foxyproxy.socks_version", 5);
// user_pref("extensions.foxyproxy.ssl", "");
// user_pref("extensions.foxyproxy.ssl_port", 0);
// user_pref("extensions.foxyproxy.type", 5);
// user_pref("extensions.foxyproxy@eric.h.jung.install-event-fired", true);

//flashgot
user_pref("flashgot.logEnabled", false);
user_pref("flashgot.omitCookies", true);
// user_pref("flashgot.tmpDir", "Z:\\TEMP\\firefox");

//sync
user_pref("services.sync.account", "gaby.steven@gmail.com");
// user_pref("services.sync.client.name", "SUNRISE");
user_pref("services.sync.engine.addons", false);
user_pref("services.sync.engine.greasemonkey", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.prefs.modified", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.migrated", true);
user_pref("services.sync.username", "gaby.steven@gmail.com");

//scrapbook
user_pref("scrapbook.ui.menuBar", false);
user_pref("scrapbook.ui.statusBar", false);
user_pref("scrapbook.ui.toolsMenu", true);
// user_pref("extensions.scrapbook.data.path", "F:\\usually\\Dropbox\\ScrapBook");

//LastPass
// user_pref("extensions.lastpass.hidecontextmenu", true);
// user_pref("extensions.lastpass.showAcctsInSidebar", true);
// user_pref("extensions.lastpass.showHomepageAfterLogin", false);//不登入密码库
// user_pref("extensions.lastpass.rememberUsername", true);  //记住用户名
// user_pref("extensions.lastpass.rememberPassword", true);//记住密码
// user_pref("extensions.lastpass.highlightFields", false);  //高亮

//Pan
user_pref("extensions.pan.customProxy", "[{\"name\":\"GoAgent\",\"host\":\"127.0.0.1\",\"port\":\"8087\",\"type\":\"http\",\"remoteDNS\":1},{\"name\":\"Shadowsocks\",\"host\":\"127.0.0.1\",\"port\":\"10002\",\"type\":\"socks\",\"remoteDNS\":1}]");
user_pref("extensions.pan.defaultProxy", "Shadowsocks");
// user_pref("extensions.pan.frameobjects", false);
// user_pref("extensions.pan.noMatchProxy", "direct");
// user_pref("extensions.pan.whiteListProxy", "direct");

//tabmix
user_pref("extensions.tabmix.appearance.selectedTabIndex", 1);
user_pref("extensions.tabmix.appearance_tab", 1);
user_pref("extensions.tabmix.events.selectedTabIndex", 4);
user_pref("extensions.tabmix.opentabfor.bookmarks", true);
user_pref("extensions.tabmix.opentabfor.history", true);
user_pref("extensions.tabmix.opentabfor.urlbar", true);
user_pref("extensions.tabmix.session.selectedTabIndex", 2);
user_pref("extensions.tabmix.sessions.crashRecovery", false);
user_pref("extensions.tabmix.sessions.manager", false);
user_pref("extensions.tabmix.singleWindow", true);
user_pref("extensions.tabmix.styles.progressMeter", "{\"bg\":true,\"bgColor\":\"rgba(51,255,51,1)\"}");
user_pref("extensions.tabmix.styles.unloadedTab", "{\"italic\":true,\"bold\":false,\"underline\":false,\"text\":false,\"textColor\":\"rgba(204,0,0,1)\",\"bg\":false,\"bgColor\":\"rgba(236,233,216,1)\",\"bgTopColor\":\"rgba(236,233,216,1)\"}");
user_pref("extensions.tabmix.styles.unreadTab", "{\"italic\":true,\"bold\":false,\"underline\":false,\"text\":true,\"textColor\":\"rgba(255,204,102,1)\",\"bg\":false,\"bgColor\":\"rgba(236,233,216,1)\",\"bgTopColor\":\"rgba(236,233,216,1)\"}");
user_pref("extensions.tabmix.tabBarPosition", 1);
user_pref("extensions.tabmix.targetIsFrame", false);
user_pref("extensions.tabmix.progressMeter", false);
user_pref("extensions.tabmix.tabs.closeButtons", 3);
user_pref("extensions.tabmix.opentabforLinks", 2);
user_pref("extensions.tabmix.undoClose", false);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("extensions.tabmix.sessions.crashed", true);
user_pref("extensions.tabmix.undoClosePosition", false);

//livemargins 火狐一键应用
// user_pref("extensions.livemargins@mozillaonline.com.closewithfirefox", false);
// user_pref("extensions.livemargins@mozillaonline.com.ignoreinput", false);
// user_pref("extensions.livemargins@mozillaonline.com.showintentmenu", false);
// user_pref("extensions.livemargins@mozillaonline.com.showpiemenu", false);

// user_pref("extensions.omnibarplus.autoSelect", false);
// user_pref("extensions.omnibar.hidesearchbar", false);
// user_pref("extensions.omnibar.numsuggestions", 5);
// user_pref("extensions.omnibar.numhistory", 7);
// user_pref("extensions.omnibar.numresults", 12);
// user_pref("extensions.omnibarplus.omnibar", true);

//greasemonkey 油猴
user_pref("extensions.greasemonkey.haveInsertedToolbarbutton", true);
user_pref("extensions.greasemonkey.installDelay", 0);
user_pref("extensions.greasemonkey.stats.prompted", true);
user_pref("extensions.greasemonkey.sync.enabled", false);

// user_pref("extensions.loadTabsProgressively.maxLoadedTabs", 7);

//install-event-fired
// user_pref("extensions.support@lastpass.com.install-event-//扩展设置", true);
// user_pref("extensions.add-to-searchbox@maltekraus.de.install-event-fired", true);
// user_pref("extensions.cmsendlink@loveyland.com.install-event-fired", true);
// user_pref("extensions.lessChrome.HD@prospector.labs.mozilla.install-event-fired", true);
// user_pref("extensions.livemargins@mozillaonline.com.install-event-fired", true);
// user_pref("extensions.mozilla_cc@internetdownloadmanager.com.install-event-fired", true);
// user_pref("extensions.omnibar@ajitk.com.install-event-fired", true);
// user_pref("extensions.omnibarplus@quicksaver.install-event-fired", true);
// user_pref("extensions.privateTab@infocatcher.install-event-fired", true);
// user_pref("extensions.support@lastpass.com.install-event-fired", true);
user_pref("extensions.userChromeJS@mozdev.org.install-event-fired", true);
// user_pref("extensions.wangpanlixian@qq.com.install-event-fired", true);

//firstrun
// user_pref("extensions.stylish.firstRun", 3);
// user_pref("services.sync.prefs.sync.extensions.stratiform.firstrun", false);

//UC脚本管理器
// user_pref("userChrome.disable.script", "BingDesktopThemeEveryDay.uc.js%2C");
// user_pref("userChromeJS.rebuildUI.menues", "addMenu-rebuild\ntoolsbar_KeyChanger_rebuild\ndownloadPlus_set\nFeiRuoTabplus_set\nFeiRuoMouse_set\nAwesomeBookmarkbar_set\nInspectElement-menuitem\nwebDeveloperMenu\ngm_general_menu\npan-menuitem\nexternal");

//脚本设置
// user_pref("uAutoPagerize.AUTO_START", true);
// user_pref("uAutoPagerize.PRELOADER_NEXTPAGE", true);

// user_pref("userChromeJS.AwesomeBookmarkbar.PClick_H", true);
// user_pref("userChromeJS.AwesomeBookmarkbar.UBlur_H", true);
// user_pref("userChromeJS.AwesomeBookmarkbar.UDblclick_S", true);

user_pref("extensions.stylish.editorWindowMode", 1);

//FeiRuoMouse
user_pref("userChromeJS.FeiRuoMouse.DragCustom", "1|%u65B0%u6807%u7B7E%u6253%u5F00%u56FE%u7247%28%u524D%u53F0%29|U|Image||;;1|%u65B0%u6807%u7B7E%u6253%u5F00%u56FE%u7247%u94FE%u63A5%28%u524D%u53F0%29|D|Image||;;1|%u65B0%u6807%u7B7E%u6253%u5F00%u94FE%u63A5%28%u524D%u53F0%29|U|Url||;;1|%u65B0%u6807%u7B7E%u6253%u5F00%u94FE%u63A5%28%u540E%u53F0%29|D|Url||;;1|Google%u641C%u7D22%u9009%u4E2D%u6587%u5B57%28%u524D%u53F0%29%5B%u8BC6%u522BURL%u5E76%u6253%u5F00%5D|U|Text||;;1|Google%u641C%u7D22%u9009%u4E2D%u6587%u5B57%28%u540E%u53F0%29%5B%u8BC6%u522BURL%u5E76%u6253%u5F00%5D|D|Text||");
user_pref("userChromeJS.FeiRuoMouse.GesCustom", "1|%u8F6C%u5230%u9875%u9762%u9876%u90E8|U|||;;1|%u8F6C%u5230%u9875%u9762%u5E95%u90E8|D|||;;1|%u540E%u9000/%u4E0A%u4E00%u9875|L|||;;1|%u524D%u8FDB/%u4E0B%u4E00%u9875|R|||;;1|%u8F6C%u5230%u5DE6%u8FB9%u6807%u7B7E%u9875|UL|||;;1|%u8F6C%u5230%u53F3%u8FB9%u6807%u7B7E%u9875|UR|||;;1|%u65B0%u5EFA%u6807%u7B7E|DU|||;;0|%u5173%u95ED%u5F53%u524D%u6807%u7B7E%u9875|DR|||;;0|%u64A4%u9500%u5173%u95ED%u6807%u7B7E%u9875|DL|||;;1|%u5237%u65B0|UD|||;;0|%u91CD%u542F%u6D4F%u89C8%u5668|DRU|||;;1|%u6FC0%u6D3B%u5DE6%u8FB9%u7684%u6807%u7B7E%u9875|W-|||;;1|%u6FC0%u6D3B%u53F3%u8FB9%u7684%u6807%u7B7E%u9875|W+|||");
user_pref("userChromeJS.FeiRuoMouse.GesIngBtn", 2);
user_pref("userChromeJS.FeiRuoMouse.GesTrailEnabel", true);
user_pref("userChromeJS.FeiRuoMouse.StatusTime", 3000);
user_pref("userChromeJS.FeiRuoMouse.isStatus", true);
user_pref("userChromeJS.FeiRuoMouse.trailColor", "brown");
user_pref("userChromeJS.FeiRuoMouse.trailSize", 2);

//FeiRuoTabplus
// user_pref("userChromeJS.FeiRuoTabplus.CloseDownloadBankTab", false);
// user_pref("userChromeJS.FeiRuoTabplus.ColseToNearTab", 0);
// user_pref("userChromeJS.FeiRuoTabplus.Custom", "1|mTabContainer|MouseScrollUp|Tab|1|MouseScrollTabL||,1|mTabContainer|MouseScrollDown|Tab|1|MouseScrollTabL||,0|mTabContainer|dblclick|Tab|0|ReloadTarget||,1|mTabContainer|dblclick|Tab|2|CloseTargetTab||");
// user_pref("userChromeJS.FeiRuoTabplus.HomeNewTab", true);
// user_pref("userChromeJS.FeiRuoTabplus.ImageNewTab", true);
// user_pref("userChromeJS.FeiRuoTabplus.KeepBookmarksOnMiddleClick", false);
// user_pref("userChromeJS.FeiRuoTabplus.NewTabExKey", "Alt|Alt");
// user_pref("userChromeJS.FeiRuoTabplus.NewTabExcludePage", "about:blank\nabout:home\nabout:newtab\nhttp://start.firefoxchina.cn/");
// user_pref("userChromeJS.FeiRuoTabplus.NewTabExcludeUrl", "^(javascript:)");
// user_pref("userChromeJS.FeiRuoTabplus.NewTabNear", 0);
// user_pref("userChromeJS.FeiRuoTabplus.NewTabUrlbar", true);
// user_pref("userChromeJS.FeiRuoTabplus.NewTabUrlbar_SH", true);
// user_pref("userChromeJS.FeiRuoTabplus.OpenFilesWhenDrop", false);
// user_pref("userChromeJS.FeiRuoTabplus.SameHostEX", "www.nicovideo.jp\nwww.bilibili.com\nwww.acfun.tv\nwww.tucao.cc");
// user_pref("userChromeJS.FeiRuoTabplus.ShowBorder", "0,7,7,7");
// user_pref("userChromeJS.FeiRuoTabplus.ShowBorderChange", false);
// user_pref("userChromeJS.FeiRuoTabplus.SideBarNewTab", true);
// user_pref("userChromeJS.FeiRuoTabplus.SideBarNewTab_SH", true);
// user_pref("userChromeJS.FeiRuoTabplus.TabFocus", false);
// user_pref("userChromeJS.FeiRuoTabplus.TabFocus_Time", 250);
// user_pref("userChromeJS.FeiRuoTabplus.UndoBtn", false);

//*=newDownloadPlus=*//
//主界面
user_pref("userChromeJS.downloadPlus.downloadSound_Play", false);//下载完成提示音
user_pref("userChromeJS.downloadPlus.downloadFileSize", true);//精确显示文件大小
user_pref("userChromeJS.downloadPlus.autoClose_blankTab", true);//自动关闭空白标签
user_pref("userChromeJS.downloadPlus.download_speed", true);//下载面皮显示下载速度
//下载界面
user_pref("userChromeJS.downloadPlus.download_dialog_saveas", true);//另存为
user_pref("userChromeJS.downloadPlus.download_dialog_saveTo", true);//保存到
user_pref("userChromeJS.downloadPlus.download_dialog_saveTo_suffix", 1);//保存到——后缀样式
user_pref("userChromeJS.downloadPlus.download_dialog_showCompleteURL", true);//双击复制完整地址
user_pref("userChromeJS.downloadPlus.download_dialog_doubleclicksaveL", false);//双击保存执行下载
user_pref("userChromeJS.downloadPlus.download_dialog_doubleclickanyW", false);//双击任意地方执行下载
//其他
user_pref("userChromeJS.downloadPlus.new_Download", true);//新建下载
user_pref("userChromeJS.downloadPlus.new_Download_popups", true);//新建下载——是否弹窗
user_pref("userChromeJS.downloadPlus.downloadsPanel_removeFile", true);//从硬盘删除
user_pref("userChromeJS.downloadPlus.download_checksum", true);//Hash计算
user_pref("userChromeJS.downloadPlus.save_And_Open", true);//保存并打开
user_pref("userChromeJS.downloadPlus.save_And_Open_RorL", 1);//保存并打开——打开文件
user_pref("userChromeJS.downloadPlus.download_dialog_changeName", true);//下载改名
user_pref("userChromeJS.downloadPlus.download_dialog_changeName_encodingConvert", true);//下载改名——是否开启下拉菜单

// mintrayr
user_pref("extensions.mintrayr.browser.watchbookmarks", true);
user_pref("extensions.mintrayr.mozapps.watchdownloads", true);

//*=图标排列=*//
// user_pref("browser.uiCustomization.state", "{\"placements\":{\"PanelUI-contents\":[\"search-container\",\"feed-button\",\"add-ons-button\",\"preferences-button\"],\"addon-bar\":[\"addonbar-closebutton\",\"status-bar\"],\"PersonalToolbar\":[\"personal-bookmarks\",\"pocket-button\",\"ecleaner-toolbar-button\",\"stylish-toolbar-button\",\"pan-toolbarbutton\",\"greasemonkey-tbb\",\"lpt_lastpass-compact-btn\"],\"nav-bar\":[\"urlbar-container\",\"bookmarks-menu-button\",\"history-panelmenu\",\"downloads-button\",\"userChromebtnMenu\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\"]},\"seen\":[\"pan-toolbarbutton\"],\"dirtyAreaCache\":[\"addon-bar\",\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\",\"PanelUI-contents\"],\"currentVersion\":4,\"newElementCount\":0}");
//*=version 57 下面一行影响工具栏 =*//
// user_pref("browser.uiCustomization.state", "{\"placements\":{\"PanelUI-contents\":[\"zoom-controls\",\"save-page-button\",\"preferences-button\",\"add-ons-button\"],\"addon-bar\":[\"addonbar-closebutton\",\"status-bar\",\"flashgot-fake-tbb\"],\"PersonalToolbar\":[\"personal-bookmarks\",\"stylish-toolbar-button\",\"greasemonkey-tbb\"],\"nav-bar\":[\"sync-button\",\"bookmarks-menu-button\",\"urlbar-container\",\"downloads-button\",\"userChromebtnMenu\",\"flashgot-media-tbb\",\"ublock-button\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\"]},\"seen\":[\"webide-button\",\"pan-toolbarbutton\",\"ublock-button\"],\"dirtyAreaCache\":[\"addon-bar\",\"PersonalToolbar\",\"nav-bar\",\"PanelUI-contents\",\"TabsToolbar\",\"toolbar-menubar\"],\"currentVersion\":4,\"newElementCount\":0}");
// user_pref("browser.uiCustomization.state", "{\"placements\":{\"PanelUI-contents\":[\"edit-controls\",\"zoom-controls\",\"new-window-button\",\"privatebrowsing-button\",\"save-page-button\",\"print-button\",\"history-panelmenu\",\"fullscreen-button\",\"find-button\",\"preferences-button\",\"add-ons-button\",\"developer-button\",\"sync-button\"],\"addon-bar\":[\"addonbar-closebutton\",\"status-bar\"],\"PersonalToolbar\":[\"personal-bookmarks\",\"search-container\"],\"nav-bar\":[\"urlbar-container\",\"downloads-button\",\"RIL_toolbar_button\",\"flashgot-media-tbb\",\"stylish-toolbar-button\",\"greasemonkey-tbb\",\"VimFxButton\",\"loop-button\",\"redirector_einaregilsson_com-browser-action\",\"imacros-toggle-button\",\"anobtn\",\"GrabScroll-image\",\"UIEnhancerToolbarButton\",\"toggle-button--adguardadblockeradguardcom-adguard-toggle-button\",\"QuickSnapshot\",\"pocket-button\"],\"TabsToolbar\":[\"userChromebtnMenu\",\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\",\"lpt_lastpass-compact-btn\",\"aup-toolbarbutton\",\"bookmarks-menu-button\",\"SimpleMusicPlayer\",\"foxyproxy-toolbar-icon\",\"fireie-toolbar-palette-button\",\"ublock0-button\",\"policeman-toolbarbutton\",\"umatrix-button\",\"alertbox_tb_action_ct\"]},\"seen\":[\"VimFxButton\",\"loop-button\",\"redirector_einaregilsson_com-browser-action\",\"ublock0-button\",\"imacros-toggle-button\",\"developer-button\",\"umatrix-button\",\"anobtn\",\"GrabScroll-image\",\"toggle-button--adguardadblockeradguardcom-adguard-toggle-button\",\"QuickSnapshot\",\"pocket-button\"],\"dirtyAreaCache\":[\"addon-bar\",\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\",\"PanelUI-contents\"],\"currentVersion\":6,\"newElementCount\":0}");
//
//
//
//*=version 57 =*//
user_pref("browser.tabs.loadBookmarksInTabs", true);


//*= translation =*//
user_pref("browser.translation.engine", "yandex");
user_pref("browser.translation.detectLanguage", true);
user_pref("browser.translation.ui.show", true);
user_pref("browser.translation.ui.welcomeMessageShown", true);
user_pref("browser.translation.yandex.apiKeyOverride", "trnsl.1.1.20180131T070042Z.f2037a20ce27c3ef.4d87a0dd971d72344f179bb0d308e0cae235cc8e");



