jQuery(document).ready(function($){"use strict";var searchResultsCount=0;$(".foswikiSearchResultCount span").livequery(function(){searchResultsCount+=parseInt($(this).html(),10)});if(searchResultsCount>0){$("#foswikiNumberOfResultsContainer").livequery(function(){$(this).html(" "+foswiki.getMetaTag("TEXT_NUM_TOPICS")+" <b>"+searchResultsCount+" </b>")})}$("input.foswikiFocus").livequery(function(){$(this).focus()});$("input.foswikiChangeFormButton").live("click",function(){if(foswiki.Edit){foswiki.Edit.validateSuppressed=true}});$("body.patternEditPage input").live("keydown",function(event){if(event.keyCode===13){return false}})});