from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='register_user'),
    path('login/', views.UserLoginView.as_view(), name='login_user'),
    path('user/', views.get_single_user, name='single_user'),
    path('predict-diabetes/', views.DiabetesPredictionView.as_view(), name='predict_diabetes'),
]
