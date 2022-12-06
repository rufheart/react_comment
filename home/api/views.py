from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from django.http import Http404, HttpResponse
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from home.models import Comments, Reply
from home.api.serializer import CommentsSerialize,CreateCommentSerialize,ReplySerialize,PatchCommentSerialize
from rest_framework import status
from rest_framework.permissions import BasePermission, IsAuthenticated,IsAdminUser, SAFE_METHODS,IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from home.api.permissons import MyPermissions
from rest_framework.pagination import PageNumberPagination
# from rest_framework.settings import api_settings
from home.api.pagination import BasicPagination
from django.contrib import auth
from rest_framework.generics import ListAPIView


class Test(ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerialize
    pagination_class = BasicPagination

class ListClass(APIView, BasicPagination):
    permission_classes = [MyPermissions]    

    # def get(self, request, *args, **kwargs): 
    #     all = Comments.objects.all()
    #     serial = CommentsSerialize(all, many = True)    
    #     return Response(serial.data)

    def get(self, request, *args, **kwargs):             
        print('get ilsedi++++++++++')
        all = Comments.objects.all()
        all = self.paginate_queryset(all, request, view=self)
        all = CommentsSerialize(all, many = True)
        return Response(data=all.data)


    def post(self,request,*args, **kawrgs):
        print('Post isledi')
        if request.data['username'] == request.user.id:
            seri = CreateCommentSerialize(data=request.data)
            if seri.is_valid():
                seri.save()
                return Response(seri.data, status=status.HTTP_201_CREATED)
        return Response("You can't post comment use other users id's", status=status.HTTP_400_BAD_REQUEST)  

class ListClassPK(APIView):
    permission_classes = [MyPermissions]
    def get(self, request, pk, *args, **kwargs): 
        dataTen=Comments.objects.get(id=pk)
        serial = CommentsSerialize(dataTen)
        return Response (serial.data) 

    def put(self, request, pk, *args, **kwargs):
        dataTen=Comments.objects.get(id=pk)
    # if request.user.is_superuser or dataTen.username.id==request.user.id:
        serial = PatchCommentSerialize(dataTen, data=request.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data)  
        return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)   


    def patch(self, request, pk, *args, **kwargs):
        dataTen=Comments.objects.get(id=pk)
    # if request.user.is_superuser or dataTen.username.id==request.user.id:
        serial = PatchCommentSerialize(dataTen, data=request.data, partial=True)
        if serial.is_valid():
            serial.save()
            return Response(serial.data)  
        return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)   
        return Response("You can't change comment values, because you aren't this comment owner" ,status=status.HTTP_400_BAD_REQUEST)     
        
    def delete(self, request, pk, *args, **kwargs):
        data = Comments.objects.get(id=pk)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)       



class ListReply(APIView):
    def get(self, request, pk, *args, **kwargs):
        dataTen=Reply.objects.get(id=pk)
        serial=ReplySerialize(dataTen, serial.data)
        return Response(status=status.HTTP_204_NO_CONTENT)
