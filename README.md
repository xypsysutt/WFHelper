# WFHelper

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/AshenOneYe/WFHelper) ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/AshenOneYe/WFHelper?include_prereleases) ![GitHub Pipenv locked Python version](https://img.shields.io/github/pipenv/locked/python-version/AshenOneYe/WFHelper) ![GitHub Pipenv locked dependency version](https://img.shields.io/github/pipenv/locked/dependency-version/AshenOneYe/WFHelper/dev/flake8) ![GitHub Pipenv locked dependency version](https://img.shields.io/github/pipenv/locked/dependency-version/AshenOneYe/WFHelper/dev/mypy)

世界弹射物语护肝宝，24小时自动混铃铛共斗

## 由于作者时间有限，不保证以下Readme随时保持最新，欢迎加群咨询！！！

## Feature

> + 轻量级项目，无需复杂CV库和深度学习库
> + 低开销，图片比对基于pHash匹配，有效提高运行效率，减少计算
> + 兼具高精度和容错率
> + 模块化，独立出config以便适配任何分辨率以及其他不同游戏，极具灵活性

## Usage

### 运行环境配置

> 1. 安装配置python3.9环境
> 2. 安装依赖库 `pip install -r requirements.txt`
> 3. 安装adb并配置adb到环境变量

### 配置文件

由于该项目泛用性较差，针对分辨率不同的设备，需要为其单独准备配置文件，目前项目中提供了~~两套~~（又加了一些）自用的配置文件，分别是1440x810分辨率dpi270的模拟器配置，以及一加9R手机的配置，~~可以开箱即用~~不保证100%能用，遇到问题请看完Readme自行解决，也可加群咨询；如果想要在其他分辨率下使用，可以参考`自定义配置文件`

#### 使用已有配置文件
以MUMU手游助手为例：
> 1. 设置模拟器分辨率为1440x810
> 2. 使用`adb connect 127.0.0.1:7555`连接模拟器
> 3. 使用`python \main.py -d 127.0.0.1:7555 -c configs\emulator1440x810\config.json`运行脚本


#### 自定义配置文件
参考给定的两个配置文件目录`emulator1440x810`和`oneplus9r`，将其中的截图替换为自己设备的对应的截图，具体来说
> 1. 首先使用`adb`连接自己的设备
> 2. 使用命令`python .\main.py -s path\of\picture.png`进行截图
> 3. 完成截图后在截图所在目录下新建`config.json`文件，并参考已有配置添加数据，其中`name`为这个`target`的名字，可自定义，`path`为截图的名称，`area`为想要点击的按钮在截图中的范围，分别为左上角x,y和右下角x,y，`text`为点击这个按钮时系统打印的文字信息，`action`代表检测到这个`target`时应该执行什么操作，目前支持`-c`即`click`,后面有个用于指定点击范围的参数，目前未实现功能直接填个null就行，还有`-w`即`wait`，指等待某个target出现，如等待返回按钮出现只需填它的name就行，例:["-w","返回"]，由于`-w`不稳定所以暂时不推荐使用。
> 4. 需要注意config文件必须和截图文件放在同一目录下

由于脚本的原理就是不停截图，判断是否目标区域是否出现了目标图片，然后进行点击，因此可以自行设计config来完成自己所需的任务，如好友开房，小号开灵车等等，而且适用于其他游戏。~~但是如果想要设计更加复杂的逻辑的话目前无法实现，比如点完某个按钮后必须要去点其他某个位置~~。（在做了在做了，引入了action字段用于解决这一问题，但是action种类较少，需要时间来补充）


### 运行脚本

对于1440*810的模拟器，完成运行环境配置后并连接`adb`后输入`python .\main.py`即可开始挂机。另外本项目即将提供web前端控制界面，目前处于实验阶段，开放端口8080作为服务器端口，可以通过 http://你的电脑ip:8080 访问后台，默认主页是你设备正在运行的截图，目前有获取log信息、点击屏幕以及开关脚本的功能~~请自行查看源码探索使用方法~~，有简单的UI可以查看日志、截图（可以点击，有间隔）和部分操作。


#### 参数说明
脚本提供了一些可配置的参数设置：
> 1. 当连接多个设备时使用`-d`参数来指定设备名称，设备名称可以通过`adb devices`获取，如`python .\main.py -d 127.0.0.1:7555`
> 2. 想要使用不同配置文件时，可以用`-c`参数指定配置文件路径，如`python .\main.py -c configs\emulator1440x810\config.json`，若不指定配置文件，默认的配置文件为`configs\emulator1440x810\config.json`，可以在`Config.py`中修改默认值
> 3. 本工具提供了截图功能，使用`-s`参数可以进行截图并直接保存到电脑，如`python .\main.py -s C:\Users\Admin\Desktop\test.png`


## 已知问题

使用过程中有任何问题或者有更好的想法欢迎提issue或者加群反馈！！！更欢迎来开车和踢罐，马上出超本了，护好您的肝！！！
![QQ群](pics/qqgroup.jpg)

### 某某图片/按钮无法识别的问题

经过测试，即使是相同的模拟器，在不同电脑上进行截图也会产生较大的颜色差距，目前主要集中在无法识别准备按钮，遇到这种情况自行截图并替换对应图片即可。

### 不同设备截图

该项目截图使用`adb shell screencap -p`并直接读取输出的二进制数据，但是发现直接读到的数据由于回车符的存在而无法直接被识别为图片，因此需要进行替换，对于一加9R，替换方式为将`\r\n`替换为`\n`，而对于模拟器替换方式则是`\r\r\n`替换为`\n`，不清楚会不会有其他的情况存在，所以目前的解决办法是两种都试试。


### MUMU多开

MUMU手游助手玩arm64游戏的时候使用的是标准引擎，游戏多开在同一引擎内进行，也就是说使用adb截图的话只能截图到其中一个，而且adb的地址和端口都是`127.0.0.1:7555`，无法区分不同客户端，所以目前无法实现同一模拟器同时挂两个脚本的功能，一个解决方法是放弃adb截图和点击控制，暂时没空搞这个。

### MUMU卡死

By snyssss：本人自用win11 64位系统下使用MUMU会出现图片内存释放不了，导致占用变高造成卡死的情况，所以写了蓝叠版的配置文件，可以尝试使用。目前配置为蓝叠中国64位，1280*720，DPI240。


## 效果如图
![Demo](pics/demo.jpg)

## 更新记录

### 2021/10/31
> + 增加config文件的action和name字段，可以为每个target指定需要执行的action，目前支持点击和等待两种
> + 增加Server功能，需要引入flask模块，使用`pip install flask`即可，启动脚本后可以通过在浏览器输入`http://电脑ip:8080`来远程查看模拟器运行状态