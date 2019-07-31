var a = { x: 1, y: 2, z: 3 };
var b = { x: 4, y: 5, z: 6 };
// 0x03fb308ff1b9 <Object map = 0000015B2B2F9489>
// 0x03fb308ff2c1 <Object map = 0000015B2B2F9489>
// a, b shape相同

var a = { x: 1, y: 2, z: 3 };
var b = { y: 3, x: 2, z: 4 };
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
    cache = {map : obj.map()};
    if (detail.is_inobject()) {
        cache.offset = detail.offset();
    } else {
        cache.index = detail.outobject_array_index();
    }
}
