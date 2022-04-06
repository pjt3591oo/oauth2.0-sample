# Oauth 2.0

react 클라이언트는 3000번 포트, express 서버는 5500번 포트를 사용한다.

http://localhost:3000/login에서 구글 로그인을 진행할 수 있다.


### 환경변수

server, front 각각 .env를 만들어 client_id, client_secret을 설정한다.

* front

```
REACT_APP_CLIENT_ID=
REACT_APP_CLIENT_SECRET_ID=
```

* server

```
CLIENT_ID=
CLIENT_SECRET_ID=
```