# 数据结构


## SkipList

## Bitmap

可以理解用位(Bit)来表示数据， 1个字节是8位， 可以存储8个连续的整数， 内存空间充分利用。 每一位 1表示有数据， 0 表示没有数据。

## LSM

LSM被设计来提供比传统的B+树或者ISAM更好的写操作吞吐量，通过消去随机的本地更新操作来达到这个目标。

LSM是当前被用在许多产品的文件结构策略：HBase, Cassandra, LevelDB, SQLite,甚至在mangodb3.0中也带了一个可选的LSM引擎（Wired Tiger 实现的）。


