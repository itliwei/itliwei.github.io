
# 环境搭建

## 1. Homebrew 安装

Homebrew 官方文档 https://brew.sh/

Homebrew是 mac的包管理器，仅需执行相应的命令,就能下载安装需要的软件包，可以省掉自己去下载、解压、拖拽(安装)等繁琐的步骤。

安装方式：

**方法一：brew官网的安装脚本**

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

**方法二：brew 镜像安装脚本**

    /usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"

## 2. Git安装

Git教程：https://git-scm.com/

Git作为现在一统天下的代码仓库管理工具，基本上得到了普遍的使用。

  使用 brew install git 安装

  如果 brew 无法下载，官方下载链接为：https://git-scm.com/

设置Git：

    $ git config --global user.name "itliwei"

    $ git config --global user.email itliwei@163.com

## 3. maven安装

maven作为老牌的jar包仓库管理工具，目前使用的非常广泛，笔者目前就职的公司都是使用maven。

  使用 brew install maven 安装

  编辑setting.xml


## 4. 安装JDK

安装包地址：JDK1.8 https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

安装完以后记得进行环境变量的配置，并进行source，以生效，防止jdk版本混乱导致的问题。

    JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_40.jdk/Contents/Home
    PATH=$JAVA_HOME/bin:$PATH:.
    CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
    export JAVA_HOME
    export PATH
    export CLASSPATH

## 5. 安装IDE

作为如今如火如荼的IDEA开发IDE工具，基本上属于每一位工程师的选择。

直接在JetBrains官网下载最新版本，由于这是一个商业产品，可能会有证书认证问题。这个就看你怎么选择了，可以选择购买证书，也可以自己想办法破解。

傻瓜式安装，不做过多介绍。

安装好是第一步，安装后需要设置git、maven、jdk等的相关配置。

除此之外，最好设置一下代码风格、代码模板等。







