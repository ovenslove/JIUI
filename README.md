# JIUI
A simple FE UI library for every developers
### 简介
对于一名前端开发者来说，拥有一套属于自己的UI组件库莫过于是对自己最大的财富，
本项目的目的在于封装一些日常开发中经常用到的组件，是的代码得到更好的复用，提高开发效率，
拒绝重复造轮子，我们要一次性把所有零件造出来，让前端开发变的如同乐高游戏一样简单粗暴！

##### 项目内容
1. navbar-tab
    
    1. 底部tab
    ```
    <div class="ji-tab">
            <div class="ji-tab-panel">
                <div class="ji-tab-panel-body active"> 内容一</div>
                <div class="ji-tab-panel-body">内容二</div>
                <div class="ji-tab-panel-body"> 内容三</div>
                <div class="ji-tab-panel-body"> 内容四</div>
            </div>
            <div class="ji-navbar bottom-navbar">
                <div class="ji-navbar-item active">标签一</div>
                <div class="ji-navbar-item">标签二</div>
                <div class="ji-navbar-item">标签三</div>
                <div class="ji-navbar-item">标签四</div>
            </div>
        </div>
    ```
    2. 顶部tab
    ```
    <div class="ji-tab">
            <div class="ji-navbar top-navbar">
                <div class="ji-navbar-item active">标签一</div>
                <div class="ji-navbar-item">标签二</div>
                <div class="ji-navbar-item">标签三</div>
                <div class="ji-navbar-item">标签四</div>
            </div>
            <div class="ji-tab-panel">
                <div class="ji-tab-panel-body active"> 内容一</div>
                <div class="ji-tab-panel-body">内容二</div>
                <div class="ji-tab-panel-body"> 内容三</div>
                <div class="ji-tab-panel-body"> 内容四</div>
            </div>
        </div>
    ```