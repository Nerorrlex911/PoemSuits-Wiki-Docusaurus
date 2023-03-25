---
sidebar_position: 6
---

# Maven依赖

NI Expansion提供了Maven依赖/本地依赖引入功能，示例如下：

```js
function enable() {
    /**
     * @param 存放位置(默认为libs)
     * @param 组ID
     * @param 项目ID
     * @param 项目版本
     * @param 待选maven仓库链接(默认为maven中心仓库及阿里云仓库)
     */
    new MavenDependency(
        "libs",
        "com.fasterxml.jackson.core",
        "jackson-core",
        "2.14.2",
        [
            "https://maven.aliyun.com/repository/public",
            "https://repo.maven.apache.org/maven2"
        ]
    ).load()

    /**
     * @param 组ID
     * @param 项目ID
     * @param 项目版本
     * @param 待选maven仓库链接(默认为maven中心仓库及阿里云仓库)
     */
    new MavenDependency(
        "com.fasterxml.jackson.core",
        "jackson-core",
        "2.14.2",
        [
            "https://maven.aliyun.com/repository/public",
            "https://repo.maven.apache.org/maven2"
        ]
    ).load()

    /**
     * @param 组ID
     * @param 项目ID
     * @param 项目版本
     * @param 待选maven仓库链接(默认为maven中心仓库及阿里云仓库)
     */
    new MavenDependency(
        "com.fasterxml.jackson.core",
        "jackson-core",
        "2.14.2",
        "https://maven.aliyun.com/repository/public"
    ).load()

    /**
     * @param 组ID
     * @param 项目ID
     * @param 项目版本
     */
    new MavenDependency(
        "com.fasterxml.jackson.core",
        "jackson-core",
        "2.14.2"
    ).load()

    /**
     * @param 文件路径
     */
    new LocalDependency("plugins\\NeigeItems\\libs\\com.expression.parser-3.3.0.jar").load()
}
```

而一般情况下, 你只会用到这三种方式加载：

```js
function enable() {
    new MavenDependency(
        "com.fasterxml.jackson.core",
        "jackson-core",
        "2.14.2",
        "https://maven.aliyun.com/repository/public"
    ).load()

    new MavenDependency(
        "com.fasterxml.jackson.core",
        "jackson-core",
        "2.14.2"
    ).load()

    new LocalDependency("plugins\\NeigeItems\\libs\\com.expression.parser-3.3.0.jar").load()
}
```

需要注意的是, 这种加载方式不会自动加载依赖的依赖

比如`jackson-databind`前置需求`jackson-core`和`jackson-annotations`

错误的加载方式:

```js
function enable() {
    new MavenDependency("com.fasterxml.jackson.core", "jackson-databind", "2.14.2").load()
}
```

正确的加载方式:

```js
function enable() {
    new MavenDependency("com.fasterxml.jackson.core", "jackson-core", "2.14.2").load()
    new MavenDependency("com.fasterxml.jackson.core", "jackson-annotations", "2.14.2").load()
    new MavenDependency("com.fasterxml.jackson.core", "jackson-databind", "2.14.2").load()
}
```
