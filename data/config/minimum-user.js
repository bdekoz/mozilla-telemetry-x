// Perf Testing Preferences (Remote)
// 2019-06-13

// Browser Preferences/Config/Setup
user_pref("browser.startup.homepage", 'about:blank');

// Warnings
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.warnOnQuit", false);
user_pref("services.sync.prefs.sync.browser.tabs.warnOnClose", false);
user_pref("services.sync.prefs.sync.browser.tabs.warnOnOpen", false);

user_pref("browser.disableResetPrompt", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.selfsupport.url", "");
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("datareporting.policy.firstRunURL", "");
user_pref("dom.popup_maximum", 0);

// Network
// IPV6 sometimes makes DNS slow on Linux
//user_pref("network.dns.disableIPv6", true);
//user_pref("network.http.rcwn.enabled", true);

// Timer Precision
// https://developer.mozilla.org/en-US/docs/Mozilla/Benchmarking
user_pref("privacy.reduceTimerPrecision", false);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", false);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", false);

// Data
user_pref("datareporting.policy.dataSubmissionEnabled", true);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);

// Telemetry
user_pref("toolkit.telemetry.enabled", true);
user_pref("toolkit.telemetry.unified", true);
user_pref("toolkit.telemetry.archive.enabled", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", true);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", true);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", true);
user_pref("toolkit.telemetry.healthping.enabled", true);
user_pref("toolkit.telemetry.newProfilePing.enabled", true);
user_pref("toolkit.telemetry.eventping.enabled", true);

// Prio ping, number of prio bundles to send in one ping (default is 10).
user_pref("toolkit.telemetry.prioping.enabled", true);
user_pref("toolkit.telemetry.prioping.dataLimit", 2);

//user_pref("toolkit.telemetry.server", "https://localhost");
user_pref("toolkit.telemetry.initDelay", 0);
user_pref("toolkit.telemetry.minSubsessionLength", 5);
user_pref("toolkit.telemetry.idleTimeout", 10);
user_pref("toolkit.telemetry.send.overrideOfficialCheck", true);
user_pref("toolkit.telemetry.testing.overridePreRelease", true);
user_pref("services.sync.telemetry.submissionInterval", 30);

// Telemetry x GV
//user_pref("toolkit.telemetry.isGeckoViewMode", true);
//user_pref("toolkit.telemetry.geckoPersistenceTimeout", 60000);
//user_pref("toolkit.telemetry.geckoPersistenceTimeout", 3000);
//app.update.lastUpdateTime.telemetry_modules_ping

// Specific Probes
user_pref("dom.performance.time_to_non_blank_paint.enabled", true);
user_pref("dom.performance.time_to_dom_content_flushed.enabled", true);
user_pref("dom.performance.time_to_first_interactive.enabled", true);
user_pref("dom.performance.time_to_contentful_paint.enabled", true);
user_pref("dom.enable_performance", true);
user_pref("dom.enable_performance_navigation_timing", true);
user_pref("dom.enable_resource_timing", true);

// Media
// AUTOPLAY OFF
user_pref("media.autoplay.default", 1);
user_pref("media.allowed-to-play.enabled", false);

// AUTOPLAY ON
//user_pref("media.autoplay.default", 0);
//user_pref("media.allowed-to-play.enabled", true);

// Privacy
user_pref("privacy.trackingprotection.enabled", false);
