var GalaxyLocalization=jQuery.extend({},{ALIAS_NAME:"_l",localizedStrings:{},setLocalizedString:function(b,a){var c=this;var d=function(f,e){if(f!==e){c.localizedStrings[f]=e}};if(jQuery.type(b)==="string"){d(b,a)}else{if(jQuery.type(b)==="object"){jQuery.each(b,function(e,f){d(e,f)})}else{throw ("Localization.setLocalizedString needs either a string or object as the first argument, given: "+b)}}},localize:function(a){return this.localizedStrings[a]||a},addAliasToNamespace:function(a){a[GalaxyLocalization.ALIAS_NAME]=function(b){return GalaxyLocalization.localize(b)}},toString:function(){return"GalaxyLocalization"}});GalaxyLocalization.addAliasToNamespace(window);