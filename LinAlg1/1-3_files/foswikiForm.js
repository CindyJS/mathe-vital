(function($){foswiki.Form={KEYVALUEPAIR_DELIMITER:";",formData2QueryString:function(inForm,inFormatOptions){if(!inForm){return null}var opts=inFormatOptions||{};var str="";var formElem;var lastElemName="";for(i=0;i<inForm.elements.length;i++){formElem=inForm.elements[i];switch(formElem.type){case"text":case"hidden":case"password":case"textarea":case"select-one":str+=formElem.name+"="+encodeURI(formElem.value)+foswiki.Form.KEYVALUEPAIR_DELIMITER;break;case"select-multiple":var isSet=false;for(var j=0;j<formElem.options.length;j++){var currOpt=formElem.options[j];if(currOpt.selected){if(opts.collapseMulti){if(isSet){str+=","+encodeURI(currOpt.text)}else{str+=formElem.name+"="+encodeURI(currOpt.text);isSet=true}}else{str+=formElem.name+"="+encodeURI(currOpt.text)+foswiki.Form.KEYVALUEPAIR_DELIMITER}}}if(opts.collapseMulti){str+=foswiki.Form.KEYVALUEPAIR_DELIMITER}break;case"radio":if(formElem.checked){str+=formElem.name+"="+encodeURI(formElem.value)+foswiki.Form.KEYVALUEPAIR_DELIMITER}break;case"checkbox":if(formElem.checked){if(opts.collapseMulti&&formElem.name===lastElemName){if(str.lastIndexOf("&")==str.length-1){str=str.substr(0,str.length-1)}str+=","+encodeURI(formElem.value)}else{str+=formElem.name+"="+encodeURI(formElem.value)}str+=foswiki.Form.KEYVALUEPAIR_DELIMITER;lastElemName=formElem.name}break}}str=str.substr(0,str.length-1);return str},makeSafeForTableEntry:function(inForm){if(!inForm){return null}var formElem;for(i=0;i<inForm.elements.length;i++){formElem=inForm.elements[i];switch(formElem.type){case"text":case"password":case"textarea":formElem.value=foswiki.String.makeTextSafeForTableEntry(formElem.value);break}}},getFormElement:function(inFormName,inElementName){return document[inFormName][inElementName]},setFocus:function(inFormName,inInputFieldName){try{var el=foswiki.Form.getFormElement(inFormName,inInputFieldName);el.focus()}catch(er){}},initBeforeFocusText:function(el,inText){el.FP_defaultValue=inText;if(!el.value||el.value==inText){foswiki.Form._setDefaultStyle(el)}},clearBeforeFocusText:function(el){if(!el.FP_defaultValue){el.FP_defaultValue=el.value}if(el.FP_defaultValue==el.value){el.value=""}$(el).addClass("foswikiInputFieldFocus").removeClass("foswikiInputFieldBeforeFocus")},restoreBeforeFocusText:function(el){if(!el.value&&el.FP_defaultValue){foswiki.Form._setDefaultStyle(el)}$(el).removeClass("foswikiInputFieldFocus")},_setDefaultStyle:function(el){el.value=el.FP_defaultValue;$(el).addClass("foswikiInputFieldBeforeFocus")}}})(jQuery);jQuery(document).ready(function($){$('input[type="text"].foswikiDefaultText').each(function(index,el){foswiki.Form.initBeforeFocusText(this,this.title)}).focus(function(){foswiki.Form.clearBeforeFocusText(this)}).blur(function(){foswiki.Form.restoreBeforeFocusText(this)});$(".foswikiCheckAllOn").click(function(e){var form=$(this).parents("form:first");$(".foswikiCheckBox",form).attr("checked",true)});$(".foswikiCheckAllOff").click(function(e){var form=$(this).parents("form:first");$(".foswikiCheckBox",form).attr("checked",false)})});