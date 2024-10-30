# WHAT IS THIS APPLICATION DO?

### This is a simple application where frontend is written in react.js which contains two buttons which fetches city and mountain photos upon click from two microservices. One microservice is written in golang which serves all the city photos at port 3142 and other one is written in node.js which serves the mountain photos at port 3143.


# STEPS TO RUN IN PRODUCTION 

1. Create a k8s cluster

```
kind create cluster
```

2. After creation apply all the yaml file prod directory.

```
kubectl apply -k .\manifest_files\env\prod\  
```

3. Then install nginx ingress controller.

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.0-beta.0/deploy/static/provider/cloud/deploy.yaml
```

4. If in the local environment use port forward to access the nginx service through browser 

```
kubectl port-forward svc/ingress-nginx-controller -n ingress-nginx 80:80 
```

5. Also add the host ip and dns in /etc/hosts to solve the dns resolving. (/C/Windows/System32/drivers/etc/hosts
)

```
127.0.0.1 app.microservices.com
```
6. Then access http://app.microservices.com/

# STEPS TO RUN IN DEVELOPMENT

1. Create a k8s cluster

```
kind create cluster
```

2. After creation apply all the yaml file prod directory.

```
kubectl apply -k .\manifest_files\env\dev\  
```


3. If in the local environment use port forward to access the nginx service through browser

```
kubectl port-forward svc/client-svc -n client 3000:3000 
kubectl port-forward svc/cities-svc -n ingress-nginx 3142:3142 
kubectl port-forward svc/mountains-svc -n mountains 3143:3143 
```

4. Then access the http://localhost:3000


### DIFFERENCE IN PROD AND DEV ENVIRONMENT

1. Docker image tag is changed in prod docker image is pranit007/photos-client:prod while in dev , docker image is pranit007/photos-client:dev

2. In prod env each deployment has 3 replicas while in dev each deployment has only 1 replica

3. In prod environment ingress is used, but in dev environment ingress is not used