---
sidebar_position: 10
---

# Bukkit任务注册

NI Expansion提供了链式任务注册，示例如下：

```js
/**
 * 服务器开启后 及 ni reload后异步执行
 */
function enable() {
    // 调用Bukkit任务
    taskExample()
}

/**
 * Bukkit任务注册示例
 */
function taskExample() {
    /**
     * 新建一个Bukkit任务
     * 你需要在最后通过.register()注册它
     * 在ni reload前, 所有脚本执行过disable后, 所有通过脚本注册的Bukkit任务都会自动取消注册
     * 因此你需要注册就好, 不用担心后续的事情
     * 插件内部已经做过同步处理, 因此你可以放心异步执行注册
     */
    new Task()
        // 设置任务中你要执行的代码
        .setTask(
            function() {
                print(Bukkit.isPrimaryThread())
            }
        )
        // 设置任务执行间隔(不设置的话任务只会执行一次)
        .setPeriod(10)
        // 设置任务执行延迟(不设置的话任务会立即执行)
        .setDelay(10)
        // 设置任务是否异步执行(不设置的话任务将同步进行)
        .setAsync(true)
        // 注册Bukkit任务
        .register()
}
```

相信你能通过注释了解任务注册的全部内容，但为了兼顾你是个懒蛋的情况，我还要在此写一个最简单的任务注册：

```js
function enable() {
    taskExample()
}

function taskExample() {
    new Task()
        .setTask(
            function() {
                print(1233211234567)
            }
        )
        .register()
}
```

看不懂说明你有问题
