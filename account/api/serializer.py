from tokenize import Token
from home.models import *
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ['id']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        print('create')
        user = User(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user   

class MyTokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        user = UserSerializer(self.user)
        data.update(user.data)
        return data


