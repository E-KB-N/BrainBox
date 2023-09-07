from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Career
from .serializers import CareerSerializer
from .recommend.main1 import main

@api_view(['POST', 'GET'])
def career_recommended(request):
    if request.method == "POST":
        
        serializer = CareerSerializer(data = request.data)
        if serializer.is_valid():
            # serializer.save()
            info = serializer.data
            recommeded_courses = main(info["career_choice"], info["interest"])
            print(info["career_choice"])
            return Response({"RC":recommeded_courses}, status = status.HTTP_200_OK)
    
    elif request.method == 'GET':
        
        return Response({"message":"Hello"},)
    else :
        return Response({"message":"nothing"})

