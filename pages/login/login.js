// pages/login/login.js



/**
 *数据的初始化！将需要的数据进行初始化，在页面开始加载时候就显示需要的数据
 */


Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    userName: 'wenjie123',
    userPassword: '123'    // userName: '',
    // userPassword: '',
  },

  formSubmit: function (e) {
    this.setData({
      userName:'wenjie',
      userPassword:'123',
      userText:'登成功！'
    });
   console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}

    //获得表单数据
    var objData = e.detail.value;

    if (objData.userName && objData.userPassword) {
      // 同步方式存储表单数据
      wx.setStorageSync('userName', objData.userName);
      wx.setStorageSync('userPassword', objData.userPassword);

      //跳转到成功页面
      wx.navigateTo({
        url: 'pages/home/home'
      })
    }
  },


/***************分割线******************** */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userName = wx.getStorageSync('userName');//获取本地数据
    var userPassword = wx.getStorageSync('userPassword');

    console.log(userName);
    console.log(userPassword);
    if (userName) {
      this.setData({ userName: userName });
    }
    if (userPassword) {
      this.setData({ userPassword: userPassword });
    }
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