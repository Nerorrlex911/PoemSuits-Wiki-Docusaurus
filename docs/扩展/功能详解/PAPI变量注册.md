---
sidebar_position: 9
---

# PAPI变量注册

NI Expansion提供了链式PAPI注册，示例如下：

```js
/**
 * 服务器开启后 及 ni reload后异步执行
 */
function enable() {
    // 调用PAPI变量注册
    placeholderExample()
}

/**
 * PAPI变量注册示例
 */
function placeholderExample() {
    /**
     * 新建一个名为test的papi变量
     * 你需要在最后通过.register()注册它
     * 在ni reload前, 所有脚本执行过disable后, 所有通过脚本注册的papi变量都会自动取消注册
     * 因此你需要注册就好, 不用担心后续的事情
     * 插件内部已经做过同步处理, 因此你可以放心异步执行注册
     * 插件内部已经做过兼容处理, 因此不安装PlaceholderAPI不会导致这段代码报错, 只会让它不生效
     */
    new Placeholder("test")
        // 设置变量作者, 默认为"unknown"(所以这行实际上不用写)
        .setAuthor("Neige")
        // 设置变量版本, 默认为"1.0.0"(所以这行实际上不用写)
        .setVersion("1.0.0")
        /**
         * 变量处理器
         *
         * @param player OfflinePlayer 当前玩家
         * @param params String 变量参数
         * @return String 变量返回值
         */
        .setExecutor(
            function(player, params) {
                // %test% 返回玩家名
                return player.name
            }
        )
        // 注册PAPI变量
        .register()
}
```

相信你能通过注释了解PAPI注册的全部内容，但为了兼顾你是个懒蛋的情况，我还要在此写一个最简单的PAPI注册：

```js
function enable() {
    placeholderExample()
}

function placeholderExample() {
    new Placeholder("test")
        .setExecutor(
            function(player, params) {
                // %test% 返回玩家名
                return player.name
            }
        )
        .register()
}
```

看不懂说明你有问题
