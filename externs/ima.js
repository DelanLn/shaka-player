/** @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Externs for IMA SDK.
 * @externs
 */


/** @const */
var google = {};

/** @const */
google.ima = {};


/**
 * @implements {EventTarget}
 */
google.ima.AdsLoader = class {
  /** @param {!google.ima.AdDisplayContainer} container */
  constructor(container) {}

  contentComplete() {}

  /** @param {google.ima.AdsRequest} request */
  requestAds(request) {}

  /** @return {google.ima.ImaSdkSettings} */
  getSettings() {}

  /** @override */
  addEventListener() {}

  /** @override */
  removeEventListener() {}

  /** @override */
  dispatchEvent() {}
};


/**
 * @implements {EventTarget}
 */
google.ima.AdsManager = class {
  start() {}

  /**
   * @param {number} width
   * @param {number} height
   * @param {google.ima.ViewMode} viewMode
   */
  init(width, height, viewMode) {}

  /**
   * @return {number}
   */
  getRemainingTime() {}

  pause() {}

  resume() {}

  getVolume() {}

  /**
   * @return {boolean}
   */
  getAdSkippableState() {}

  skip() {}

  stop() {}

  /**
   * @param {number} volume
   */
  setVolume(volume) {}

  /**
   * @param {number} width
   * @param {number} height
   * @param {google.ima.ViewMode} viewMode
   */
  resize(width, height, viewMode) {}

  /**
   * @return {!Array.<number>}
   */
  getCuePoints() {}

  /** @override */
  addEventListener() {}

  /** @override */
  removeEventListener() {}

  /** @override */
  dispatchEvent() {}
};


/** @const */
google.ima.AdsManagerLoadedEvent = class extends Event {
  /**
   * @param {!HTMLElement} video
   * @return {!google.ima.AdsManager}
   */
  getAdsManager(video) {}
};


/** @const */
google.ima.AdDisplayContainer = class {
  /**
   * @param {HTMLElement} adContainer
   * @param {HTMLMediaElement} video
   */
  constructor(adContainer, video) {}

  initialize() {}
};


/**
 * @enum {string}
 */
google.ima.AdsManagerLoadedEvent.Type = {
  ADS_MANAGER_LOADED: 'ADS_MANAGER_LOADED',
};


/** @const */
google.ima.AdEvent = class extends Event {
  /** @return {!google.ima.Ad } */
  getAd() {}
};


/** @const */
google.ima.Ad = class {
  /** @return {number} */
  getDuration() {}

  /** @return {number} */
  getSkipTimeOffset() {}

  /** @return {google.ima.AdPodInfo} */
  getAdPodInfo() {}

  /** @return {string} */
  getAdvertiserName() {}
};


/** @const */
google.ima.AdPodInfo = class {
  /** @return {number} */
  getAdPosition() {}

  /** @return {number} */
  getTotalAds() {}
};

/** @const */
google.ima.ImaSdkSettings = class {
  /**
   * @param {string} locale
   */
  setLocale(locale) {}

  /**
   * @param {string} player
   */
  setPlayerType(player) {}

  /**
   * @param {string} version
   */
  setPlayerVersion(version) {}
};


/**
 * @enum {string}
 */
google.ima.AdEvent.Type = {
  CONTENT_PAUSE_REQUESTED: 'CONTENT_PAUSE_REQUESTED',
  CONTENT_RESUME_REQUESTED: 'CONTENT_RESUME_REQUESTED',
  AD_ERROR: 'AD_ERROR',
  PAUSED: 'PAUSED',
  RESUMED: 'RESUMED',
  VOLUME_CHANGED: 'VOLUME_CHANGED',
  VOLUME_MUTED: 'VOLUME_MUTED',
  SKIPPABLE_STATE_CHANGED: 'SKIPPABLE_STATE_CHANGED',
  STARTED: 'STARTED',
  FIRST_QUARTILE: 'FIRST_QUARTILE',
  MIDPOINT: 'MIDPOINT',
  THIRD_QUARTILE: 'THIRD_QUARTILE',
  COMPLETE: 'COMPLETE',
  ALL_ADS_COMPLETED: 'ALL_ADS_COMPLETED',
  SKIPPED: 'SKIPPED',
};


/**
 * @typedef {{
 *   adTagUrl: string,
 * }}
 *
 * @description Request for the ad server
 * @property {string} adTagUrl
 * @exportDoc
 */
google.ima.AdsRequest;


/** @const */
google.ima.AdError = class {};


/** @const */
google.ima.AdErrorEvent = class extends Event {
  /** @return {google.ima.AdError} */
  getError() {}
};


/**
 * @enum {string}
 */
google.ima.AdErrorEvent.Type = {
  AD_ERROR: 'AD_ERROR',
};


/**
 * @enum {string}
 */
google.ima.ViewMode = {
  FULLSCREEN: 'FULLSCREEN',
  NORMAL: 'NORMAL',
};


/** @const */
google.ima.dai = {};


/** @const */
google.ima.dai.api = {};


/**
 * @implements {EventTarget}
 */
google.ima.dai.api.StreamManager = class {
  /**
   * @param {HTMLMediaElement} videoElement
   * @param {HTMLElement=} adUiElement
   * @param {google.ima.dai.api.UiSettings=} uiSettings
   */
  constructor(videoElement, adUiElement = undefined, uiSettings = undefined) {}

  /** @param {number} streamTime */
  contentTimeForStreamTime(streamTime) {}

  /** @param {Object} metadata */
  onTimedMetadata(metadata) {}

  /** @param {number} streamTime */
  previousCuePointForStreamTime(streamTime) {}

  /**
   * @param {string} type
   * @param {Uint8Array|string} data
   * @param {number} timestamp
   */
  processMetadata(type, data, timestamp) {}

  /** @param {Object} adTagParameters */
  replaceAdTagParameters(adTagParameters) {}

  /** @param {google.ima.dai.api.StreamRequest} streamRequest */
  requestStream(streamRequest) {}

  reset() {}

  /** @param {number} contentTime */
  streamTimeForContentTime(contentTime) {}

  /** @override */
  addEventListener() {}

  /** @override */
  removeEventListener() {}

  /** @override */
  dispatchEvent() {}
};


/** @const */
google.ima.dai.api.UiSettings = class {
  /** @return {number} */
  getLocale() {}

  /** @param {string} locale */
  setLocale(locale) {}
};


/** @const */
google.ima.dai.api.Ad = class {
  /** @return {number} */
  getDuration() {}

  /** @return {number} */
  getSkipTimeOffset() {}

  /** @return {google.ima.AdPodInfo} */
  getAdPodInfo() {}

  /** @return {string} */
  getAdvertiserName() {}

  /** @return {boolean} */
  isSkippable() {}
};


/** @const */
google.ima.dai.api.AdPodInfo = class {
  /** @return {number} */
  getAdPosition() {}

  /** @return {number} */
  getTotalAds() {}
};


/** @const */
google.ima.dai.api.CuePoint = class {};

/** @type {number} */
google.ima.dai.api.CuePoint.prototype.start;

/** @type {number} */
google.ima.dai.api.CuePoint.prototype.end;

/** @type {boolean} */
google.ima.dai.api.CuePoint.prototype.played;


/** @const */
google.ima.dai.api.AdProgressData = class {};


/** @type {number} */
google.ima.dai.api.AdProgressData.prototype.currentTime;


/** @type {number} */
google.ima.dai.api.AdProgressData.prototype.duration;


/** @type {number} */
google.ima.dai.api.AdProgressData.prototype.currentTime;


/** @type {number} */
google.ima.dai.api.AdProgressData.prototype.url;


/** @const */
google.ima.dai.api.StreamData = class {};


/** @type {google.ima.dai.api.AdProgressData} */
google.ima.dai.api.StreamData.prototype.adProgressData;


/** @type {string} */
google.ima.dai.api.StreamData.prototype.url;


/** @type {!Array.<!google.ima.dai.api.CuePoint>} */
google.ima.dai.api.StreamData.prototype.cuepoints;


/** @const */
google.ima.dai.api.StreamEvent = class extends Event {
  /** @return {!google.ima.dai.api.Ad} */
  getAd() {}

  /** @return {!google.ima.dai.api.StreamData} */
  getStreamData() {}
};


/** @const */
google.ima.dai.api.StreamRequest = class {};


/** @type {Object} */
google.ima.dai.api.StreamRequest.prototype.adTagParameters;


/** @type {string} */
google.ima.dai.api.StreamRequest.prototype.apiKey;


/** @type {string} */
google.ima.dai.api.StreamRequest.prototype.authToken;


/** @type {string} */
google.ima.dai.api.StreamRequest.prototype.streamActivityMonitorId;


/** @const */
google.ima.dai.api.VODStreamRequest =
    class extends google.ima.dai.api.StreamRequest {};


/** @type {Object} */
google.ima.dai.api.VODStreamRequest.prototype.adTagParameters;


/** @type {string} */
google.ima.dai.api.VODStreamRequest.prototype.apiKey;


/** @type {string} */
google.ima.dai.api.VODStreamRequest.prototype.authToken;


/** @type {string} */
google.ima.dai.api.VODStreamRequest.prototype.contentSourceId;


/** @type {string} */
google.ima.dai.api.VODStreamRequest.prototype.streamActivityMonitorId;


/** @type {string} */
google.ima.dai.api.VODStreamRequest.prototype.videoId;


/** @const */
google.ima.dai.api.LiveStreamRequest =
    class extends google.ima.dai.api.StreamRequest {};


/** @type {Object} */
google.ima.dai.api.LiveStreamRequest.prototype.adTagParameters;


/** @type {string} */
google.ima.dai.api.LiveStreamRequest.prototype.apiKey;


/** @type {string} */
google.ima.dai.api.LiveStreamRequest.prototype.assetKey;


/** @type {string} */
google.ima.dai.api.LiveStreamRequest.prototype.authToken;


/** @type {string} */
google.ima.dai.api.LiveStreamRequest.prototype.streamActivityMonitorId;


/**
 * @enum {string}
 */
google.ima.dai.api.StreamEvent.Type = {
  LOADED: 'loaded',
  AD_BREAK_STARTED: 'adBreakStarted',
  AD_BREAK_ENDED: 'adBreakEnded',
  AD_PERIOD_STARTED: 'adPeriodStarted',
  AD_PERIOD_ENDED: 'adPeriodEnded',
  AD_PROGRESS: 'adProgress',
  CUEPOINTS_CHANGED: 'cuepointsChanged',
  CLICK: 'click',
  ERROR: 'error',
  STARTED: 'started',
  FIRST_QUARTILE: 'firstquartile',
  MIDPOINT: 'midpoint',
  STREAM_INITIALIZED: 'streamInitialized',
  THIRD_QUARTILE: 'thirdquartile',
  COMPLETE: 'complete',
  SKIPPABLE_STATE_CHANGED: 'skippableStateChanged',
  SKIPPED: 'skip',
  VIDEO_CLICKED: 'videoClicked',
};
