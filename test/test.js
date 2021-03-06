
//var assert = require('assert');
//require('../src/core/object');
//require('../src/core/array');

describe('tmlib Test', function() {
    it('tm.BROWSER', function() {
        assert.equal(tm.BROWSER, "Chrome");
    });
});



describe('List Test', function() {
    
    var l = tm.List();
    var arr = [ "first", "second", "third" ];
    
    it('test', function() {
        l.add("first");
        l.add("second");
        l.add("third");
        
        assert.equal(l.get(0), "first");
        assert.equal(l.get(1), "second");
        assert.equal(l.get(2), "third");
        
        // console.log(l.toString());
        l.remove(0);
        // console.log(l.toString());
        l.remove(0);
        // console.log(l.toString());
        l.remove(0);
        // console.log(l.toString());
        
        assert.equal(l.toString(), "");
    });
    
});


describe('Vector2 Test', function() {
    
    var Vector2 = tm.geom.Vector2;
    
    
    // --------------------------------
    // 初期化
    
    describe('init', function() {
        
        it('init', function() {
            var v  = tm.geom.Vector2(0, 1);
            assert(v.equalsNumber(0, 1));
        });
        
    });
    
    
    // --------------------------------
    // クローン
    
    describe('clone', function() {
        
        it('clone', function() {
            var v  = tm.geom.Vector2(0, 1);
            var v2 = v.clone();
            assert(v2.equalsNumber(0, 1));
        });
        
    });
    
    // --------------------------------
    // 比較
    
    
    describe('equals', function() {
        
        it('equals', function() {
            var v  = tm.geom.Vector2(3, 4);
            var v2 = tm.geom.Vector2(3, 4);
            assert(v.equals(v2));
        });
        
        it('equalsNumber', function() {
            var v  = tm.geom.Vector2(3, 4);
            assert(v.equalsNumber(3, 4));
        });
        
        it('equalsArray', function() {
            var v  = tm.geom.Vector2(3, 4);
            assert(v.equalsArray([3, 4]));
        });
        
    });
    
    // --------------------------------
    // セッター
    
    
    
    describe('setter', function() {
        
        it('set', function() {
            var v  = tm.geom.Vector2();
            v.set(0, 1);
            assert(v.equalsNumber(0, 1));
        });
        
        it('setNumber', function() {
            var v  = tm.geom.Vector2();
            v.setNumber(2, 1);
            assert(v.equalsNumber(2, 1));
        });
        
        it('setObject', function() {
            var v  = tm.geom.Vector2();
            v.setObject({
                x: 2,
                y: 1,
            });
            assert(v.equalsNumber(2, 1));
        });
        
        it('setString', function() {
            var v  = tm.geom.Vector2();
            
            v.setString("(6, 7)");
            assert(v.equalsNumber(6, 7));
        });
        
        it('setSmart', function() {
            var v  = tm.geom.Vector2();
            
            v.setSmart(6, 7);
            assert(v.equalsNumber(6, 7));
            
            v.setSmart([9, 10]);
            assert(v.equalsNumber(9, 10));
            
            v.setSmart({x:12, y:13});
            assert(v.equalsNumber(12, 13));
            
            v.setSmart("(15.012,-16.125)");
            assert(v.equalsNumber(15.012, -16.125));
        });
        
        it('setAngle', function() {
            var v  = tm.geom.Vector2();
            
            v.setAngle(0);
            
            assert(v.equalsNumber(1, 0));
        });
        
        it('setRadian', function() {
            var v  = tm.geom.Vector2();
            
            v.setRadian(Math.PI);
            v.x = v.x.round();
            v.y = v.y.round();
            
            assert(v.equalsNumber(-1, 0));
        });
        
        it('setDegree', function() {
            var v  = tm.geom.Vector2();
            
            v.setDegree(270);
            v.x = v.x.round(1);
            v.y = v.y.round(1);
            
            assert(v.equalsNumber(0, -1));
        });
        
        it('setRandom', function() {
            var v  = tm.geom.Vector2();
            
            v.setRandom(0, 1, 1);
            // v.setRandom(0, 360, 1);
            
            v.x = v.x.round(1);
            v.y = v.y.round(1);
            
            assert(v.equalsNumber(1, 0));
        });
    });
    
    
    // --------------------------------
    // 演算
    
    describe('operator', function() {
        
        it('add', function() {
            var v  = tm.geom.Vector2(4, 8);
            
            v.add( tm.geom.Vector2(8, 4) );
            assert(v.equalsNumber(12, 12));
        });
        
        it('sub', function() {
            var v  = tm.geom.Vector2(4, 8);
            
            v.sub( tm.geom.Vector2(8, 4) );
            assert(v.equalsNumber(-4, 4));
        });
        
        it('mul', function() {
            var v  = tm.geom.Vector2(4, 8);
            
            v.mul(4);
            assert(v.equalsNumber(16, 32));
        });
        
        it('div', function() {
            var v  = tm.geom.Vector2(4, 8);
            
            v.div(4);
            assert(v.equalsNumber(1, 2));
        });
        
        it('negate', function() {
            var v  = tm.geom.Vector2(4, 8);
            
            assert( v.negate().equalsNumber(-4, -8) );
        });
        
    });
    
    
    // --------------------------------
    // 汎用
    
    describe('util', function() {
        
        it('length', function() {
            var v  = tm.geom.Vector2(3, 4);
            assert( v.length() == 5 );
        });
        
        it('lengthSquared', function() {
            var v  = tm.geom.Vector2(3, 4);
            assert( v.lengthSquared() == 25 );
        });
        
        it('distance', function() {
            var v  = tm.geom.Vector2(3, 4);
            var v2 = tm.geom.Vector2(3, 6);
            assert( v.distance(v2) == 2 );
        });
        
        it('distanceSquared', function() {
            var v  = tm.geom.Vector2(3, 4);
            var v2 = tm.geom.Vector2(3, 6);
            assert( v.distanceSquared(v2) == 4 );
        });
        
        
        it('normalize', function() {
            var v  = tm.geom.Vector2(3, 4);
            
            v.normalize();
            
            assert( v.length() == 1 );
            assert( v.equalsNumber(0.6, 0.8) );
        });
        
        it('dot', function() {
            var va  = tm.geom.Vector2(1, 0);
            var vb  = tm.geom.Vector2(4, 4);
            
            assert( tm.geom.Vector2.dot(va, vb) === 4 );
        });
    
        
        it('cross', function() {
            var va  = tm.geom.Vector2(1, 0);
            var vb  = tm.geom.Vector2(4, 4);
            
            assert( tm.geom.Vector2.cross(va, vb) === 4 );
        });
        
    });
    
    
    // --------------------------------
    // 変換系
    
    describe('convert', function() {
        
        it('toAngle', function() {
            var v  = tm.geom.Vector2(4, 4);
            assert( Math.radToDeg(v.toAngle()) == 45 );
        });
        
        it('toStyleString', function() {
            var v  = tm.geom.Vector2(3, 4);
            assert( v.toStyleString() == "{x:3, y:4}" );
        });
        
        it('toString', function() {
            var v  = tm.geom.Vector2(3, 4);
            assert( v.toString() == "{x:3, y:4}" );
        });
        
    });
    
    
});






describe('Vector3 Test', function() {
    
    it('init', function() {
        var v  = tm.geom.Vector3(0, 1, 2);
        assert(v.equals(0, 1, 2));
    });
    
    it('set', function() {
        var v  = tm.geom.Vector3();
        v.set(0, 1, 2);
        assert(v.equals(0, 1, 2));
    });
    
    it('setNumber', function() {
        var v  = tm.geom.Vector3();
        v.setNumber(2, 1, 0);
        assert(v.equals(2, 1, 0));
    });
    
    it('setObject', function() {
        var v  = tm.geom.Vector3();
        v.setObject({
            x: 2,
            y: 1, 
            z: 0
        });
        assert(v.equals(2, 1, 0));
    });
    
    it('setString', function() {
        var v  = tm.geom.Vector3();
        
        v.setString("(6, 7, 8)")
        assert(v.equals(6, 7, 8));
    });
    
    it('setSmart', function() {
        var v  = tm.geom.Vector3();
        
        v.setSmart(6, 7, 8);
        assert(v.equals(6, 7, 8));
        
        v.setSmart([9, 10, 11]);
        assert(v.equals(9, 10, 11));
        
        v.setSmart({x:12, y:13, z: 14});
        assert(v.equals(12, 13, 14));
        
        v.setSmart("(15.012,-16.125, 17.55)");
        assert(v.equals(15.012, -16.125, 17.55));
    });
    
});










describe('Matrix33 Test', function() {

    
    /*
    var mat = tm.geom.Matrix33(
        1, 3, 1,
        1, 1, 2,
        2, 3, 4
    );
    
       // 2.000   9.000  -5.000
       // 0.000  -2.000   1.000
      // -1.000  -3.000   2.000
      
    // |2, -9, -5|
    // |0, -2, -1|
    // |-1, 3, 2|
    
    var invert = mat.clone();
    invert.invert();
    console.log((invert).toString());
    console.log(mat.multiply(invert).toString());
    */
    

    
});











