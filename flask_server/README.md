

## **Flask 환경 설정**

```powershell
# 가상 환경 설정
pip install virtualenv

# 가상 환경 버전 확인
virtualenv --version

# 폴더 생성
virtualenv flask_web & cd flask_web

# 가상 환경 활성화
Scripts\activate

# 다음과 같이 활성화
(flask_web) D:\ssafy\flask_server\flask_web>
```

## **Flask library 설치**

```powershell
#Flask 설치
pip install flask

#필요한 flask 라이브러리 설치 후 requirements.txt 기록
pip freeze > requirements.txt

# requirements.txt에 기록된 라이브러리 설치
pip install -r requirements.txt
```