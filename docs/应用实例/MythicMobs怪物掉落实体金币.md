---
sidebar_position: 2
---

# MythicMobs怪物掉落实体金币

效果：

![](_images/金币.gif)

需配置以下文件：

plugins\PoemSuits\Expansions\金币.js

```js
function enable() {
    // 监听物品合并事件
    new Listener(Packages.org.bukkit.event.entity.ItemMergeEvent.class)
        .setPriority(EventPriority.LOWEST)
        .setExecutor(
            function(event) {
                async(function() {
                    loadItem(event.getTarget())
                })
            }
        )
        .register()

    // 监听物品生成事件
    new Listener(Packages.org.bukkit.event.entity.ItemSpawnEvent.class)
        .setPriority(EventPriority.LOWEST)
        .setExecutor(
            function(event) {
                async(function() {
                    loadItem(event.getEntity())
                })
            }
        )
        .register()
}

function getItemName(itemStack) {
    // 检测NI物品
    const itemInfo = ItemUtils.isNiItem(itemStack, true)
    if (itemInfo == null) return null

    // 获取节点信息
    const data = itemInfo.data

    // 进行节点判断
    if (data == null) return null
    if (data["金币数量"] != null) {
        return HookerManager.getParsedName(itemStack)
    }
    return null
}

function loadItem(item) {
    // 设置物品显示名
    const itemName = getItemName(item.getItemStack())
    if (itemName != null) {
        item.setCustomName(getItemName(item.getItemStack()))
        item.setCustomNameVisible(true)
    }
}
```

plugins\PoemSuits\ItemActions\金币.yml

```yaml
金币:
  pick:
    cooldown: 0
    consume:
      condition: |-
        global.amount = itemStack.amount + ""
        true
      amount: <amount>
    sync:
    - 'giveMoney: <fastcalc::<data::金币数量>*<amount>>'
    - 'tell: §e[NI] §6恭喜你获得了 <fastcalc::<data::金币数量>*<amount>> 金币'
```

plugins\PoemSuits\Items\金币.yml

```yaml
金币:
  material: GOLD_NUGGET
  name: §e<金币数量> 金币
  sections:
    # 定义获取的金币数量
    金币数量: 100
```

plugins\MythicMobs\Mobs\金币.yml

```yaml
金币测试1:
  Type: ZOMBIE
  Health: 1
  PoemSuits:
    Drops:
    # 金币 掉落1个 100%概率掉落
    - 金币 1 1
金币测试2:
  Type: ZOMBIE
  Health: 1
  PoemSuits:
    Drops:
    # 金币 掉落1个 100%概率掉落 每个物品都重复随机(该配置用不到这个, 不用理解) 将金币数量更改为1000
    - 金币 1 1 true {"金币数量":"1000"}
金币测试3:
  Type: ZOMBIE
  Health: 1
  PoemSuits:
    Drops:
    # 金币 掉落1个 50%概率掉落
    - 金币 1 0.5
```