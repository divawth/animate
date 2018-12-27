#!/bin/sh
set -e

# # 七牛同步
# # 需要同步的文件路径: public/*
# # 同步到的bucket: keep-web
# # 保留源文件路径
# # 同步后的文件路径前缀: vuessr/
qupload qupload 100 qupload.json

cd public
# # 把需要发布的文件放到一个 tar 包里
echo "make the tarball of all needed:"
touch ../vue-ssr.tar
tar cf ../vue-ssr.tar \
    --exclude=./vue-ssr.tar \
    ./

echo "build success"

exit 0
