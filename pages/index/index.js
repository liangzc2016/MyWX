//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    messages:[
      {
        url:"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
        title:"商脉",
        message:'好的',
        num:2,
        time:'11:15',
        remove:false,
        flag:'/images/wechat.png'
      },
       {
        url:"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
        title:"甲乙",
        message:'好的',
        num:1,
        time:'11:08',
        remove:false,
        flag:'/images/wechat.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
