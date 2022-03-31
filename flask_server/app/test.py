import pandas as pd
import numpy as np
import pymysql

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# -------------------------------------------------------------------------------------------#
# db 연결
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

# pd.set_option('display.max_columns', None)
# pd.set_option('display.max_rows', None)


# -------------------------------------------------------------------------------------------#
# course TABLE 데이터 가져오기
COURSE_TABLE = 'course'  
cursor = db.cursor()

# db 가져오기
sql = f"SELECT course_id, course_name FROM {COURSE_TABLE}"
cursor.execute(sql)
COURSE_TABLE = cursor.fetchall()

course_result = pd.DataFrame(COURSE_TABLE)
course_result.set_index('course_id',drop=True)


# -------------------------------------------------------------------------------------------#
# course_data TABLE 데이터 가져오기
COURSE_DATA_TABLE = 'course_data'  # 코스 테이블
cursor = db.cursor()

# db 가져오기
sql = f"SELECT course_id, tourist_id FROM {COURSE_DATA_TABLE} where course_data_id = 1"
cursor.execute(sql)
COURSE_DATA_TABLE = cursor.fetchall()

course_data_result = pd.DataFrame(COURSE_DATA_TABLE)
course_data_result.set_index('course_id',drop=True)

# -------------------------------------------------------------------------------------------#
# course table과 course_data table merge
new_course_data = pd.merge(left = course_result, right = course_data_result, how = "left", on = "course_id")
# Nan값 삭제
new_course_data = new_course_data.dropna(subset=["tourist_id"])
# 관광지 아이디 int형변환
new_course_data = new_course_data.astype({'tourist_id': 'int'})
new_course_data.set_index('course_id',drop=True)

# tourist_img_path TABLE 데이터 가져오기
TOURIST_IMG_PATH_TABLE = 'tourist_img_path'  # 코스 테이블
cursor = db.cursor()

# -------------------------------------------------------------------------------------------#
# 디비 가져오기
sql = f"SELECT tourist_id, min(file_id) as file_id FROM {TOURIST_IMG_PATH_TABLE} group by tourist_id"
cursor.execute(sql)
TOURIST_IMG_PATH_TABLE = cursor.fetchall()

tourist_img_path = pd.DataFrame(TOURIST_IMG_PATH_TABLE)
tourist_img_path.set_index('tourist_id',drop=True)

# -------------------------------------------------------------------------------------------#
# new_course_data table과 tourist_img_path table merge
course_final = pd.merge(left = new_course_data, right = tourist_img_path, how = "left", on = "tourist_id")
# fileId Nan값은 0으로 처리
course_final.fillna(0, inplace=True)
# int형으로 변환
course_final = course_final.astype({'file_id': 'int'})
course_final.set_index('course_id',drop=True)

# -------------------------------------------------------------------------------------------#
# course_keyword TABLE 데이터 가져오기
KEYWORD_TABLE = 'course_keyword'  
cursor = db.cursor()

# db 가져오기
sql = f"SELECT * FROM {KEYWORD_TABLE}"
cursor.execute(sql)
KEYWORD_TABLE = cursor.fetchall()

keyword_result = pd.DataFrame(KEYWORD_TABLE)
keyword_result.set_index('keyword_id',drop=True)

# -------------------------------------------------------------------------------------------#
# course_final table과 keyword_result table merge
new_course = pd.merge(left = course_final, right = keyword_result, how = "left", on = "course_id")

# nan값 지우기
new_course = new_course.dropna(subset=["keyword_name"])
course_data = new_course.reset_index(drop=True)
course_data = course_data.astype({'keyword_id': 'int'})



# -------------------------------------------------------------------------------------------#
counter_vector = CountVectorizer(ngram_range=(0,3))

# 키워드 이름 -> 벡터화
c_vector_keywords = counter_vector.fit_transform(course_data['keyword_name'])
# c_vector_keywords.shape
similarity_keywords = cosine_similarity(c_vector_keywords, c_vector_keywords).argsort()[:,::-1]
# print(similarity_keywords)
# similarity_keywords.shape


# -------------------------------------------------------------------------------------------#
def recommend_course(keyword_name):
    target_course_index = course_data[course_data['keyword_name'] == keyword_name].index.values
    
    sim_index = similarity_keywords[target_course_index].reshape(-1)
    
#     sim_index = sim_index[sim_index!=target_course_index]
    
    result = course_data.iloc[sim_index][:10]

    result = result.loc[:, ['course_id', 'course_name', 'tourist_id', 'file_id']]
    
    return result.set_index('course_id',drop=True).to_json(force_ascii=False, orient='records')
