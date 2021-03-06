// pages/tool/goodEvaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strData: "。。。",
  },

  /**
   * 生成按钮
   */
  btnGenerate: function(e) {
    this.setData({
      strData: getRandomArrayElements(ArrayGoodData, 100)
    })
  },

  /**
   * 返回按钮
   */
  bindBack: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      strData: getRandomArrayElements(ArrayGoodData, 100)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

var ArrayGoodData = [
  '终于收到我的宝贝了，东西很棒，物美价廉.',
  '说实话的，这次是我购物来让我最满意的一次购物。',
  '无论是店家的态度还是对宝贝，我都非常满意啊。',
  '店家态度很热情专业，可以说是有问必答。',
  '掌柜回复很迅速，我还问了不少问题，他都不觉得烦，而且都是认真回答我的。',
  '这点我向店家表示由衷的敬意，这样的好店铺可不多。',
  '这个商品正是我需要的，不得不竖起大拇指。',
  '收到宝贝的时候包装完整，打开后让我很是惊喜的是，这个商品比我想象中的还要棒。',
  '下次需要的时候我还会再来的，到时候麻烦店家给个优惠哦。',
  '掌柜发货很速度，过了几天天就到！',
  '东西收到了，很好哦，很喜欢，赞个。',
  '冲着好评这么多买的，收到后还是有惊喜的。',
  '便宜也是有好东西的，收藏了你的店铺，期待下次购物',
  '掌柜太善良了，真是干一行懂一行呀。',
  '很好的卖家。谢谢喽。我的同事们都很喜欢呢。下次再来哦。',
  '很难得的正品，网购以来最满意的了。',
  '老板性格好，宝贝也好，质量挺好的，速度也快。',
  '宝贝收到了，我超喜欢，做工质地都好得没话说。',
  '不错，希望下次合作，谢谢掌柜~~',
  '刚收到货，很好，物超所值。以后还来！',
  '店主服务很好，宝贝也很便宜，以后一定常来！',
  '确认晚了，不好意思，店家人很好。',
  '价格很优惠，服务也很，东西不错，给个好评此次鼓励。',
  '发货超快，只是我不在，没能及时签收。赞，赞。',
  '还是淘宝的东西好，比JD好多了。',
  '期盼之中，终于等到了心爱的东东。',
  '买到一件好东西不如遇到一个好老板，老板人品感觉不错！',
  '老板人真好，呵呵，也许是为了做生意吧，不过相比其他钻石店家来说很好啦。',
  '如果店家能一直保持这样的服务态度，相信很快就是皇冠了！',
];

// 随机获取指定指定长度的字符串
function getRandomArrayElements(arrData, cnt) {
  var arr = [].concat(arrData);
  var retStr = '';
  while (retStr.length < cnt) {
    let item = Math.floor(Math.random() * arr.length);
    retStr += arr.splice(item, 1);;
  }
  wx.setClipboardData({ data: retStr });
  return retStr;
}