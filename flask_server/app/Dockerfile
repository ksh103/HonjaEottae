# Image Download
FROM python:3.8.5
WORKDIR /app

# Copy files
COPY . .

# Install packages
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

#EXPOSE 5000
CMD ["python", "./app.py", "0.0.0.0:5000"]