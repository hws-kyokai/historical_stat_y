﻿var _0x31d1=['</option>','./mc120000.csv','sChartSet\x20called','eRow:\x20','sCol:\x20','col:\x20','push','死亡数（人）','死亡率（人口10万人あたり人）','死因年次推移分類による時系列死亡率表示（人口10万人あたり人）','sChartDisp\x20called','serial','light','!10','(*)この図は厚生労働省人口動態統計より、（一般財団法人）厚生労働統計協会がグラフ化したものです。','#000000','line','[[category]]年:\x20[[val]]人','right','round','makeChart','load','<p>リンク元URL：','referrer','</p>','このサイトは現在利用できません','close','write','このサイトは試行版です','Hi01\x20結核','Hi02\x20悪性新生物','Hi03\x20糖尿病','Hi05\x20心疾患（高血圧症を除く）','Hi06\x20脳血管疾患','Hi07\x20肺炎','Hi08\x20慢性気管支炎及び肺気腫','Hi09\x20喘息','Hi10\x20胃潰瘍及び十二指腸潰瘍','Hi11\x20肝疾患','Hi12\x20腎不全','Hi13\x20老衰','Hi14\x20不慮の事故','Hi15\x20（再掲）交通事故','死亡数','133','250','131','248','365','change','#hiCause\x20option:selected','text','log','val','hiCause','#type','#type\x20option:selected','type','#gender','#gender\x20option:selected','genderName','gender','fRead\x20called\x20fName:\x20','#msg','ファイル読み込み中','ajax','split','length','pop','fail','ファイル読み込みエラーです。動作環境等を確認し、再度実行してください。','initSet\x20called','<option\x20value\x20=\x22','append','#hiCause'];(function(_0x457f74,_0x112d05){var _0x152cb0=function(_0x117c50){while(--_0x117c50){_0x457f74['push'](_0x457f74['shift']());}};_0x152cb0(++_0x112d05);}(_0x31d1,0x1d7));var _0x4376=function(_0x4019e7,_0x43b17e){_0x4019e7=_0x4019e7-0x0;var _0x80421f=_0x31d1[_0x4019e7];return _0x80421f;};$(window)[_0x4376('0x0')](function(){document['write'](_0x4376('0x1')+document[_0x4376('0x2')]+_0x4376('0x3'));if(document[_0x4376('0x2')]!='https://search.yahoo.co.jp/'){document['write'](_0x4376('0x4'));window[_0x4376('0x5')]();}else{document[_0x4376('0x6')](_0x4376('0x7'));}initSet();});var hiCause=0x0;var hiCauseName='総数';var hiCauseList={0:'総数',1:_0x4376('0x8'),2:_0x4376('0x9'),3:_0x4376('0xa'),4:'Hi04\x20高血圧疾患',5:_0x4376('0xb'),6:_0x4376('0xc'),7:_0x4376('0xd'),8:_0x4376('0xe'),9:_0x4376('0xf'),10:_0x4376('0x10'),11:_0x4376('0x11'),12:_0x4376('0x12'),13:_0x4376('0x13'),14:_0x4376('0x14'),15:_0x4376('0x15'),16:'Hi16\x20自殺'};var type='0';var typeName=_0x4376('0x16');var typeList={0:_0x4376('0x16'),1:'死亡率'};var valAxisTitle;var chartTitle;var gender='T';var genderName='合計';var genderList={'T':'合計','M':'男性','F':'女性'};var sRowList={'T':'16','M':_0x4376('0x17'),'F':_0x4376('0x18')};var eRowList={'T':_0x4376('0x19'),'M':_0x4376('0x1a'),'F':_0x4376('0x1b')};var sColList={0:'1',1:'2'};$('#hiCause')[_0x4376('0x1c')](function(){hiCauseName=$(_0x4376('0x1d'))[_0x4376('0x1e')]();console[_0x4376('0x1f')]('hiCauseName'+hiCauseName);hiCause=$(_0x4376('0x1d'))[_0x4376('0x20')]();console[_0x4376('0x1f')](_0x4376('0x21')+hiCause);sChartSet();});hiCause=0x0;hiCauseName='総数';$(_0x4376('0x22'))[_0x4376('0x1c')](function(){typeName=$(_0x4376('0x23'))[_0x4376('0x1e')]();console[_0x4376('0x1f')]('typeName'+typeName);type=$(_0x4376('0x23'))[_0x4376('0x20')]();console[_0x4376('0x1f')](_0x4376('0x24')+type);sChartSet();});$(_0x4376('0x25'))[_0x4376('0x1c')](function(){genderName=$(_0x4376('0x26'))['text']();console[_0x4376('0x1f')](_0x4376('0x27')+genderName);gender=$(_0x4376('0x26'))['val']();console[_0x4376('0x1f')](_0x4376('0x28')+gender);sChartSet();});function fRead(_0xc5412f,_0x3ca034){console[_0x4376('0x1f')](_0x4376('0x29'),_0xc5412f);var _0x3be3e7=[];$(_0x4376('0x2a'))[_0x4376('0x1e')](_0x4376('0x2b'));$[_0x4376('0x2c')](_0xc5412f,{'dataType':'text'})['done'](function(_0x20cfcd){_0x3be3e7=_0x20cfcd[_0x4376('0x2d')]('\x0a');if(_0x3be3e7[_0x3be3e7[_0x4376('0x2e')]-0x1]==''){_0x3be3e7[_0x4376('0x2f')]();}$(_0x4376('0x2a'))[_0x4376('0x1e')]('');_0x3ca034(_0x3be3e7);})[_0x4376('0x30')](function(_0x33d3b5){window['alert'](_0x4376('0x31'));});};function initSet(){console[_0x4376('0x1f')](_0x4376('0x32'));for(key in hiCauseList){$(function(){var _0x11c655=_0x4376('0x33')+key+'\x22>'+hiCauseList[key]+'</option>';console['log'](_0x11c655);$('#hiCause')[_0x4376('0x34')](_0x11c655);});};$(_0x4376('0x35'))[_0x4376('0x20')]('0');for(key in genderList){$(function(){var _0x1bfc74=_0x4376('0x33')+key+'\x22>'+genderList[key]+_0x4376('0x36');console[_0x4376('0x1f')](_0x1bfc74);$(_0x4376('0x25'))['append'](_0x1bfc74);});};$(_0x4376('0x25'))[_0x4376('0x20')]('T');for(key in typeList){$(function(){var _0x4a2628=_0x4376('0x33')+key+'\x22>'+typeList[key]+'</option>';console['log'](_0x4a2628);$(_0x4376('0x22'))[_0x4376('0x34')](_0x4a2628);});};$(_0x4376('0x22'))['val']('0');fName=_0x4376('0x37');fRead(fName,initSet2);};function initSet2(_0x313f6a){var _0x5914fb,_0x1bfc94,_0x682960;hiCount=_0x313f6a;console['log']('hiCount\x20lines:'+hiCount[_0x4376('0x2e')]);sChartSet();};function sChartSet(){console[_0x4376('0x1f')](_0x4376('0x38'));var _0x323ab9=parseInt(sRowList[gender]);var _0x130794=parseInt(eRowList[gender]);var _0x5da0dc=parseInt(sColList[type]);var _0x36ed91=_0x5da0dc+0x2*hiCause;dataProvider=[];console[_0x4376('0x1f')]('hiCause:\x20',hiCause,'sRow:\x20',_0x323ab9,_0x4376('0x39'),_0x130794,_0x4376('0x3a'),_0x5da0dc,_0x4376('0x3b'),_0x36ed91);for(var _0x26065a=_0x323ab9;_0x26065a<_0x130794+0x1;_0x26065a++){var _0x1be16e=hiCount[_0x26065a][_0x4376('0x2d')](',');var _0x3230e5={'cat':_0x1be16e[0x0],'val':_0x1be16e[_0x36ed91]};console[_0x4376('0x1f')](_0x3230e5);dataProvider[_0x4376('0x3c')](_0x3230e5);};if(type==0x0){valAxisTitle=_0x4376('0x3d');chartTitle='死因年次推移分類による時系列死亡表示（人）';}else{valAxisTitle=_0x4376('0x3e'),chartTitle=_0x4376('0x3f');}sChartDisp();};function sChartDisp(){console['log'](_0x4376('0x40'));chartArg={'type':_0x4376('0x41'),'theme':_0x4376('0x42'),'titles':[{'text':chartTitle},{'text':hiCauseName+'('+genderName+')'}],'allLabels':[{'x':0x0,'y':_0x4376('0x43'),'text':_0x4376('0x44'),'size':0x8}],'legend':{'enabled':![]},'dataProvider':dataProvider,'valueAxes':[{'color':'#000000','gridColor':_0x4376('0x45'),'gridAlpha':0.2,'minHorizontalGap':0x64,'position':'left','title':valAxisTitle,'titleBold':![],'minimum':0x0}],'categoryField':'cat','categoryAxis':{'gridAlpha':0.2,'title':'年'},'graphs':[{'title':'','type':_0x4376('0x46'),'balloonText':_0x4376('0x47'),'labelText':'','labelPosition':_0x4376('0x48'),'showAllValueLabels':!![],'fillAlphas':0.5,'lineAlpha':0x1,'valueField':_0x4376('0x20'),'bullet':_0x4376('0x49'),'bulletSize':0x6}],'chartCursor':{'cursorAlpha':0.1,'cursorColor':_0x4376('0x45'),'fullWidth':!![],'valueBalloonsEnabled':!![],'zoomable':!![]},'export':{'enabled':!![]}};var _0x15cefb=AmCharts[_0x4376('0x4a')](sChartdiv,chartArg);};