/**
 * 系统配置文件
 */
const path = require('path');

const config = {
  // 本地调试模式
  debug: true,
  // 网站名称
  sitename: 'EasyClub',
  // 板块列表
  tags: ['原创', '转载', '提问', '站务'],
  // 论坛管理员，username
  admins: ['dylan'],
  // 每页主题数量
  pageSize: 5, 
  // 显示页码数量
  showPageNum: 5,
  // 数据库连接
  mongodb: {
    username: '',
    password: '',
    host: '127.0.0.1',
    port: 27017,
    database: 'easyclub'
  },
  default_avatar: '/images/photo.png', // 默认头像
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/upload',
    extnames: ['jpeg', 'jpg', 'gif', 'png'],
    fileSize: 1024 * 1024
  }
  
}


module.exports = config;