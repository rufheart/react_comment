from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from account.api.serializer import UserSerializer
from rest_framework import status
from rest_framework import generics

class RegistserView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        print('post ilsdedi')
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            if len(request.data['password'])>6:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response('Your password is len must be minimum 7 charcter', status=status.HTTP_400_BAD_REQUEST)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    