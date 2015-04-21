KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('effect-paginations', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/effect-paginations/1.0.0/']});