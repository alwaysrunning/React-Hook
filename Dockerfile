# 拉取基础镜像
FROM mirrors.tencent.com/cdpg/base-zhiyan-docker:pure
COPY ./scripts/nginx.conf /etc/nginx/nginx.conf
COPY ./scripts/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /data/release/websites/
# 拷贝打包后的文件到指定目录
COPY ./build /data/release/websites/

EXPOSE 80
#启动nginx
CMD ["nginx","-g","daemon off;"]