//1.导入http模块
const http = require('http');
//2.创建服务对象
const server = http.createServer(
    (request, response) => {
        response.end('Hello HTTP Server');
        //设置响应体
    });
//3.监听端口，启动服务
server.listen(9000, () =>{
    console.log(('服务已经启动...'));
});

// 7.3注意事项
// 1.命令行ctr1+c停止服务
// 2.当服务启动后，更新代码必须重启服务才能生效
// 3.响应内容中文乱码的解决办法
// response.setHeader('content-type','text/html;charset=utf-8');
// 4.
// 端口号被占用
// Error:listen EADDRINUSE:address already in use ::9000
// 1)关闭当前正在运行监听端口的服务（使用较多）
// 2)修改其他端口号
// 5.HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000,8080,8090，
// 9000等
// 如果端口被其他程序占用，可以使用资源监视器找到占用端口的程序，然后使用任务管理器关闭对应的程序