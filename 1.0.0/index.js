var $ = require('node').all;
var Base = require('base');

var EffectPaginations = Base.extend({
    initializer: function(){
        var self = this;
        var $target = self.get('$target');
    },
    _render: function(){

        var self = this;
        var container$ = self.$boxHook;

        moveByMouse(container$);

        function moveByMouse(container$, callback){
            var pageAnimateTimer = false,
                moveByMouseInit = false;
            var curPageSpan$ = $('.page-cur'),
                curPageItem$ = curPageSpan$.parent('.item'),
                itemWithMask$ = null;
            container$.delegate('mouseenter', '.item', function(ev){
                pageAnimateTimer && pageAnimateTimer.stop(false);
                var currentItem$ = $(ev.currentTarget);
                var endX = currentItem$.offset().left - container$.offset().left,
                    endWidth = currentItem$.width(),
                    mask$ = null;
                if(!moveByMouseInit){
                    moveByMouseInit = true;
                    container$.css('position', 'relative');
                    var initX = curPageItem$.offset().left - container$.offset().left,
                        width = curPageItem$.width(),
                        height = curPageItem$.height();
                    mask$ = $('<div id="mask" style="border:2px solid #6D3053;z-index:999;position:absolute;width:' + width +'px;height:' + height +'px;left:' + initX +'px"></div>');
                    container$.prepend(mask$);
                }else{
                    mask$ = container$.all('#mask');
                }
                pageAnimateTimer = mask$.animate({
                    left : endX,
                    width : endWidth
                },{
                    duration : 0.1,
                    complete : function(){
                        mask$.css('z-index','1');
                        itemWithMask$ = currentItem$;
                    }
                });
            });

            container$.delegate('mouseleave', '.item', function(ev){
                pageAnimateTimer.isRunning() && pageAnimateTimer.stop(true);

                var currentTarget$ = $(ev.currentTarget);
                var endX = curPageItem$.offset().left - container$.offset().left,
                    mask$ = container$.all('#mask');
                pageAnimateTimer = mask$.animate({
                    left : endX
                },{
                    duration : 0.1,
                    complete : function(){
                        mask$.remove();
                        moveByMouseInit = false;
                    }
                });
            });
        }
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        $boxHook: {
            value: '.pagination-page'
        }
    }
});

module.exports = EffectPaginations;



