// 演示需要的 mock 数据
export const mouseRightData = [{
    text: '弹出alert',
    action: (info) => {
        alert(`传入的数据为：${info}`);
    },
}];

export const testData = (() => {
    let result = [];
    for (let i = 0; i < 100; i++) {
        result.push(`测试数据${i}`);
    }
    return result;
})();
