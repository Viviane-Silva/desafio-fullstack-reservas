from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservaViewSet, AmbienteViewSet

router = DefaultRouter()
router.register(r'reservas', ReservaViewSet),
router.register(r'ambientes', AmbienteViewSet, basename='ambientes')

urlpatterns = [
    path('', include(router.urls)),
]
