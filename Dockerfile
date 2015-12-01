FROM centos:centos6
RUN  yum install -y epel-release
RUN  yum install -y nodejs npm
COPY package.json /src/package.json
RUN cd /src; npm install
COPY . /src
CMD ["node", "/src/index.js"]