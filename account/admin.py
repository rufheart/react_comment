from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from account.models import User

class Admin_User(UserAdmin):
    pass

admin.site.register(User)