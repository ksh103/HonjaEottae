from urllib import request
from flask import Flask
import pymysql
import test

import ssl

app = Flask(__name__)

app.debug = True

db = pymysql.connect(
    host='j6e103.p.ssafy.io', # 접근 주소
    port=3306,  # 접근 포트 번호
    user='ssafy',  # 아이디
    passwd='ssafy',  # 비밀번호
    db='ssafy',  # DB 이름
    charset='utf8',    
    cursorclass = pymysql.cursors.DictCursor,
    init_command='SET NAMES UTF8' # UTF8 로  가져오기
)


@app.route('/data/<userId>', methods=['GET'])
def index(userId):

  mycursor = db.cursor()

  sql = '''select c.keyword_name from tour t \
  left join course_keyword c on c.course_id = t.course_id \
  where t.is_start = 1 and t.user_id = %s \
  group by c.keyword_name\
  order by count(*) desc\
  limit 1'''

  mycursor.execute(sql, [userId])

  result = mycursor.fetchone()

  keyword = result["keyword_name"]

  return test.recommend_course(keyword)


if __name__ == '__main__':
  #app.run(host='http://localhost', port=5000, debug=True)
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    ssl_context.load_cert_chain(certfile='/root/cert.pem', keyfile='/root/privkey.pem', password='ssafy')
    app.run(host="0.0.0.0", port=5000, ssl_context=ssl_context, debug=True)
    #app.run(host='0.0.0.0', port=5000, debug=True, ssl_context=ssl_context)
