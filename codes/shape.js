var a = {x: 1, y: 2, z: 3};
var b = {x: 4, y: 5, z: 6};
// 0x03fb308ff1b9 <Object map = 0000015B2B2F9489>
// 0x03fb308ff2c1 <Object map = 0000015B2B2F9489>
// a, b shape相同

var a = {x: 1, y: 2, z: 3};
var b = {y: 3, x: 2, z: 4};
// 0x03a7049bf1b1 <Object map = 0000000D753F9489>
// 0x03a7049bf2b9 <Object map = 0000000D753F9579>
// a, b shape不同

function getX(obj) {
    return Runtime_Load(obj, "x");
}

function Runtime_Load(obj, key) {
    var desc = obj.map().instance_descriptors();
    var desc_number = -1;
    for (var i = 0; i < desc.length; i++) {
        if (desc.GetKey(i) === key) {
            desc_number = i;
            break;
        }
    }

    if (desc_number === -1) {
        return undefined;
    }

    var detail = desc.GetDetails(desc_number);
    if (detail.is_inobject()) {
        return obj.READ_FIELD(detail.offset());
    } else {
        return obj.properties().get(detail.outobject_array_index());
    }
}

function getX(obj) {
    return LoadIC_x(obj);
}

function LoadIC_x(obj) {
    if (obj.map() === cache.map) {
        if (cache.offset >= 0) {
            return obj.READ_FIELD(cache.offset);
        } else {
            return obj.properties().get(cache.index);
        }
    } else {
        return Runtime_LoadIC_Miss(obj, "x");
    }
}

function Runtime_LoadIC_Miss(obj, key) {
    cache = {map: obj.map()};
    if (detail.is_inobject()) {
        cache.offset = detail.offset();
    } else {
        cache.index = detail.outobject_array_index();
    }
}


function getX(obj) {
    return getById(obj, "x");
}

function getById(obj, key) {
    // 获取对象的shape中的字段
    var keys = obj.shape.keys;
    var foundKeyIndex = -1;

    // 遍历shape中的key找到offset
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
            foundKeyIndex = i;
            break;
        }
    }
    //没找到，返回
    if (foundKeyIndex === -1) {
        return undefined;
    }

    var keyDesc = keys[foundKeyIndex];
    // 调用方法取出对应offset的value
    return obj.READ_FIELD(keyDesc.offset);
}


function getX(obj) {
    return getById_with_inline_cache(obj, "x");
}

const getById_with_inline_cache = (function () {
    var cache = {
        shape: null,
        offset: -1
    };
    return function (obj, key) {
        if (obj.shape === cache.shape) {
            // shape和缓存的shape一致，直接用缓存的offset
            if (cache.offset >= 0) {
                return obj.READ_FIELD(cache.offset);
            }
        } else {
            // 省略和之前的getById 逻辑一致
            // ...
            var keyDesc = keys[foundKeyIndex];
            cache = {
                shape: obj.shape,
                offset: keyDesc.offset
            };
            return obj.READ_FIELD(keyDesc.offset);
        }
    }
})()

function Runtime_LoadIC_Miss(obj, key) {
    getById
    cache = {map: obj.map()};
    cache.offset = detail.offset();

}
