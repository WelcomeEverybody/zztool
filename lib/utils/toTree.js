/**
 * 转树形结构
 * @param {*} data
 * @param {*} pid   父级id
 */
export function toTree(data, pid) {
    let tree = [];
    let lookup = {};
    data.forEach((item) => {
        lookup[item.id] = Object.assign(Object.assign({}, item), { children: [] });
    });
    data.forEach((item) => {
        if (item[pid] === null) {
            tree.push(lookup[item.id]);
        }
        else {
            lookup[item[pid]].children.push(lookup[item.id]);
        }
    });
    return tree;
}
