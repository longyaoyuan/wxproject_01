// pages/home/home.js
var app=getApp();

var helloData={
  name:'WeChat'
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
          '../images/xiaotu_01.png',
          '../images/gg_01.png',
          '../images/gg_02.png'
    ],
    indicatorDots: true,//显示切换的指示点
    autoplay: true,
    interval: 5000,
    duration: 1000,
    helloData
  },

/**
 * 在home页面注册一个事件
 */
  changeName:function(e){
  this.setData({
    name:'long'
  });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})