PIXI 是全局变量

PIXI.Application 创建一个 PIXI 的应用程序

document.body.appendChild(app.view) 把 pixi 渲染的这个视图放在 body 下面

PIXI.Sprite.fromImage('./') 取某路径下的图

sprit.anchor.set(0.5); 将锚点设置在图片的中心位置
将图片放置在屏幕的中心位置

app.tricker.add 添加动画
这个名称空间包含一个API，用于与 PIXI 的内部全局更新循环交互