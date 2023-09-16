from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='register_user'),
    path('login/', views.UserLoginView.as_view(), name='login_user'),
    path('logout/',views.logout_view, name="logout_user"),
    path('predict-diabetes/', views.DiabetesPredictionView.as_view(), name='predict_diabetes'),
    path('health-record/<int:user_id>/', views.HealthRecordView.as_view(), name='health-record-detail'),
    path('get-user/<int:user_id>',views.get_user_and_profile),
]