
from rest_framework import viewsets
from .models import Reserva
from .serializers import ReservaSerializer


class ReservaViewSet(viewsets.ModelViewSet):
    """
    ViewSet para CRUD de reservas.
    """
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer
