launchApp("今日校园");
sleep(1000);
while(!click("消息"));
sleep(1500);
while(!click("辅导员通知"));
sleep(500);
while(!click("未填写 >"));
sleep(500);
while(!click("硕士生"));
sleep(500);
while(!click("内地"));
sleep(500);
while(!click("36~37.2℃（正常体温）"));
sleep(500);
indexInParent(17).click();
sleep(500);
indexInParent(20).click();
sleep(500);
indexInParent(23).click();
sleep(500);
indexInParent(26).click();
sleep(500);
indexInParent(32).click();
sleep(500);
indexInParent(38).click();
sleep(500);
indexInParent(49).click();
sleep(500);
indexInParent(65).click();
sleep(500);
indexInParent(42).click();
sleep(500);
while(!click("江苏"));
sleep(500);
while(!click("确认"));
sleep(500);
indexInParent(44).click();
sleep(500);
while(!click("徐州市"));
sleep(500);
while(!click("确认"));
sleep(500);
indexInParent(46).click();
sleep(500);
while(!click("铜山区"));
sleep(500);
while(!click("确认"));
sleep(1500);
//text("确认已认真查看，且填写信息无误").click();
while(!click("已认真查看"));
sleep(1500);
while(click("辅导员"));
sleep(1500);
className("android.widget.Button").text("提交").click();
back();
sleep(500);
back();
sleep(500);
back();
