foswiki.String={isWikiWord:function(inValue){if(!inValue)return false;var re=new RegExp(foswiki.StringConstants.getInstance().WIKIWORD_REGEX);return inValue.match(re)?true:false},capitalize:function(inValue){if(!inValue)return null;var re=new RegExp("["+foswiki.StringConstants.getInstance().MIXED_ALPHANUM_CHARS+"]+","g");return inValue.replace(re,function(a){return a.charAt(0).toLocaleUpperCase()+a.substr(1)})},isBoolean:function(inValue){return inValue=="on"||inValue=="true"||inValue=="1"},removeSpaces:function(inValue){return inValue.replace(/\s/g,"")},trimSpaces:function(inValue){if(inValue){inValue=inValue.replace(/^\s\s*/,"")}if(inValue){inValue=inValue.replace(/\s\s*$/,"")}return inValue},filterPunctuation:function(inValue){if(!inValue)return null;var nameFilterRegex=foswiki.getPreference("NAMEFILTER");var re=new RegExp(nameFilterRegex,"g");return inValue.replace(re," ")},removePunctuation:function(inValue){if(!inValue)return null;var allowedRegex="[^"+foswiki.StringConstants.getInstance().MIXED_ALPHANUM_CHARS+"]";var re=new RegExp(allowedRegex,"g");return inValue.replace(re,"")},makeWikiWord:function(inValue){if(!inValue)return null;return foswiki.String.removePunctuation(foswiki.String.capitalize(inValue))},makeSafeForTableEntry:function(inText){if(inText.length==0)return"";var safeString=inText;var re;re=new RegExp(/\r/g);safeString=safeString.replace(re,"\n");re=new RegExp(/\|/g);safeString=safeString.replace(re,"/");re=new RegExp(/\n\s*\n/g);safeString=safeString.replace(re,"%<nop>BR%%<nop>BR%");re=new RegExp(/\n/g);safeString=safeString.replace(re,"%<nop>BR%");safeString+=" ";return safeString}};foswiki.StringConstants=function(){this.init()};foswiki.StringConstants.__instance__=null;foswiki.StringConstants.getInstance=function(){if(this.__instance__==null){this.__instance__=new foswiki.StringConstants}return this.__instance__};foswiki.StringConstants.prototype.UPPER_ALPHA_CHARS="A-Z";foswiki.StringConstants.prototype.LOWER_ALPHA_CHARS="a-z";foswiki.StringConstants.prototype.NUMERIC_CHARS="\\d";foswiki.StringConstants.prototype.MIXED_ALPHA_CHARS;foswiki.StringConstants.prototype.MIXED_ALPHANUM_CHARS;foswiki.StringConstants.prototype.LOWER_ALPHANUM_CHARS;foswiki.StringConstants.prototype.WIKIWORD_REGEX;foswiki.StringConstants.prototype.ALLOWED_URL_CHARS;foswiki.StringConstants.prototype.init=function(){foswiki.StringConstants.prototype.MIXED_ALPHA_CHARS=foswiki.StringConstants.prototype.LOWER_ALPHA_CHARS+foswiki.StringConstants.prototype.UPPER_ALPHA_CHARS;foswiki.StringConstants.prototype.MIXED_ALPHANUM_CHARS=foswiki.StringConstants.prototype.MIXED_ALPHA_CHARS+foswiki.StringConstants.prototype.NUMERIC_CHARS;foswiki.StringConstants.prototype.LOWER_ALPHANUM_CHARS=foswiki.StringConstants.prototype.LOWER_ALPHA_CHARS+foswiki.StringConstants.prototype.NUMERIC_CHARS;foswiki.StringConstants.prototype.WIKIWORD_REGEX="^"+"["+foswiki.StringConstants.prototype.UPPER_ALPHA_CHARS+"]"+"+"+"["+foswiki.StringConstants.prototype.LOWER_ALPHANUM_CHARS+"]"+"+"+"["+foswiki.StringConstants.prototype.UPPER_ALPHA_CHARS+"]"+"+"+"["+foswiki.StringConstants.prototype.MIXED_ALPHANUM_CHARS+"]"+"*";foswiki.StringConstants.prototype.ALLOWED_URL_CHARS=foswiki.StringConstants.prototype.MIXED_ALPHANUM_CHARS+"-_^"};