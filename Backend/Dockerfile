FROM openjdk:8-jdk-alpine
ARG JAR_FILE=build/libs/tourist-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar","--spring.config.name=application-prod"]
#ENTRYPOINT ["java","-jar","/app.jar"]
