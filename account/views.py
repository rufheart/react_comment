from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import make_password
User = get_user_model()


class CheckAuthenticated(APIView):
    def get(self, request, format=None):

        try:
            IsAuthenticated = User.is_authenticated
            if IsAuthenticated:
                return Response({'succes':'User is authenticated'})
            else:
                return Response({'isAuthenticated':'error'})
        except:
            return Response({'error':'Somethin happned'})            

@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permissions_classes = (permissions.AllowAny,)
    print('signup++++++++++++++++++++++++')
    def post(self,request, format=None):
        data=self.request.data
        username = data['username']
        password = data['password']
        re_password = data['re_password']
        print(request.data,'-------------------')
        if password == re_password:
            print('if isledi=====================================>')
            if User.objects.filter(username=username).exists():
                return Response({'error':'Username already exists'})
            else:
                if len(password)<6:
                    return Response({'error':'Password must be at least 6 characters'}) 
                else:
                    user = User.objects.create_user(username=username, password=password) 
                    user.save()    
                    return Response({'succes':'User is successfully registered'})  
        else:
            return Response ({"error":'Password do not match'})    

@method_decorator(csrf_protect, name='dispatch')
class Login_View(APIView):
    def post(self,request, format=None):
        data=self.request.data
        username=data['username']
        password=data['password']
        try:
            user = auth.authenticate(username=username, password=password)
            print(user)
            if user is not None:
                print('if')
                auth.login(request, user)
                return Response({'Success':"User is Authenticated"})
            else:
                return Response({'error':'User is not authenticated'})    
        except:
            print(request.error)
            return Response({'error':'Something else error'})

                
        return Response({'nemm':"aa"})

class Logout_View(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'succes':'User is logout'})   
        except:
            return Response({'error':'Something is wrong logout'})     

class Delete_View(APIView):
    def delete(self, request, format=None):
        try:
            user=self.request.user 
            User.objects.filter(id=user.id).delete()   
            return Response({'succes':'User is deleted sucsessfully'})    
        except:
            return Response({"error":"Something is happned"})           

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'succes':'CSRF cookie set'})
