from flask import url_for,render_template,redirect,make_response,request
import threading


def setRouter(server):

    app = server.app

    @app.route("/")
    def index():
        return render_template('index.html')

    @app.route("/getLastLog")
    def getLastLog():
        return server.getLastLog()

    @app.route("/getScreenShot")
    def getScreenShot():
        img = server.getScreenShot()
        res = make_response(img)
        res.headers['Content-Type'] = 'image/png'
        return res

    @app.route("/stop")
    def stop():
        server.main.stop()
        return "Stop"

    @app.route("/start")
    def start():
        server.main.init()
        server.main.isRunning = True
        
        return "Start"

    @app.route("/touchScreen")
    def touchScreen():
        try:
            x = int(request.args.get("x"))
            y = int(request.args.get("y"))
            server.touchScreen(x,y)
        except:
            return "点击失败"
        return "点击成功"


    @app.errorhandler(404)
    def page_not_found(error):
        return redirect(url_for('index'))

    server.main.log("服务器初始化完成")