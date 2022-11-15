from distutils.log import error
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from home.models import Comments, Reply
from home.api.serializer import CommentsSerialize,CreateCommentSerialize
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