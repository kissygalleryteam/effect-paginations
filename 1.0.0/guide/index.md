## 综述

EffectPaginations。  
淘宝动效分页组件，仅实现动效，不关心分页逻辑。

## 初始化组件
		
    S.use('kg/effect-paginations/1.0.0/index,kg/effect-paginations/1.0.0/index.css', function (S, EffectPaginations) {
        
        var effectPaginations = new EffectPaginations({
            boxHook: '.pagination-page',
            childHook: '.item',
            curChildHook: '.item-sel'
        });

        effectPaginations.on('start',function(){
            console.log('start');
        });
        effectPaginations.on('end',function(){
            console.log('end');
        });

    })

## API说明

组件不依赖指定的分页dom结构。  
使用组件时需要指定如下参数
  
  ＊ boxHook 组件容器钩子，用作页面代理
  ＊ childHook 单个分页按钮钩子
  ＊ curChildHook 选中分页按钮钩子

注：如果页面有多个分页组件，建议每个分页组件用不同钩子区分，初始化多个 EffectPaginations