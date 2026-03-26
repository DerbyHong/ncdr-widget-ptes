var ScriptTemp_T300250_Extreme_6301200 = document.createElement('script');
                            ScriptTemp_T300250_Extreme_6301200.type = 'text/template';
                            ScriptTemp_T300250_Extreme_6301200.id = 'TempID_T300250_Extreme_6301200';
                            ScriptTemp_T300250_Extreme_6301200.text = "<li> \
                    <div class='alertCAP_banner alertCAP_banner02 bannerYellow banner300X250' style='width:300px;margin: 0px auto;'>\
                         <div class='block_up' style='background-color:#ffff00;color:#000000;height:70px;'>\
                              <div class='alertCAP_Area'>臺北市-北投區</div>\
                              <div class='alertCAP_titleicon'style='background-color:#ffff00;'>\
          	                    <img src='{{@AlertImage}}';style='width:35px;height:52.5px;'title='{{@Event}}' alt='{{@Event}}'>\
                                   <div class='alertCAP_title' style='background-color:#ffff00;color:#000000'>{{@Event}}</div>\
                              </div>\
                         </div>\
                         <div class='block_down' style='background-color:#ffffff;color:#000000;height:180px;font-size:px'>\
                              <div class='alertCAP_con' style='font-size:px;'>\
                                 <div class='alertCAP_time' style= 'color:#000000;font-size:px;'>{{@Time}}│{{@OrgName}}</div>\
                                   {{@Summary}}\
                                 </div>\
                               <div class='alertCAP_moreBOX'>\
                                  <a href='{{@LinkMore}}' class='BUTmore' style='color:#ffffff' target='_blank'>詳細資料》</a>\
                               </div>\
                               <div class='alertCAP_logo'>\
           	                    <a href = 'https://www.ncdr.nat.gov.tw/' title='連結到國家災害防救科技中心(另開新視窗)' target='_blank'> \
                                   <img alt = '國家災害防救科技中心' title='國家災害防救科技中心(另開新視窗)'  src='https://alerts.ncdr.nat.gov.tw/Images/banner_logo.jpg'/> \
                                </a>\
                            </div>\
                         </div>\
                    </div>\
                                               </li>";
                            document.head.appendChild(ScriptTemp_T300250_Extreme_6301200);
var EventStr = "土石流及大規模崩塌,分洪警報,水庫放流,火山,火災,市話通訊中斷,交流道下地方連絡道淹水,地震,行動電話中斷,低溫,防空,林火危險度預警,河川高水位,空氣品質,急門診通報,枯旱預警,降雨,消防安全檢查重大不合格場所,海洋污染,海嘯,海灘水質,高速公路路況事件,高溫,停班停課,國家公園入園示警,國家森林遊樂區,強風,強風管制路段,淹水,疏散避難,堰塞湖警戒,傳染病,道路封閉,雷雨,颱風,濃霧,濃霧,輻射災害,鐵路事故,水位警示,水位警戒,水門資訊,水門資訊,地下道積淹水,區排警戒,開放路邊停車,開放臨時停車,道路施工,道路施工,停水,停水,捷運營運,捷運營運,捷運營運,捷運營運,捷運營運,電力中斷,鐵路事故,鐵路事故";
var VillageId = "";
var SeverityLevel = "";
var SeverityLevel = "";
var capdata_T300250_Extreme_6301200 ={};
capdata_T300250_Extreme_6301200.Newflag =false;
capdata_T300250_Extreme_6301200.Timestamp ='';
capdata_T300250_Extreme_6301200.Topic ='6301200';
capdata_T300250_Extreme_6301200.Datas =[];
function iniCapData_Json_T300250_Extreme_6301200(){
if(typeof($("#CapModule_T300250_Extreme_6301200").attr("id")) != "undefined"){var div = document.createElement('div');var ul = document.createElement('ul');  var FilterDataFlag = false;ul.id='portfolio';

                                var AlertImage = '';
                                $.each(capdata_T300250_Extreme_6301200.Datas, function (value, item) {
                                    let today = new Date();
                                    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes();
                                    let Expires = item.Expires;

                                    AlertImage = GetBannerImg(item.Code);
                                    var template = $('#TempID_T300250_Extreme_6301200').html();
                                    template = template
                                        .replace(/{{@Code}}/g, item.Code)
                                        .replace(/{{@Event}}/g, item.Event)
                                        .replace(/{{@AlertImage}}/g, AlertImage)
                                        .replace(/{{@Time}}/g, item.Time)
                                        .replace(/{{@OrgName}}/g, item.OrgName)
                                        .replace(/{{@LinkMore}}/g, item.LinkMore);
                       template = template.replace(/{{@Summary}}/g, item.Summary.slice(0,120));
 if(EventStr.indexOf(item.Event)!= '-1'){  
                              if (VillageId == '') {
                                  FilterDataFlag = true;
                              } else if (VillageId.indexOf(item.VillIDs) != '-1' || item.VillIDs.indexOf('all') != '-1') {
                                  FilterDataFlag = true
                                 }

                              if (FilterDataFlag) {
                                    if (SeverityLevel == '' || (SeverityLevel == 'Extreme' && item.Severity == SeverityLevel)) {
                                    if (Date.parse(date).valueOf() > Date.parse(Expires).valueOf()) {
                                  FilterDataFlag = false;
                              }   

                              } else {
                                        FilterDataFlag = false;
                                     }
                                }
                          if(FilterDataFlag){$(ul).append(template);}
                    }});if(!FilterDataFlag){

                                        var today = new Date();
            AlertImage = GetBannerImg('');
            var template = $('#TempID_T300250_Extreme_6301200').html();
            template = template
                .replace(/{{@Code}}/g, '')
												.replace(/{{@Event}}/g, '現無示警')
												.replace(/{{@AlertImage}}/g, AlertImage)
												.replace(/{{@Time}}/g, today.toString().substring(0, 19))
												.replace(/{{@OrgName}}/g, '更新')
												.replace(/{{@LinkMore}}/g, 'https://alerts.ncdr.nat.gov.tw');
            template = template.replace(/{{@Summary}}/g, '現在沒有示警');
										$(ul).append(template);
        }$(div).append(ul);$("#CapModule_T300250_Extreme_6301200").html("");$("#CapModule_T300250_Extreme_6301200").append($(div).html());
								$('ul#portfolio').innerfade({speed: 2000,timeout: 5000,type: 'sequence',containerheight: '100px'});
								}}
setInterval(AjaxCall_T300250_Extreme_6301200, 60000);setTimeout(AjaxCall_T300250_Extreme_6301200, 2000); function AjaxCall_T300250_Extreme_6301200() {
var suid1 = 'capdata_T300250';var suid2 = '_Extreme_';
var suid3 = '6301200';
if(suid3.length>7){suid3 = suid3.substring(0,7);}
var suid = suid1+suid2+suid3;
console.log(suid); var WebAPI= 'https://alertsmodule.ncdr.nat.gov.tw/DataWebAPI/api/CapData'+'?CapModuleType='+4+'&suid='+suid3+'&timeStamp='+capdata_T300250_Extreme_6301200.Timestamp+'&format=json&ApiKey=4F396657-28D6-4F84-A022-D651F85D1BEE';
 $.getJSON(WebAPI, function (data) {
                              if(data == null){
								var today = new Date();
								var Nodata = {};
								Nodata.Topic = capdata_T300250_Extreme_6301200.Topic;
								Nodata.Newflag = false;
								Nodata.Timestamp = '';
								Nodata.Datas = [{
									OrgName:'更新',
                                    UpdatedTime: today.toISOString().substring(0, 19),
									Summary: '現在沒有示警',
									Event: '現無示警',
									HeadLine: '',
									LinkMore: 'https://alerts.ncdr.nat.gov.tw',
									Code: ''
                                }];
        capdata_T300250_Extreme_6301200 = Nodata;
							}else{
                            if (data.Newflag) {         capdata_T300250_Extreme_6301200 = data;
								capdata_T300250_Extreme_6301200.Timestamp = data.Timestamp;
                            } else {
                                // alert('no change');
                            }}
                            iniCapData_Json_T300250_Extreme_6301200();
                        });} function GetBannerImg(Code){
								try{
                                        if(Code == '' || Code == null)
                                            return 'https://alerts.ncdr.nat.gov.tw/Images/todayIsGoodDay.png';
                                        else
                                            return 'https://alerts.ncdr.nat.gov.tw/Images/calamityIcon150Black_'+Code+'.png?version=1'
								}
								catch(e){
									return '';
								}
							}


