---
slug: about-lnelab
title: 关于LNE Lab
author: Leon Sun
author_title: Hardware Engineer @ LNE Lab
author_url: https://github.com/lisun0410
author_image_url: https://avatars.githubusercontent.com/u/7287598?s=400&v=4
tags: [LNE Lab, introduce]
---

各位好，
欢迎来到LNE Lab的网站，想了解我们这个组织以及我们的愿景的朋友可以继续往下看。
## LNE Lab的诞生
Nathan和我是在2016年认识的，而第一次在键盘上合作就已经是在2020年3月了，当时承接了虚线的Vista65的BLE版本的PCB和程序的设计，PCB初版打样留了LeonsunDesign的logo丝印，拿到PCB完整调试好功能的时候，我就萌发了要和Nathan组成一个Team。2020年4月，当Vista65正式版的PCB上出现LNE LAB的沉金丝印，标志着LNE Lab正式成立了。

<img src="/img/V65_logo.JPG" />

## LINK初萌芽

为了能够更好的服务客制化用户，对于键盘改键这个功能我们也思考了很多，当时市面上无非就是两种类型：
- TKG及其衍生系列：使用网页在线生成hex文件并进行烧录
- VIA及其魔改版本：离线软件直接导入文件进行实时修改

显然，这两类都不是我们需要的。
一款在插入USB接口之后，能直自动识别设备，并且通过简单操作就能修改键盘配置的软件[LINK](https://github.com/ln-org/lne_link)就诞生了。Nathan从2020年11月开始的LNE HUB（LINK的曾用名） 1.0.2版本一步一步更新到了今天的LINK 1.3.1版本，真的非常让人佩服。
<img src="/img/lighting_en.png"/>

与LINK完成适配的主要是我们的自研键盘，既有单模的Meowtool X1和EXAO，也有蓝牙4.x方案的EVILPAD和Vista65，还有蓝牙5.x方案的LINKPAD。

#### LNE Lab自研键盘列表
- [ALF VISTA65 Dual-Mode](https://www.zfrontier.com/app/eqp/nPA5rJDV172R)
- EVIL Pad
- Naradin EXAO
- [SiRius MeowTool X1](https://www.zfrontier.com/app/eqp/pkjVK5oPDzZR)
- [SiRius LINKPAD](https://www.zfrontier.com/app/eqp/pO881j49aBE0)

然而，LINK的设计远景不仅仅是满足自己需要，也想为更多的客制化的伙伴们提供便利，因此非常荣幸，我们推出了**LNE伙伴计划**，陆续有很多朋友先后成为了我们的伙伴，完成了键盘和LINK程序的适配使用。

#### LNE伙伴键盘列表
- [Atlantis AK21](https://www.zfrontier.com/app/flow/40bOYxwr0Jqo)
- [BIOI Percent Skog Reboot](https://www.zfrontier.com/app/eqp/RKyxYJ69ygz0)
- [KBDfans DZ60RGB ANSI](https://www.zfrontier.com/app/eqp/RAjVwNPmGq9p)
- [SiRius Uni660](https://www.zfrontier.com/app/eqp/0jW73G5w4Nwn)


## 软硬件方案

我们发现很多团长有非常强的协调能力和商业头脑，但是在对键盘PCB和对应程序开发上缺乏一些技术支撑，LNE Lab立足于产品软件开发的同时，在硬件设计上也可以提供强大支持。目前已经可以支持单模、蓝牙4.0双模以及蓝牙5.0双模三类方案的开发。

### 单模方案

单模方案是很多讲究经济性的的项目首选，由于它的受众更广泛，更低的使用复杂度，以及向国外贩售更为方便（双模有电池的运输和认证要求，国外单独采购比较麻烦）。

#### 单模方案可以在以下特性中进行选择：
- USB接口连接方式
  - 板载USB TYPE C接口（USB mini和micro接口用的较少后续不再推荐优选）
  - 独立USB TYPE C接口小板（安装位置不受轴板安装位置）
  - 航空插头
- 灯光类
  - 单色 轴灯
  - RGB 轴灯
  - RGB 氛围灯
  - RGB 单点亮（开发中）
- 轴连接方式
  - 焊接式
  - 热插拔（kailh系）
  - 热插拔（millmax系）
- PCB颜色和表面
  - 绿/蓝/红/黄/白/哑光黑/哑光绿
  - 沉金/喷锡

### 蓝牙双模方案

蓝牙双模方案是相对更高阶用户和团长的选择，在使用上会比普通有线键盘更容易在桌面打理上有更好的效果。LNE Lab针对蓝牙先后开发了蓝牙4.0和蓝牙5.0两个系列，来满足对续航要求的需要。蓝牙双模方案可以在单模基础上有更多的特性可以选择。

#### 双模方案可以在以下特性中进行选择：
- 电源方案
  - 不带锂电池开关
  - 保留锂电池开关
  - 操作系统上电量提醒
  - 键盘电量消耗规划
- 蓝牙特性
  - 蓝牙4.0系列
  - 蓝牙5.0系列（功耗控制比普通4.0更好）
  - 蓝牙信道选择


## 结语
LNE Lab成立的初衷就是为了帮助客制化用户能够更好的感受客制化魅力，为协助更多的团长能够更完美的达到自己的设计目标，更专注的完成自己的开团组织工作，为客制化助力就是LNE Lab成立的愿景。

欢迎加入我们的QQ群:1107582873与我们一起讨论。


