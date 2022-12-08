# 大厂 HTML5 作品欣赏

- background-size
    1. 移动端rem w h 是多样的 而PC端没有这个问题
    2. 移动端 retina 3倍retina  (所谓Retina是一种显示技术，可以将把更多的像素点压缩至一块屏幕里)
        40X40 80X80 120X120
        200X200
    3. background-size:cover（把背景图片填满整个容器等比例缩放，超出则剪裁） 背景图片大小
        contain 

- 库文件引入的位置
    1. css 放到head 里
    css 应该尽早的参与网页的渲染  
    2. js放在body 最下面， 会阻塞页面渲染
- swiper 滑动组件库的使用
    1. 引入swiper 组件库
    2. 固定的HTML结构
        。swiper-container(滑动区域大小) > .swiper-wrapper > .swiper-slide
    3. new Swiper(selsctor, {
        direction:''
    })
    translate3d(-50%,0,0) 3d 启动3d加速器 GPU渲染
    translate(-50%,0) 2d
    效果一样


- 使用linear-gradient 生成背景图片
    1. 颜色渐变的图片，#f8ddd1,#faece5 73%,#fad2c0
    colorSto
    2. 性能优化， 图片 下载比较大
    css 写的，不需要额外的下载
    img src 下载+显示
    3. 下载越多，http 并发数越多，卡
          马路 

        