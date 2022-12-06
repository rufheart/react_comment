from django.contrib import admin
from home.models import Comments, Reply
from .models import Comments,Reply

class CommentAdmin(admin.TabularInline):
    model = Comments
    fields = ('id','comment1','username','number','create_date')

class ReplyAdmin(admin.TabularInline):
    model = Reply
    fields = ('id','username','comment2','number2','reply')

admin.site.register([Comments,Reply])

