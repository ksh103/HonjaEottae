from flask import Flask

import test


app = Flask(__name__)

app.debug = True


@app.route('/data', methods=['GET'])
def index():
  return test.recommend_course(keyword_name = '바다')


if __name__ == '__main__':
  app.run(host='http://localhost', port=5000, debug=True)