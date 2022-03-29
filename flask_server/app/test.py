import pandas as pd
import numpy as np
import pymysql

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

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

pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)

# 특정 TABLE 데이터 가져오기
COURSE_TABLE = 'course'  # 코스 테이블
cursor = db.cursor()


# 디비 가져오기
sql = f"SELECT * FROM {COURSE_TABLE}"
cursor.execute(sql)
COURSE_TABLE = cursor.fetchall()
COURSE_TABLE


course_result = pd.DataFrame(COURSE_TABLE)
course_result.set_index('course_id',drop=True)


# 특정 TABLE 데이터 가져오기
KEYWORD_TABLE = 'course_keyword'  # 코스 테이블
cursor = db.cursor()


# 디비 가져오기
sql = f"SELECT * FROM {KEYWORD_TABLE}"
cursor.execute(sql)
KEYWORD_TABLE = cursor.fetchall()
KEYWORD_TABLE


keyword_result = pd.DataFrame(KEYWORD_TABLE)
keyword_result.set_index('keyword_id',drop=True)


new_course = pd.merge(left = course_result, right = keyword_result, how = "left", on = "course_id")
new_course = new_course.dropna(subset=["keyword_name"])
course_data = new_course.reset_index(drop=False)


counter_vector = CountVectorizer(ngram_range=(1,3))
c_vector_keywords = counter_vector.fit_transform(course_data['keyword_name'])
c_vector_keywords.shape


similarity_keywords = cosine_similarity(c_vector_keywords, c_vector_keywords).argsort()[:,::-1]
similarity_keywords.shape


def recommend_course(keyword_name):
    target_course_index = course_data[course_data['keyword_name'] == keyword_name].index.values
    
    sim_index = similarity_keywords[target_course_index].reshape(-1)
    
#     sim_index = sim_index[sim_index!=target_course_index]
    
    result = course_data.iloc[sim_index][:10]
    
    return  result.set_index('course_id',drop=True).to_json(force_ascii=False, orient='records')