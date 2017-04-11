
## Start Web Service Using Jetty Runner

From the directory in your project execute below commands.
```
$ C:\github\chakram-example\temperature-conversion-web-app> mvn verify -Dmaven.test.skip=true
$ C:\github\chakram-example\temperature-conversion-web-app> mvn package -Dmaven.test.skip=true
$ C:\github\chakram-example\temperature-conversion-web-app> java -jar target/dependency/jetty-runner.jar --port 4444 target/app.war
.
.
.
.
2016-11-22 13:39:13.364:INFO:oejs.AbstractConnector:main: Started ServerConnector@6c1a5b54{HTTP/1.1,[http/1.1]}{0.0.0.0:4444}
2016-11-22 13:39:13.375:INFO:oejs.Server:main: Started @10654ms
```

fahrenheit to centigrade conversion service, returning JSON body:
http://localhost:4444/app/api/conversion/toCentigrade/100


## Setup Test Infra

Before using this project make sure that you have latest version of nodejs installed on your machine.

Execute below command to install node modules which is required for executing chakram tests.
```
$ npm install
```

## Test Execution
```
$ grunt test:rest-api
```

## Test Output
```
C:\github\chakram-example\temperature-conversion-test\rest-api-tests>grunt test:rest-api
Running "mochaTest:test" (mochaTest) task
1..1
ok 1 Temperature conversion should convert fahrenheit to centigrade
# tests 1
# pass 1
# fail 0

Done, without errors.

C:\github\chakram-example\temperature-conversion-test\rest-api-tests>
```

results.txt file get generated in the same folder and you can store test execution logs.




