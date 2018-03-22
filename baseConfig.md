## svn

## eclipes

### eclipse 修改svn用户名密码
打开eclipse--->点击Window--->点击Perference，打开eclipse配置，输入svn,然后点击svn,找到下方svn接口，查看下svn是什么类型的接口
- JavaHL 删除 C:\Users\Administrator\AppData\Roaming\Subversion\auth 里面的文件
- svnkit 删除eclipse ,configuration--->org.eclipse.core.runtime

## git
git init 
git add .
git commit -m ''
git push

## java
安装jdk
环境变量 JAVA_HOME PATH

## node 

## mysql 5.7.21压缩包安装
1、官网下载社区版

2、解压缩到C盘：C:\mysql-5.7.21-winx64

3、以管理员身份运行命令行，进入目录C:\mysql-5.7.21-winx64\bin

4、注册服务：C:\mysql-5.7.21-winx64\bin>mysqld install mysql5.7.21

5、初始化数据库：C:\mysql-5.7.21-winx64\bin>mysqld --initialize

6、启动数据库：C:\mysql-5.7.21-winx64\bin>net start mysql5.7.21

7、登录数据库：C:\mysql-5.7.21-winx64\bin>mysql -u root -p

注意，登录密码从mysql安装目录*.err文件中找，例如标红字符：2018-01-17T09:26:11.260249Z 1 [Note] A temporary password is generated for root@localhost: _=(H,?pX.7yZ

8、修改root用户密码：C:\mysql-5.7.21-winx64\bin>mysqladmin -uroot -p_=(H,?pX.7yZ password 1234
二、MySQL配置

1、 自行创建C:\mysql-5.7.21-winx64\my.ini，文件内容如下：

```
[mysqld]
#设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=C:\mysql-5.7.21-winx64
# 设置mysql数据库的数据的存放目录
datadir=C:\mysql-5.7.21-winx64\data
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 设置成严格模式
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
```
