// 这种情况一般我们会再开一个 webworker 来做监听， 页面的主进程和UI渲染进程是绑定的
// 所以在页面失焦点的时候渲染都停止了，在webworker中不受这个渲染进程的限制，可以不停的计算，
// 算好当下确定的UI位置大小， message给主页面， 页面聚焦回来的时候拿到的位置大小等信息就没有问题了
