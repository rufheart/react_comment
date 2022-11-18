from django.urls import path
from account.api.views import GetCSRFToken,SignupView,Login_View,Logout_View,Delete_View,CheckAuthenticated
urlpatterns = [
    path('signup/',SignupView.as_view()),
    path('csrf_cookie',GetCSRFToken.as_view()),
    path('login/',Login_View.as_view()),
    path('logout/',Logout_View.as_view()),
    path('delete/',Delete_View.as_view()),
    path('auth/',CheckAuthenticated.as_view())
]