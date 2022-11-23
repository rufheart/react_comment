from distutils.log import error
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from home.models import Comments, Reply
from home.api.serializer import CommentsSerialize,CreateCommentSerialize,ReplySerialize
from rest_framework import status

class ListClass(APIView):
    def get(self, request, *args, **kwargs):
        all = Comments.objects.all()
        serial = CommentsSerialize(all,many=True, context = {'request':request})
        return Response(serial.data)
    
    def post(self,request,*args,**kawrgs):
        print('posy islediiiiiiiiiiiiiiiiiiiiiiiiiii',request.data)
        seri = CreateCommentSerialize(data=request.data)
        if seri.is_valid():
            seri.save()
            return Response(seri.data, status=status.HTTP_201_CREATED)
        return Response(seri.errors, status=status.HTTP_400_BAD_REQUEST)  

class ListClassPK(APIView):
    def get(self, request, pk, *args, **kwargs): 
        dataTen=Comments.objects.get(id=pk)
        serial = CommentsSerialize(dataTen)
        return Response (serial.data) 

    def put(self, request, pk, *args, **kwargs):
        print('put ilsedi++++++++++++++++++++',pk)
        dataTen=Comments.objects.get(id=pk)
        print(dataTen)
        serial = CreateCommentSerialize(dataTen, data=request.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data)  
        return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)   

    def delete(self, request, pk, *args, **kwargs):
        data = Comments.objects.get(id=pk)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)       



class ListReply(APIView):
    def get(self, request, pk, *args, **kwargs):
        dataTen=Reply.objects.get(id=pk)
        serial=ReplySerialize(dataTen, serial.data)
        return Response(status=status.HTTP_204_NO_CONTENT)
