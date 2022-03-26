from flask import Flask


app = Flask(__name__)

app.debug = True


@app.route('/data', methods=['GET'])
def index():
  return "test"


if __name__ == '__main__':
  app.run(host='http://localhost', port=5000, debug=True)