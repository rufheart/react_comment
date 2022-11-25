from dataclasses import field
from datetime import datetime
from pyexpat import model
from rest_framework import serializers
from ..models import Comments, Reply
from django.contrib.auth import get_user_model

User=get_user_model()

class UserSerialize(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','image']

class ReplySerialize(serializers.ModelSerializer):
    username = UserSerialize()
    class Meta:
        model = Reply
        fields = ('id','username','comment2','number2','reply','comment2')


class CommentsSerialize(serializers.ModelSerializer):
    username = UserSerialize()
    comments1 = ReplySerialize(many=True)
    class Meta:
        model  = Comments
        fields = ('id','username','number','comment1','comments1')

class CreateCommentSerialize(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('username','number','comment1')
class PatchCommentSerialize(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('number','comment1')        




