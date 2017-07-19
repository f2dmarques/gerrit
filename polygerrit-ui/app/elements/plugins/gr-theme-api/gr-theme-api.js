// Copyright (C) 2017 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function(window) {
  'use strict';

  // Prevent redefinition.
  if (window.GrThemeApi) { return; }

  function GrThemeApi(plugin) {
    this.plugin = plugin;
  }

  GrThemeApi.prototype.setHeaderLogoAndTitle = function(logoUrl, title) {
    this.plugin.getDomHook('header-title', {replace: true}).then(element => {
      const customHeader = document.createElement('gr-custom-plugin-header');
      customHeader.logoUrl = logoUrl;
      customHeader.title = title;
      element.appendChild(customHeader);
    });
  };

  window.GrThemeApi = GrThemeApi;
})(window);
