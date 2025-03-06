/**
 * 表示生物群系过滤条件的类
 */
export class BiomeFilter {
    filters: any[];
    /**
     * 添加一个逻辑条件组（如 any_of, all_of）
     * @param {"any_of" | "all_of"} logicType - 逻辑类型
     * @param {Array<Object>} conditions - 条件数组
     * @returns {BiomeFilter} 返回自身以支持链式调用
     */
    addLogicGroup(logicType: "any_of" | "all_of", conditions: Array<any>): BiomeFilter;
    /**
     * 添加一个简单条件（如 has_biome_tag）
     * @param {string} test - 测试类型（如 "has_biome_tag"）
     * @param {"==" | "!="} operator - 操作符
     * @param {string} value - 目标值（如 "overworld"）
     * @returns {BiomeFilter} 返回自身以支持链式调用
     */
    addSimpleCondition(test: string, operator: "==" | "!=", value: string): BiomeFilter;
    /**
     * 转换为 JSON 格式
     * @returns {Array<Object>} 返回生物群系过滤条件数组
     */
    toJson(): Array<any>;
}
