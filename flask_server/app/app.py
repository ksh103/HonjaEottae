from flask import Flask

import test
import ssl

app = Flask(__name__)
app.debug = True


@app.route('/data', methods=['GET'])
def index():
  return test.recommend_course(keyword_name = '바다')


if __name__ == '__main__':
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    ssl_context.load_cert_chain(certfile='/root/cert.pem', keyfile='/root/privkey.pem', password='ssafy')
    app.run(host="0.0.0.0", port=5000, ssl_context=ssl_context, debug=True)
    #app.run(host='0.0.0.0', port=5000, debug=True, ssl_context=ssl_context)
