# 核心能力

:::tip

LSM树(Log-Structured-Merge-Tree)的名字往往会给初识者一个错误的印象，事实上，LSM树并不像B+树、红黑树一样是一颗严格的树状数据结构，它其实是一种存储结构。

:::right


:::

## 起源

LSM-tree起源于 1996 年的一篇论文《The Log-Structured Merge-Tree (LSM-Tree)》

先看名字，log-structured，日志结构的，日志是软件系统打出来的，就跟人写日记一样，一页一页往下写，而且系统写日志不会写错，所以不需要更改，只需要在后边追加就好了。各种数据库的写前日志也是追加型的，因此日志结构的基本就指代追加。注意他还是个 “Merge-tree”，也就是“合并-树”，合并就是把多个合成一个。

## 特点



