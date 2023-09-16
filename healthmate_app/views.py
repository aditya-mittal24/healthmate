from rest_framework import generics
from rest_framework import status, views
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.http import JsonResponse
from .serializers import UserSerializer, UserProfileSerializer, HealthRecordSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from joblib import load
from .models import HealthRecord, UserProfile
from notebooks.diabetes_prediction import DiabetesPredictor


class DiabetesPredictionView(views.APIView):
    def post(self, request):
        gender = int(request.data.get("gender"))
        age = int(request.data.get("age"))
        hypertension = int(request.data.get("hypertension"))
        heart_disease = int(request.data.get("heart_disease"))
        smoking_history = int(request.data.get("smoking_history"))
        bmi = float(request.data.get("bmi"))
        avg_blood_sugar_level = float(
            request.data.get("avg_blood_sugar_level"))
        blood_glucose_level = float(request.data.get("blood_glucose_level"))

        input_data = (gender, age, hypertension, heart_disease,
                      smoking_history, bmi, avg_blood_sugar_level, blood_glucose_level)
        predictor = load('./savedModels/diabetes_predictor.joblib')

        prediction = predictor.predict_diabetes(input_data)
        return Response({'prediction': prediction}, status=status.HTTP_200_OK)


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({'user_id': user.id}, status=status.HTTP_201_CREATED)


class UserLoginView(views.APIView):
    def post(self, request):
        username = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            print(request.user)
            return Response({'user_id': user.id}, status=status.HTTP_201_CREATED)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response('Successfull')


@api_view(['GET'])
def get_user_and_profile(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
        user_profile = UserProfile.objects.get(user=user)

        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }

        profile_data = {
            'age': user_profile.age,
            'height': user_profile.height,
            'weight': user_profile.weight,
            'blood_group': user_profile.blood_group,
            'bmi': user_profile.bmi,
            'aadhar_no': user_profile.aadhar_no,
        }

        response_data = {
            'user': user_data,
            'profile': profile_data,
        }

        return JsonResponse(response_data)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
    except UserProfile.DoesNotExist:
        return JsonResponse({'error': 'UserProfile not found'}, status=404)

class HealthRecordView(views.APIView):
    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)

        health_records = HealthRecord.objects.filter(user=user)
        serializer = HealthRecordSerializer(health_records, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)

        data = request.POST 
        serializer = HealthRecordSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=user)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

